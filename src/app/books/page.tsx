import Image from "next/image";

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
    <div className="h-screen flex flex-col overflow-hidden" style={{ backgroundColor: "#f9e5bc" }}>

      {/* Header */}
      <header className="flex justify-center items-center px-6 py-4 md:px-12 md:py-7 flex-shrink-0">
        <nav className="flex gap-6 md:gap-12 text-base md:text-xl font-medium" style={{ color: "#b5813c" }}>
          <a href="/" className="hover:opacity-70 transition-opacity">Hi</a>
          <a href="/projects" className="hover:opacity-70 transition-opacity">PROJECTS</a>
          <a href="/books" className="hover:opacity-70 transition-opacity">BOOKS</a>
          <a href="/now" className="hover:opacity-70 transition-opacity">NOW</a>
        </nav>
      </header>

      {/* Main */}
      <main className="flex-1 flex flex-col md:flex-row overflow-hidden">

        {/* Left — Currently Reading */}
        <div className="flex-1 flex flex-col items-center justify-center gap-5 px-8 py-6 md:py-0">
          <p className="text-2xl md:text-3xl font-bold text-center mb-4" style={{ color: "#6b4c1f" }}>
            Currently Reading
          </p>
          <div
            className="relative rounded-xl overflow-hidden shadow-md flex-shrink-0"
            style={{
              width: "clamp(200px, 32vw, 380px)",
              aspectRatio: "2/3",
              border: "2px solid #b5813c",
            }}
          >
            <Image
              src={currentlyReading.cover}
              alt={currentlyReading.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="text-center">
            <p className="font-semibold text-stone-800 text-base md:text-lg leading-snug">
              {currentlyReading.title}
            </p>
            <p className="text-stone-500 text-sm md:text-base mt-0.5">
              {currentlyReading.author}
            </p>
          </div>
        </div>


        {/* Right — Books Read */}
        <div className="flex-1 flex flex-col overflow-hidden px-8 py-6 md:py-8">
          <p className="text-2xl md:text-3xl font-bold text-center mb-12 flex-shrink-0" style={{ color: "#6b4c1f" }}>
            Read
          </p>
          <div className="overflow-y-auto flex-1 pr-1">
            <div className="grid grid-cols-2 gap-6">
              {booksRead.map((book) => (
                <div key={book.cover} className="flex flex-col items-center gap-2 text-center">
                  <div
                    className="relative rounded-lg overflow-hidden shadow-sm flex-shrink-0"
                    style={{
                      width: "clamp(140px, 20vw, 240px)",
                      aspectRatio: "2/3",
                      border: "2px solid #b5813c",
                    }}
                  >
                    <Image
                      src={book.cover}
                      alt={book.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-stone-800 text-sm leading-snug">
                      {book.title}
                    </p>
                    <p className="text-stone-500 text-xs mt-0.5">
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
