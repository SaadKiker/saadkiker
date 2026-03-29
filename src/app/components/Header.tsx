"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { label: "Hi", href: "/" },
  { label: "PROJECTS", href: "/projects" },
  { label: "BOOKS", href: "/books" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="flex justify-center items-center px-6 py-2 md:px-12 md:py-7 flex-shrink-0">
      <nav className="flex gap-6 md:gap-12 text-base md:text-xl font-medium" style={{ color: "#5A5A56" }}>
        {tabs.map((tab) => {
          const isActive = tab.href === "/" ? pathname === "/" : pathname.startsWith(tab.href);
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className="relative hover:opacity-60 transition-opacity pb-1"
              style={{ color: isActive ? "#1C1C1A" : "#5A5A56" }}
            >
              {tab.label}
              <span
                className="absolute bottom-0 left-0 h-0.5 transition-all duration-300"
                style={{
                  backgroundColor: "#1C1C1A",
                  width: isActive ? "100%" : "0%",
                }}
              />
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
