import Image from "next/image";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="h-screen flex flex-col overflow-hidden" style={{ backgroundColor: "#f9e5bc" }}>

      <Header />

      {/* Main */}
      <main className="flex-1 flex flex-col md:flex-row items-center justify-center px-6 md:px-8 gap-6 md:gap-12 overflow-hidden">

        {/* Photo */}
        <div
          className="relative flex-shrink-0 rounded-2xl overflow-hidden"
          style={{
            width: "clamp(140px, 40vw, 46vh)",
            height: "clamp(140px, 40vw, 46vh)",
            border: "3px solid #b5813c",
          }}
        >
          <Image
            src="/me.PNG"
            alt="Saad"
            fill
            className="object-cover"
          />
        </div>

        {/* Text */}
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-4xl md:text-7xl font-bold text-stone-800 mb-2 md:mb-3 leading-tight">
            Hey, I&apos;m Saad.
          </h1>
          <p className="text-stone-500 text-base md:text-2xl leading-relaxed mb-2 md:mb-4">
            I&apos;m a full-stack engineer from Morocco, specializing in React, Next.js, and TypeScript.
          </p>
          <p className="text-stone-500 text-base md:text-2xl leading-relaxed mb-5 md:mb-8">
            Glad you&apos;re here! Have a look around.
          </p>

          <p className="text-xs md:text-sm font-semibold uppercase tracking-widest mb-2 md:mb-3" style={{ color: "#b5813c" }}>
            Currently
          </p>
          <div className="space-y-1 md:space-y-2 text-sm md:text-base inline-block text-left" style={{ borderLeft: "2px solid #b5813c", paddingLeft: "1rem" }}>
            <p>
              <span className="font-semibold text-stone-700">building</span>
              <span className="text-stone-300 mx-2">—</span>
              <a href="https://scanini.ma" target="_blank" rel="noopener noreferrer" className="text-stone-500 underline underline-offset-2 hover:text-stone-700 transition-colors">scanini.ma</a>
            </p>
            <p>
              <span className="font-semibold text-stone-700">reading</span>
              <span className="text-stone-300 mx-2">—</span>
              <span className="text-stone-500">$100M Leads — Alex Hormozi</span>
            </p>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="flex justify-center items-center gap-6 md:gap-8 py-4 md:py-5">
        {/* GitHub */}
        <a href="https://github.com/SaadKiker" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity" style={{ color: "#b5813c" }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.165c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3-.404c1.02.005 2.047.138 3 .404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.652.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.807 5.625-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
          </svg>
        </a>

        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/saadkiker" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity" style={{ color: "#b5813c" }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452H17.21v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.987V9h3.102v1.561h.046c.431-.815 1.484-1.674 3.053-1.674 3.267 0 3.868 2.149 3.868 4.945v6.62zM5.337 7.433a1.8 1.8 0 1 1 0-3.601 1.8 1.8 0 0 1 0 3.601zM6.969 20.452H3.7V9h3.268v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>

        {/* Email */}
        <a href="mailto:saadkiker.k@gmail.com" className="hover:opacity-60 transition-opacity" style={{ color: "#b5813c" }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.305.083-.587.224-.827L12 13.09 23.776 4.63c.141.24.224.522.224.827z"/>
            <path d="M12 10.909L.545 3.273A1.636 1.636 0 0 1 1.636 3h20.728c.48 0 .91.207 1.21.534L12 10.91z"/>
          </svg>
        </a>

        {/* WhatsApp */}
        <a href="https://wa.me/212623122381" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity" style={{ color: "#b5813c" }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
          </svg>
        </a>
      </footer>

    </div>
  );
}
