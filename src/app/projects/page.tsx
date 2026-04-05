"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import { projects, type Project } from "./data";

const apps = projects.filter((p) => !p.category || p.category === "app");
const websites = projects.filter((p) => p.category === "website");

function ProjectGrid({ items }: { items: Project[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {items.map((project, index) => (
        <Link
          key={project.id}
          href={`/projects/${project.id}`}
          className="rounded-2xl overflow-hidden flex flex-col"
          style={{
            border: `1.5px solid ${project.modalAccent}`,
            transition: "transform 0.2s, box-shadow 0.2s",
            position: "relative",
            zIndex: 1,
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLAnchorElement).style.transform = "translate(4px, -4px)";
            (e.currentTarget as HTMLAnchorElement).style.boxShadow = `-7px 7px 0 ${project.modalAccent}`;
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLAnchorElement).style.transform = "";
            (e.currentTarget as HTMLAnchorElement).style.boxShadow = "";
          }}
        >
          <div className="relative w-full overflow-hidden" style={{ aspectRatio: "1200/630" }}>
            <Image
              src={project.cover}
              alt={project.name}
              fill
              priority={index < 3}
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-2.5 px-4 py-3.5 flex-1" style={{ backgroundColor: "#ECEAE4" }}>
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
            <p className="text-sm leading-relaxed" style={{ color: "#5A5A56" }}>{project.shortDescription}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default function Projects() {
  return (
    <div className="h-screen flex flex-col overflow-hidden" style={{ backgroundColor: "#F5F5F0" }}>

      <Header />

      <main className="flex-1 overflow-y-auto px-8 md:px-20 pt-12 pb-16">
        <div className="max-w-6xl mx-auto space-y-14">

          {/* Apps section */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl font-bold flex-shrink-0" style={{ color: "#1C1C1A" }}>Apps</h2>
              <div className="h-0.5 flex-1" style={{ backgroundColor: "#C4C4C0" }} />
            </div>
            <ProjectGrid items={apps} />
          </div>

          {/* Websites section */}
          {websites.length > 0 && (
            <div>
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-2xl font-bold flex-shrink-0" style={{ color: "#1C1C1A" }}>Web Sites</h2>
                <div className="h-0.5 flex-1" style={{ backgroundColor: "#C4C4C0" }} />
              </div>
              <ProjectGrid items={websites} />
            </div>
          )}

        </div>
      </main>

    </div>
  );
}
