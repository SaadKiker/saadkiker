import Image from "next/image";
import Header from "../components/Header";

const currentlyReading = {
  title: "$100M Leads",
  author: "Alex Hormozi",
  cover: "/books/100m-leads.jpg",
  notesUrl: "https://docs.google.com/document/d/1ko97JUjJbOciu2zHJ6pNHz-qD5siOvzhrBgSs0GA5QA/edit?usp=sharing",
};

const booksRead: { title: string; author: string; cover: string; notesUrl?: string }[] = [
  {
    title: "Cold Email Manifesto",
    author: "Alex Berman & Robert Indries",
    cover: "/books/cold-email-manifesto.jpg",
  },
];

export default function Books() {
  return (
    <div className="h-[100dvh] flex flex-col md:overflow-hidden" style={{ backgroundColor: "#F5F5F0" }}>

      <Header />

      {/* Main */}
      <main className="flex-1 flex flex-col md:flex-row overflow-y-auto md:overflow-hidden">

        {/* Left — Currently Reading */}
        <div className="flex-none md:flex-1 flex flex-col items-center justify-center gap-5 px-8 py-6 md:py-0">
          <p className="text-2xl md:text-3xl font-bold text-center mb-4" style={{ color: "#1C1C1A" }}>
            Currently Reading
          </p>
          <div
            className="relative rounded-xl overflow-hidden shadow-sm flex-shrink-0"
            style={{
              width: "clamp(200px, 32vw, 380px)",
              aspectRatio: "2/3",
              border: "1.5px solid #DEDEDB",
            }}
          >
            <Image
              src={currentlyReading.cover}
              alt={currentlyReading.title}
              fill
              priority
              sizes="(max-width: 768px) 200px, 32vw"
              className="object-cover"
            />
            {currentlyReading.notesUrl && (
              <a
                href={currentlyReading.notesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-2 left-2 flex items-center justify-center w-7 h-7 rounded-md transition-opacity hover:opacity-80"
                style={{ backgroundColor: "rgba(255,255,255,0.85)", backdropFilter: "blur(4px)" }}
                title="My notes"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1C1C1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10 9 9 9 8 9"/>
                </svg>
              </a>
            )}
          </div>
          <div className="text-center">
            <p className="font-semibold text-base md:text-lg leading-snug" style={{ color: "#1C1C1A" }}>
              {currentlyReading.title}
            </p>
            <p className="text-sm md:text-base mt-0.5" style={{ color: "#9A9A96" }}>
              {currentlyReading.author}
            </p>
          </div>
        </div>

        {/* Right — Books Read */}
        <div className="flex-none md:flex-1 flex flex-col md:overflow-hidden px-8 py-6 md:py-8">
          <p className="text-2xl md:text-3xl font-bold text-center mb-12 flex-shrink-0" style={{ color: "#1C1C1A" }}>
            Read
          </p>
          <div className="md:overflow-y-auto md:flex-1 pr-1">
            <div className="grid grid-cols-2 gap-6">
              {booksRead.map((book) => (
                <div key={book.cover} className="flex flex-col items-center gap-2 text-center">
                  <div
                    className="relative rounded-lg overflow-hidden shadow-sm flex-shrink-0"
                    style={{
                      width: "clamp(140px, 20vw, 240px)",
                      aspectRatio: "2/3",
                      border: "1.5px solid #DEDEDB",
                    }}
                  >
                    <Image
                      src={book.cover}
                      alt={book.title}
                      fill
                      sizes="(max-width: 768px) 140px, 20vw"
                      className="object-cover"
                    />
                    {book.notesUrl && (
                      <a
                        href={book.notesUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-2 left-2 flex items-center justify-center w-6 h-6 rounded-md transition-opacity hover:opacity-80"
                        style={{ backgroundColor: "rgba(255,255,255,0.85)", backdropFilter: "blur(4px)" }}
                        title="My notes"
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1C1C1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                          <polyline points="14 2 14 8 20 8"/>
                          <line x1="16" y1="13" x2="8" y2="13"/>
                          <line x1="16" y1="17" x2="8" y2="17"/>
                          <polyline points="10 9 9 9 8 9"/>
                        </svg>
                      </a>
                    )}
                  </div>
                  <div>
                    <p className="font-semibold text-sm leading-snug" style={{ color: "#1C1C1A" }}>
                      {book.title}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: "#9A9A96" }}>
                      {book.author}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </main>

    </div>
  );
}
