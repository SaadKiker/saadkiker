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
  shortDescription: string;
  createdOn: string;
  link: string;
  linkLabel: string;
  images: string[];
  stack?: string[];
  mainStack?: string[];
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
    shortDescription: "A SaaS platform for restaurants to manage digital menus, online ordering, and business configuration through a public menu and a secure admin dashboard.",
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
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Neon", "Prisma", "Resend", "Cloudflare R2", "Vercel"],
    mainStack: ["Next.js", "PostgreSQL", "Vercel"],
    modalBg: "#ffffff",
    modalAccent: "#e48a6c",
  },
  {
    id: "rituals",
    name: "MyRituals",
    subtitle: "Minimal Habit & Ritual Tracker",
    cover: "/projects/MyritualsCover.png",
    description: "MyRituals is a minimal web platform designed to help users track habits, goals, and daily routines without the complexity of traditional productivity apps.\n\nI designed and built the system around three simple areas, goals, habits, and a structured daily schedule, focusing on clarity and a distraction free interface that encourages consistency and long term discipline.",
    shortDescription: "A minimal habit and ritual tracker built around three areas — goals, habits, and a daily schedule — with a distraction-free interface built for consistency.",
    createdOn: "Jan 31st, 2026",
    link: "https://myrituals.vercel.app",
    linkLabel: "MyRituals.vercel.app",
    images: [
      "/projects/myrituals1.png",
      "/projects/myrituals2.png",
      "/projects/myrituals3.png",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Vercel"],
    mainStack: ["Next.js", "PostgreSQL", "Vercel"],
    modalBg: "#ffffff",
    modalAccent: "#2e6690",
  },
  {
    id: "hdoc",
    name: "H-DOC",
    subtitle: "Medical Record & Patient Management System",
    cover: "/projects/hdocCover.png",
    description:
      "H-DOC is a full stack medical record and patient management platform designed for clinics and healthcare environments.\n\nThe system allows healthcare staff to manage patient profiles, appointments, prescriptions, and medical forms from a centralized dashboard while keeping records structured and easy to access.\n\nThe platform includes role based access for administrators, doctors, and agents, dynamic medical form management, appointment tracking, and patient monitoring tools. It was built with a Spring Boot backend connected to a PostgreSQL database and a React based frontend focused on clarity and usability.",
    shortDescription: "A full-stack platform for clinics to manage patient records, appointments, and prescriptions, with role-based access for admins, doctors, and agents.",
    createdOn: "Feb 15th, 2026",
    link: "https://github.com/SaadKiker/H-DOC",
    linkLabel: "GitHub Repository",
    images: [
      "/projects/hdoc1.png",
      "/projects/hdoc2.png",
      "/projects/hdoc3.png",
      "/projects/hdoc4.png",
      "/projects/hdoc5.png",
      "/projects/hdoc6.png"
    ],
    stack: [
      "Spring Boot",
      "Java",
      "React",
      "TypeScript",
      "Vite",
      "PostgreSQL",
      "Supabase",
      "Docker"
    ],
    mainStack: ["Spring Boot", "React", "PostgreSQL"],
    modalBg: "#ffffff",
    modalAccent: "#1e513b",
  },
  {
    id: "sacros",
    name: "Sacros",
    subtitle: "Offline Macro Nutrition Tracker",
    cover: "/projects/sacrosCover.png",
    description:
      "Sacros is a minimal desktop application designed to help users track their daily macronutrients in a fast and distraction free way.\n\nThe application focuses only on today's nutrition intake, allowing users to log foods across different meals such as breakfast, lunch, snacks, and dinner while automatically calculating protein, carbohydrates, fats, and total calories for the day.\n\nThe system includes a personal food database with customizable units, automatic macro calculations per meal, and a clean interface optimized for quick daily use. Sacros was built as an offline first application using Tauri and React, allowing the app to run locally without accounts, cloud services, or internet connectivity.",
    shortDescription: "An offline desktop app for tracking daily macros and calories across meals, with a personal food database and no accounts or internet required.",
    createdOn: "Mar 10th, 2026",
    link: "https://sacros-site.vercel.app",
    linkLabel: "sacros-site.vercel.app",
    images: [
      "/projects/sacros1.png",
      "/projects/sacros2.png",
      "/projects/sacros3.png"
    ],
    stack: [
      "Tauri",
      "Rust",
      "React",
      "TypeScript",
      "Tailwind CSS"
    ],
    mainStack: ["Tauri", "Rust", "React"],
    modalBg: "#ffffff",
    modalAccent: "#4f6c9f",
  },
  {
    id: "cookshare",
    name: "CookShare",
    subtitle: "Community Recipe Sharing Platform",
    cover: "/projects/cookshareCover.png",
    description:
      "CookShare is a web platform designed for sharing and discovering recipes within a community of food enthusiasts.\n\nThe platform allows users to create and manage their own recipes, explore meals from other users, and interact through likes, comments, and favorites. Recipes can be organized and filtered by category, making it easy to browse different types of dishes.\n\nThe system includes secure user authentication, recipe management tools, and social engagement features, all built on a Spring Boot backend with server rendered pages using Thymeleaf and a MySQL database.",
    shortDescription: "A community recipe platform where users can publish their own recipes, discover meals from others, and interact through likes, comments, and favorites.",
    createdOn: "Dec 12th, 2025",
    link: "https://github.com/SaadKiker/CookShare",
    linkLabel: "GitHub Repository",
    images: [
      "/projects/cookshare1.png",
      "/projects/cookshare2.png",
      "/projects/cookshare3.png",
      "/projects/cookshare4.png"
    ],
    stack: [
      "Spring Boot",
      "Java",
      "Thymeleaf",
      "MySQL",
      "Spring Security",
      "Spring Data JPA",
      "Hibernate",
      "Lombok"
    ],
    mainStack: ["Spring Boot", "Thymeleaf", "MySQL"],
    modalBg: "#ffffff",
    modalAccent: "#f27971",
  },
  {
    id: "tazkiyati",
    name: "Tazkiyati",
    subtitle: "Islamic Heart Purity Tracker",
    cover: "/projects/TazkiyatiCover.png",
    description:
      "Tazkiyati is a personal spiritual web app built around the Islamic concept of purifying the heart. The name comes from the Arabic word تزكية, meaning self-purification.\n\nThe app centers around a 3D anatomical heart that visually reflects the state of your soul. Logging good deeds brightens it, while bad ones darken it, with each action carrying a weight based on its severity.\n\nI built the experience to feel minimal, calm, and intentional, with soft lighting, Arabic typography, and a single-page interface designed to encourage daily reflection and accountability.",
    shortDescription: "A spiritual tracker built around a 3D heart that visually reflects your soul's state through logged good and bad deeds, inspired by the Islamic concept of تزكية.",
    createdOn: "Mar 19th, 2026",
    link: "https://tazkiyati.vercel.app",
    linkLabel: "tazkiyati.vercel.app",
    images: [
      "/projects/tazkiyati1.png",
      "/projects/tazkiyati2.png",
      "/projects/tazkiyati3.png",
      "/projects/tazkiyati4.png",
      "/projects/tazkiyati5.png",
    ],
    stack: ["Vite", "React", "Three.js", "React Three Fiber", "Tailwind CSS", "Supabase", "Vercel"],
    mainStack: ["React", "Three.js", "Supabase"],
    modalBg: "#ffffff",
    modalAccent: "#000000",
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
      <main className="flex-1 overflow-y-auto px-10 md:px-20 pt-14 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => openProject(project)}
              className="cursor-pointer rounded-2xl overflow-hidden flex flex-col transition-all duration-200"
              style={{
                border: `1.5px solid ${project.modalAccent}`,
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.transform = "translate(4px, -4px)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = `-7px 7px 0 ${project.modalAccent}`;
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.transform = "";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "";
              }}
            >
              {/* Cover image */}
              <div className="relative w-full overflow-hidden" style={{ aspectRatio: "1200/630" }}>
                <Image
                  src={project.cover}
                  alt={project.name}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>

              {/* Card body */}
              <div className="flex flex-col gap-2.5 px-4 py-3.5 flex-1" style={{ backgroundColor: "#fdf3e0" }}>
                {/* Tech pills */}
                {project.mainStack && project.mainStack.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {project.mainStack.map((item) => (
                      <span
                        key={item}
                        className="text-xs px-2 py-0.5 rounded-full font-medium"
                        style={{ backgroundColor: `${project.modalAccent}22`, color: project.modalAccent }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                )}

                {/* Description */}
                <p className="text-sm text-stone-500 leading-relaxed">{project.shortDescription}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
          onClick={closeProject}
        >
          <div
            className="relative w-full max-w-7xl rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-2xl"
            style={{ backgroundColor: selected.modalBg ?? "#ffffff", maxHeight: "clamp(500px, 80vh, 92vh)" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={closeProject}
              className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-stone-100 hover:bg-stone-200 transition-colors text-stone-500 hover:text-stone-800 text-xl leading-none"
            >
              ×
            </button>

            {/* Left — Info (40%) */}
            <div
              className="md:w-2/5 flex flex-col relative overflow-hidden"
              style={{ borderRight: `1px solid ${selected.modalAccent}28` }}
            >
              <div className="flex-1 overflow-y-auto flex flex-col">
                {/* Header */}
                <div className="px-8 pt-8 pb-6">
                  <h2 className="text-4xl font-bold leading-tight" style={{ color: selected.modalAccent }}>
                    {selected.name}
                  </h2>
                </div>

                {/* Body */}
                <div className="flex-1 px-8 py-7 space-y-5">
                  <div className="space-y-3">
                    {selected.description.split("\n\n").map((para, i) => (
                      <p key={i} className="text-stone-500 text-base leading-relaxed">
                        {para}
                      </p>
                    ))}
                  </div>

                  {selected.stack && selected.stack.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {selected.stack.map((item) => (
                        <span
                          key={item}
                          className="text-sm px-2.5 py-1 rounded-full"
                          style={{ backgroundColor: `${selected.modalAccent}15`, color: selected.modalAccent }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Footer — link */}
                {selected.link && (
                  <div className="px-8 py-5" style={{ borderTop: `1px solid ${selected.modalAccent}28` }}>
                    <a
                      href={selected.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium hover:opacity-60 transition-opacity"
                      style={{ color: selected.modalAccent }}
                    >
                      <span className="text-stone-400 text-sm">Visit →</span>
                      <span className="underline underline-offset-2">{selected.linkLabel || selected.link}</span>
                    </a>
                  </div>
                )}
              </div>

              {/* Scroll hint gradient — mobile only */}
              <div
                className="md:hidden pointer-events-none absolute bottom-0 left-0 right-0 h-10"
                style={{ background: `linear-gradient(to bottom, transparent, ${selected.modalBg ?? "#ffffff"})` }}
              />
            </div>

            {/* Right — Images (60%) */}
            <div className="md:w-3/5 flex flex-col bg-stone-50" style={{ minHeight: "clamp(160px, 30vh, 70vh)" }}>
              <div className="flex-1 flex items-center justify-center gap-3 px-4 py-6">
                {selected.images.length > 1 && (
                  <button
                    onClick={prev}
                    className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-lg font-bold transition-all hover:scale-110"
                    style={{ backgroundColor: `${selected.modalAccent}20`, color: selected.modalAccent }}
                  >
                    ‹
                  </button>
                )}

                <div className="flex-1 flex items-center justify-center">
                  {selected.images.length > 0 ? (
                    <img
                      key={imageIndex}
                      src={selected.images[imageIndex]}
                      alt={`${selected.name} screenshot ${imageIndex + 1}`}
                      className="max-w-full max-h-full object-contain rounded-xl cursor-zoom-in"
                      style={{
                        opacity: fading ? 0 : 1,
                        transition: "opacity 0.2s ease",
                        boxShadow: "0 4px 24px rgba(0,0,0,0.1)",
                      }}
                      onClick={() => setLightbox(true)}
                    />
                  ) : (
                    <p className="text-stone-400 text-sm">No images yet</p>
                  )}
                </div>

                {selected.images.length > 1 && (
                  <button
                    onClick={next}
                    className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-lg font-bold transition-all hover:scale-110"
                    style={{ backgroundColor: `${selected.modalAccent}20`, color: selected.modalAccent }}
                  >
                    ›
                  </button>
                )}
              </div>

              {selected.images.length > 1 && (
                <div className="flex justify-center items-center gap-2 pb-5">
                  {selected.images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setImageIndex(i)}
                      className="h-2 rounded-full transition-all duration-300"
                      style={{
                        width: i === imageIndex ? "20px" : "8px",
                        backgroundColor: selected.modalAccent ?? "#b5813c",
                        opacity: i === imageIndex ? 1 : 0.3,
                      }}
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
