"use client";

import { useEffect, useRef } from "react";

const COUNT = 14;
const LERP = 0.3;

export default function CustomCursor() {
  const trailRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let mouseX = 0, mouseY = 0;
    const pts = Array.from({ length: COUNT }, () => ({ x: 0, y: 0 }));
    let raf: number;
    let started = false;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!started) {
        pts.forEach((p) => { p.x = mouseX; p.y = mouseY; });
        started = true;
      }
    };

    const animate = () => {
      pts[0].x += (mouseX - pts[0].x) * LERP;
      pts[0].y += (mouseY - pts[0].y) * LERP;

      for (let i = 1; i < COUNT; i++) {
        pts[i].x += (pts[i - 1].x - pts[i].x) * LERP;
        pts[i].y += (pts[i - 1].y - pts[i].y) * LERP;
      }

      trailRefs.current.forEach((el, i) => {
        if (!el) return;
        const t = i / (COUNT - 1);
        const size = 7 - t * 5;
        const opacity = 1 - t * 0.85;
        el.style.transform = `translate(${pts[i].x - size / 2}px, ${pts[i].y - size / 2}px)`;
        el.style.width = `${size}px`;
        el.style.height = `${size}px`;
        el.style.opacity = `${opacity}`;
      });

      raf = requestAnimationFrame(animate);
    };

    document.documentElement.style.cursor = "none";

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {Array.from({ length: COUNT }).map((_, i) => (
        <div
          key={i}
          ref={(el) => { trailRefs.current[i] = el; }}
          className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full"
          style={{ backgroundColor: "#b5813c", willChange: "transform" }}
        />
      ))}
    </>
  );
}
