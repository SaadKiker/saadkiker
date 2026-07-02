"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

interface Needle {
  x: number;
  y: number;
  angle: number;
  spin: number; // angular velocity from pulses
  glow: number; // 0..1 extra presence near cursor / pulses
  phase: number; // per-needle offset for the ambient breeze
}

interface Pulse {
  x: number;
  y: number;
  radius: number;
  age: number;
}

const INK = "28, 28, 26";
const CONTENT_MAX_WIDTH = 1152; // max-w-6xl
const SPACING = 42;
const NEEDLE_LENGTH = 13;
const INFLUENCE = 260;
const PULSE_SPEED = 8;
const PULSE_BAND = 70;
const PULSE_LIFE = 80;

export default function NeedleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pathname = usePathname();
  const isDetailPage = /^\/projects\/.+/.test(pathname);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let animId: number;
    let w = 0;
    let h = 0;
    let t = 0;
    const mouse = { x: -9999, y: -9999 };
    let needles: Needle[] = [];
    let pulses: Pulse[] = [];

    function initNeedles() {
      needles = [];
      const cols = Math.ceil(w / SPACING) + 1;
      const rows = Math.ceil(h / SPACING) + 1;
      for (let col = 0; col < cols; col++) {
        for (let row = 0; row < rows; row++) {
          needles.push({
            x: col * SPACING + (row % 2 === 0 ? 0 : SPACING / 2),
            y: row * SPACING,
            angle: Math.random() * Math.PI * 2,
            spin: 0,
            glow: 0,
            phase: Math.random() * Math.PI * 2,
          });
        }
      }
    }

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas!.width = w * dpr;
      canvas!.height = h * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      initNeedles();
      if (reducedMotion) drawFrame(); // render one static frame
    }

    // Shortest-path angular interpolation
    function lerpAngle(a: number, b: number, k: number): number {
      let d = (b - a) % (Math.PI * 2);
      if (d > Math.PI) d -= Math.PI * 2;
      if (d < -Math.PI) d += Math.PI * 2;
      return a + d * k;
    }

    // On project detail pages, needles only render in the side margins
    // outside the content column
    function getSideZones(): { leftEnd: number; rightStart: number } | null {
      if (!isDetailPage) return null;
      const contentWidth = Math.min(CONTENT_MAX_WIDTH, w);
      const margin = (w - contentWidth) / 2;
      if (margin < 40) return null;
      return { leftEnd: margin, rightStart: w - margin };
    }

    function drawFrame() {
      ctx!.clearRect(0, 0, w, h);
      ctx!.lineCap = "round";

      const zones = getSideZones();
      if (zones) {
        ctx!.save();
        ctx!.beginPath();
        ctx!.rect(0, 0, zones.leftEnd, h);
        ctx!.rect(zones.rightStart, 0, w - zones.rightStart, h);
        ctx!.clip();
      }

      for (const n of needles) {
        // Ambient breeze: slow coherent wave across the grid
        const breeze =
          Math.sin(n.x * 0.004 + t * 0.5 + n.phase * 0.3) * 0.9 +
          Math.cos(n.y * 0.003 - t * 0.35) * 0.7;

        let targetAngle = breeze;
        let targetGlow = 0;

        // Near the cursor, needles align toward it, like iron filings
        const dx = mouse.x - n.x;
        const dy = mouse.y - n.y;
        const dist = Math.hypot(dx, dy);
        if (dist < INFLUENCE) {
          const strength = 1 - dist / INFLUENCE;
          targetAngle = Math.atan2(dy, dx);
          targetGlow = strength * strength;
        }

        // Pulses spin needles as the ring passes through
        for (const p of pulses) {
          const edge = Math.abs(Math.hypot(n.x - p.x, n.y - p.y) - p.radius);
          if (edge < PULSE_BAND) {
            const power =
              (1 - edge / PULSE_BAND) * (1 - p.age / PULSE_LIFE);
            n.spin += power * 0.25;
            targetGlow = Math.max(targetGlow, power);
          }
        }

        n.spin *= 0.92;
        n.angle = lerpAngle(n.angle, targetAngle, dist < INFLUENCE ? 0.12 : 0.045);
        n.angle += n.spin;
        n.glow += (targetGlow - n.glow) * 0.1;

        const len = (NEEDLE_LENGTH / 2) * (1 + n.glow * 0.7);
        const cos = Math.cos(n.angle) * len;
        const sin = Math.sin(n.angle) * len;
        const alpha = 0.14 + n.glow * 0.45;

        ctx!.beginPath();
        ctx!.moveTo(n.x - cos, n.y - sin);
        ctx!.lineTo(n.x + cos, n.y + sin);
        ctx!.strokeStyle = `rgba(${INK}, ${alpha})`;
        ctx!.lineWidth = 1 + n.glow * 0.6;
        ctx!.stroke();
      }

      if (zones) ctx!.restore();

      pulses = pulses.filter((p) => p.age < PULSE_LIFE);
      for (const p of pulses) {
        p.radius += PULSE_SPEED;
        p.age++;
      }
    }

    function animate() {
      t += 0.016;
      drawFrame();
      animId = requestAnimationFrame(animate);
    }

    function onMouseMove(e: MouseEvent) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }

    function onMouseLeave() {
      mouse.x = -9999;
      mouse.y = -9999;
    }

    function onClick(e: MouseEvent) {
      pulses.push({ x: e.clientX, y: e.clientY, radius: 10, age: 0 });
    }

    function onTouchMove(e: TouchEvent) {
      const touch = e.touches[0];
      if (!touch) return;
      mouse.x = touch.clientX;
      mouse.y = touch.clientY;
    }

    function onTouchStart(e: TouchEvent) {
      const touch = e.touches[0];
      if (!touch) return;
      pulses.push({ x: touch.clientX, y: touch.clientY, radius: 10, age: 0 });
    }

    resize();
    if (!reducedMotion) animate();

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("click", onClick);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onMouseLeave);
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("click", onClick);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onMouseLeave);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [isDetailPage]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
