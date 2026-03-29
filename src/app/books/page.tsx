import Image from "next/image";
import Header from "../components/Header";

const currentlyReading = {
  title: "$100M Leads",
  author: "Alex Hormozi",
  cover: "/books/100m-leads.jpg",
};

const booksRead = [
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
