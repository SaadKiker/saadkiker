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
      <nav className="flex gap-6 md:gap-12 text-base md:text-xl font-medium" style={{ color: "#b5813c" }}>
        {tabs.map((tab) => {
          const isActive = pathname === tab.href;
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className="relative hover:opacity-70 transition-opacity pb-1"
            >
              {tab.label}
              <span
                className="absolute bottom-0 left-0 h-0.5 transition-all duration-300"
                style={{
                  backgroundColor: "#b5813c",
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
