"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import Header from "../../components/Header";
import { projects } from "../data";

export default function ProjectPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  const [imageIndex, setImageIndex] = useState(0);
  const [fading, setFading] = useState(false);
  const [isFemale, setIsFemale] = useState(false);

  if (!project) {
    return (
      <div className="h-screen flex flex-col" style={{ backgroundColor: "#F5F5F0" }}>
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <p style={{ color: "#9A9A96" }}>Project not found.</p>
        </main>
      </div>
    );
  }

  const hasThemeToggle = !!project.altImages?.length;
  const activeImages = hasThemeToggle && isFemale ? project.altImages! : project.images;
  const accent = (hasThemeToggle && isFemale ? project.altAccent : project.modalAccent) ?? "#1C1C1A";

  const navigate = (getNext: (i: number, len: number) => number) => {
    setFading(true);
    setTimeout(() => {
      setImageIndex((i) => getNext(i, activeImages.length));
      setFading(false);
    }, 180);
  };

  const prev = () => navigate((i, len) => (i - 1 + len) % len);
  const next = () => navigate((i, len) => (i + 1) % len);

  const handleThemeToggle = (female: boolean) => {
    if (female === isFemale) return;
    setFading(true);
    setTimeout(() => {
      setIsFemale(female);
      setImageIndex(0);
      setFading(false);
    }, 180);
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden" style={{ backgroundColor: "#F5F5F0" }}>

      <Header />

      <main className="flex-1 overflow-y-auto">
        <div className="max-w-6xl mx-auto px-10 md:px-16 pt-10 pb-24">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm font-medium mb-12" style={{ color: "#9A9A96" }}>
            <Link href="/projects" className="hover:opacity-60 transition-opacity">
              Projects
            </Link>
            <span>→</span>
            <span style={{ color: accent }}>{project.name}</span>
          </div>

          {/* Title block */}
          <div className="mb-10">
            <div className="mb-2">
              <h1
                className="inline text-6xl md:text-7xl font-bold leading-none transition-colors duration-300"
                style={{ color: accent }}
              >
                {project.name}
              </h1>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 align-baseline ml-4"
                  style={{
                    color: accent,
                    border: `1.5px solid ${accent}`,
                    backgroundColor: `${accent}12`,
                    transform: "translateY(-12px)",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = `${accent}25`;
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = `${accent}12`;
                  }}
                >
                  {project.linkLabel || project.link}
                  <svg width="11" height="11" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 11L11 2M11 2H5M11 2V8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              )}
            </div>

            <p className="text-xl" style={{ color: "#5A5A56" }}>{project.subtitle}</p>
          </div>

          {/* Divider */}
          <div className="h-px mb-12" style={{ backgroundColor: "#DEDEDB" }} />

          {/* Description */}
          <div className="space-y-5 mb-8">
            {project.description.split("\n\n").map((para, i) => (
              <p key={i} className="text-base leading-relaxed" style={{ color: "#3A3A36" }}>
                {para}
              </p>
            ))}
          </div>

          {/* Stack */}
          {project.stack && project.stack.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-16">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="text-sm px-4 py-1.5 rounded-full font-medium transition-colors duration-300"
                  style={{
                    backgroundColor: `${accent}15`,
                    color: accent,
                    border: `1px solid ${accent}40`,
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          )}

          {/* Gallery */}
          {activeImages.length > 0 && (
            <div>
              {/* Theme toggle */}
              {hasThemeToggle && (
                <div className="flex justify-end mb-4">
                  <div
                    className="flex rounded-full p-1 gap-1"
                    style={{ backgroundColor: "#ECEAE4" }}
                  >
                    <button
                      type="button"
                      onClick={() => handleThemeToggle(false)}
                      className="px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200"
                      style={{
                        backgroundColor: !isFemale ? project.modalAccent : "transparent",
                        color: !isFemale ? "#fff" : "#9A9A96",
                      }}
                    >
                      ♂
                    </button>
                    <button
                      type="button"
                      onClick={() => handleThemeToggle(true)}
                      className="px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200"
                      style={{
                        backgroundColor: isFemale ? project.altAccent : "transparent",
                        color: isFemale ? "#fff" : "#9A9A96",
                      }}
                    >
                      ♀
                    </button>
                  </div>
                </div>
              )}

              <div
                className="relative rounded-2xl overflow-hidden"
                style={{ boxShadow: "0 12px 48px rgba(0,0,0,0.09)" }}
              >
                <img
                  src={activeImages[imageIndex]}
                  alt={`${project.name} screenshot ${imageIndex + 1}`}
                  className="w-full block"
                  style={{
                    opacity: fading ? 0 : 1,
                    transition: "opacity 0.18s ease",
                  }}
                />

                {activeImages.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={prev}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center text-2xl font-bold"
                      style={{
                        backgroundColor: "rgba(0,0,0,0.4)",
                        color: "#fff",
                        backdropFilter: "blur(6px)",
                      }}
                    >
                      ‹
                    </button>
                    <button
                      type="button"
                      onClick={next}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center text-2xl font-bold"
                      style={{
                        backgroundColor: "rgba(0,0,0,0.4)",
                        color: "#fff",
                        backdropFilter: "blur(6px)",
                      }}
                    >
                      ›
                    </button>
                  </>
                )}
              </div>

              {activeImages.length > 1 && (
                <div className="flex justify-center items-center gap-2.5 mt-5">
                  {activeImages.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setImageIndex(i)}
                      className="h-1.5 rounded-full transition-all duration-300"
                      style={{
                        width: i === imageIndex ? "28px" : "8px",
                        backgroundColor: accent,
                        opacity: i === imageIndex ? 0.8 : 0.25,
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
          )}

        </div>
      </main>

    </div>
  );
}
