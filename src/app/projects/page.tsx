"use client";

import Image from "next/image";
import { useState, useCallback } from "react";
import Header from "../components/Header";

type Project = {
  id: string;
  name: string;
  subtitle: string;
  cover: string;
  description: string;
  createdOn: string;
  link: string;
  linkLabel: string;
  images: string[];
  modalBg?: string;
  modalAccent?: string;
};

const projects: Project[] = [
  {
    id: "scanini",
    name: "Scanini",
    subtitle: "Digital Menu SaaS Platform",
    cover: "/projects/scaniniCover.png",
    description:
      "Scanini is a production ready SaaS web platform developed for restaurants to manage digital menus, online ordering, and business configuration.\n\nI built the system end to end, including the public customer facing menu, a secure admin dashboard, and backend logic designed for multi tenant usage.\n\nThe platform includes authentication, role based access, dynamic content management, and a responsive UI, with a strong focus on scalability, performance, and maintainable architecture.",
    createdOn: "Jan 1st, 2026",
    link: "https://scanini.ma",
    linkLabel: "scanini.ma",
    images: [
      "/projects/scanini1.png",
      "/projects/scanini2.png",
      "/projects/scanini3.png",
      "/projects/scanini4.png",
      "/projects/scanini5.png",
    ],
    modalBg: "#fff0e8",
    modalAccent: "#e48a6c",
  },
  {
    id: "rituals",
    name: "MyRituals",
    subtitle: "Minimal Habit & Ritual Tracker",
    cover: "/projects/MyritualsCover.png",
    description: "MyRituals is a minimal web platform designed to help users track habits, goals, and daily routines without the complexity of traditional productivity apps.\n\nI designed and built the system around three simple areas, goals, habits, and a structured daily schedule, focusing on clarity and a distraction free interface that encourages consistency and long term discipline.",
    createdOn: "Jan 31st, 2026",
    link: "https://myrituals.vercel.app",
    linkLabel: "MyRituals.vercel.app",
    images: [
      "/projects/myrituals1.png",
      "/projects/myrituals2.png",
      "/projects/myrituals3.png",
    ],
  },
];

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [imageIndex, setImageIndex] = useState(0);
  const [fading, setFading] = useState(false);
  const [lightbox, setLightbox] = useState(false);

  const openProject = (project: Project) => {
    setSelected(project);
    setImageIndex(0);
  };

  const closeProject = () => setSelected(null);

  const navigate = useCallback((getNext: (i: number, len: number) => number) => {
    if (!selected) return;
    setFading(true);
    setTimeout(() => {
      setImageIndex((i) => getNext(i, selected.images.length));
      setFading(false);
    }, 200);
  }, [selected]);

  const prev = () => navigate((i, len) => (i - 1 + len) % len);
  const next = () => navigate((i, len) => (i + 1) % len);

  return (
    <div className="h-screen flex flex-col overflow-hidden" style={{ backgroundColor: "#f9e5bc" }}>

      <Header />

      {/* Grid */}
      <main className="flex-1 overflow-y-auto px-4 md:px-6 pt-14 pb-8">
        <div className="grid grid-cols-2 gap-x-36 gap-y-10 max-w-7xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => openProject(project)}
              className="cursor-pointer group rounded-2xl overflow-hidden"
              style={{ border: "2px solid #b5813c" }}
            >
              <div className="relative w-full" style={{ aspectRatio: "1200/630" }}>
                <Image
                  src={project.cover}
                  alt={project.name}
                  fill
                  className="object-cover transition-opacity group-hover:opacity-90"
                />
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6"
          style={{ backgroundColor: "rgba(0,0,0,0.55)" }}
          onClick={closeProject}
        >
          <div
            className="relative w-full max-w-7xl rounded-2xl overflow-hidden flex flex-col md:flex-row"
            style={{
              backgroundColor: selected.modalBg ?? "#f9e5bc",
              border: `2px solid ${selected.modalAccent ?? "#b5813c"}`,
              minHeight: "70vh",
              maxHeight: "80vh",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={closeProject}
              className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center rounded-full text-stone-500 hover:text-stone-800 transition-colors text-2xl leading-none"
            >
              ×
            </button>

            {/* Left — Info (40%) */}
            <div className="md:w-2/5 flex flex-col p-7 md:p-9 overflow-y-auto">
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-1" style={{ color: selected.modalAccent ?? "#b5813c" }}>
                  {selected.name}
                  {selected.subtitle && (
                    <span className="block text-lg md:text-xl font-normal text-stone-500 mt-0.5">
                      {selected.subtitle}
                    </span>
                  )}
                </h2>

                <div className="mt-5 space-y-3">
                  {selected.description.split("\n\n").map((para, i) => (
                    <p key={i} className="text-stone-600 text-lg leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>

                {selected.link && (
                  <a
                    href={selected.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-10 text-base font-medium hover:opacity-70 transition-opacity"
                    style={{ color: selected.modalAccent ?? "#b5813c" }}
                  >
                    <span className="text-stone-400">Visit →</span>
                    {selected.linkLabel || selected.link}
                  </a>
                )}
              </div>

              {selected.createdOn && (
                <p className="text-sm text-stone-400 mt-6">Created on {selected.createdOn}</p>
              )}
            </div>

            {/* Right — Images (60%) */}
            <div className="md:w-3/5 flex flex-col items-center justify-center px-4 py-6 gap-3">
              {/* Arrows + image */}
              <div className="flex items-center justify-center gap-4 w-full">
                {selected.images.length > 1 && (
                  <button
                    onClick={prev}
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-3xl font-bold transition-opacity hover:opacity-60"
                    style={{ color: selected.modalAccent ?? "#b5813c" }}
                  >
                    ‹
                  </button>
                )}

                <div className="flex-1 flex items-center justify-center overflow-hidden rounded-xl" style={{ border: `3px solid ${selected.modalAccent ?? "#d6b98c"}` }}>
                  {selected.images.length > 0 ? (
                    <img
                      key={imageIndex}
                      src={selected.images[imageIndex]}
                      alt={`${selected.name} screenshot ${imageIndex + 1}`}
                      className="w-full h-auto object-contain cursor-zoom-in"
                      style={{ opacity: fading ? 0 : 1, transition: "opacity 0.2s ease" }}
                      onClick={() => setLightbox(true)}
                    />
                  ) : (
                    <p className="text-stone-400 text-sm py-16">No images yet</p>
                  )}
                </div>

                {selected.images.length > 1 && (
                  <button
                    onClick={next}
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-3xl font-bold transition-opacity hover:opacity-60"
                    style={{ color: selected.modalAccent ?? "#b5813c" }}
                  >
                    ›
                  </button>
                )}
              </div>

              {/* Dots — right below image */}
              {selected.images.length > 1 && (
                <div className="flex justify-center gap-2 pt-2">
                  {selected.images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setImageIndex(i)}
                      className="w-2 h-2 rounded-full transition-opacity"
                      style={{ backgroundColor: selected.modalAccent ?? "#b5813c", opacity: i === imageIndex ? 1 : 0.35 }}
                    />
                  ))}
                </div>
              )}
            </div>

          </div>
        </div>
      )}

      {/* Lightbox */}
      {lightbox && selected && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.85)" }}
          onClick={() => setLightbox(false)}
        >
          <img
            src={selected.images[imageIndex]}
            alt={`${selected.name} screenshot ${imageIndex + 1}`}
            className="max-w-full max-h-full object-contain rounded-xl cursor-zoom-out"
            style={{ boxShadow: "0 0 40px rgba(0,0,0,0.5)" }}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={() => setLightbox(false)}
            className="absolute top-5 right-5 text-white text-3xl leading-none hover:opacity-60 transition-opacity"
          >
            ×
          </button>
        </div>
      )}

    </div>
  );
}
