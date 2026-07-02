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
          <div className="book-wrap flex-shrink-0">
            <div
              className="book"
              style={{ width: "clamp(200px, 32vw, 380px)", aspectRatio: "2/3" }}
            >
              <div className="book-cover" style={{ width: "100%", height: "100%" }}>
                <Image
                  src={currentlyReading.cover}
                  alt={currentlyReading.title}
                  fill
                  priority
                  sizes="(max-width: 768px) 200px, 32vw"
                  className="object-cover"
                />
              </div>
              {currentlyReading.notesUrl && (
                <a
                  href={currentlyReading.notesUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="notes-cloud"
                >
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20h9"/>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
                  </svg>
                  my notes
                  <span className="cloud-dot" />
                  <span className="cloud-dot" />
                </a>
              )}
            </div>
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
          <p className="text-2xl md:text-3xl font-bold text-center mb-8 flex-shrink-0" style={{ color: "#1C1C1A" }}>
            Read
          </p>
          <div className="md:overflow-y-auto md:flex-1 pt-4 px-3 pb-6">
            <div className="grid grid-cols-2 gap-x-6 gap-y-10">
              {booksRead.map((book) => (
                <div key={book.cover} className="flex flex-col items-center gap-2 text-center">
                  <div className="book-wrap flex-shrink-0">
                    <div
                      className="book"
                      style={{ width: "clamp(140px, 20vw, 240px)", aspectRatio: "2/3" }}
                    >
                      <div className="book-cover" style={{ width: "100%", height: "100%" }}>
                        <Image
                          src={book.cover}
                          alt={book.title}
                          fill
                          sizes="(max-width: 768px) 140px, 20vw"
                          className="object-cover"
                        />
                      </div>
                      {book.notesUrl && (
                        <a
                          href={book.notesUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="notes-cloud"
                        >
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 20h9"/>
                            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
                          </svg>
                          my notes
                          <span className="cloud-dot" />
                          <span className="cloud-dot" />
                        </a>
                      )}
                    </div>
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
