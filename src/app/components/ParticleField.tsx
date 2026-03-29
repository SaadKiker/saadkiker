"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

interface Particle {
  x: number;
  y: number;
  homeX: number;
  homeY: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
}

const CONTENT_MAX_WIDTH = 1152; // max-w-6xl

export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pathname = usePathname();
  const isDetailPage = /^\/projects\/.+/.test(pathname);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const mouse = { x: -9999, y: -9999 };
    let particles: Particle[] = [];

    const INFLUENCE_RADIUS = 140;
    const REPEL_STRENGTH = 25;
    const RETURN_SPRING = 0.018;
    const DAMPING = 0.88;
    const BASE_DRIFT = 0.25;
    const CELL = 70;

    function getSideZones(): { leftEnd: number; rightStart: number } | null {
      if (!isDetailPage) return null;
      const w = canvas!.width;
      const contentWidth = Math.min(CONTENT_MAX_WIDTH, w);
      const margin = (w - contentWidth) / 2;
      if (margin < 40) return null;
      return { leftEnd: margin, rightStart: w - margin };
    }

    function initParticles() {
      particles = [];
      const cols = Math.ceil(canvas!.width / CELL);
      const rows = Math.ceil(canvas!.height / CELL);
      for (let col = 0; col < cols; col++) {
        for (let row = 0; row < rows; row++) {
          const x = (col + 0.15 + Math.random() * 0.7) * CELL;
          const y = (row + 0.15 + Math.random() * 0.7) * CELL;
          particles.push({
            x,
            y,
            homeX: x,
            homeY: y,
            vx: (Math.random() - 0.5) * BASE_DRIFT,
            vy: (Math.random() - 0.5) * BASE_DRIFT,
            radius: Math.random() * 3 + 2,
            opacity: Math.random() * 0.3 + 0.2,
          });
        }
      }
    }

    function resize() {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
      initParticles();
    }

    function animate() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      const zones = getSideZones();

      if (zones) {
        ctx!.save();
        ctx!.beginPath();
        ctx!.rect(0, 0, zones.leftEnd, canvas!.height);
        ctx!.rect(zones.rightStart, 0, canvas!.width - zones.rightStart, canvas!.height);
        ctx!.clip();
      }

      for (const p of particles) {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < INFLUENCE_RADIUS && dist > 0) {
          const t = 1 - dist / INFLUENCE_RADIUS;
          const force = t * t * REPEL_STRENGTH;
          p.vx += (dx / dist) * force * 0.01;
          p.vy += (dy / dist) * force * 0.01;
        }

        p.vx += (p.homeX - p.x) * RETURN_SPRING * 0.1;
        p.vy += (p.homeY - p.y) * RETURN_SPRING * 0.1;
        p.vx += (Math.random() - 0.5) * 0.02;
        p.vy += (Math.random() - 0.5) * 0.02;
        p.vx *= DAMPING;
        p.vy *= DAMPING;
        p.x += p.vx;
        p.y += p.vy;

        const grad = ctx!.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
        grad.addColorStop(0, `rgba(28, 28, 26, ${p.opacity})`);
        grad.addColorStop(1, `rgba(28, 28, 26, 0)`);
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx!.fillStyle = grad;
        ctx!.fill();
      }

      if (zones) ctx!.restore();

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

    resize();
    animate();

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
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
