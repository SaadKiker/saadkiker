export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-4 text-center">
      <h1 className="text-4xl font-bold text-gray-900">Hello, I’m Saad 👋</h1>
      <p className="mt-4 text-lg text-gray-700 max-w-xl">
        Welcome to my official website. I’m a Software Engineer passionate about building useful, scalable, and clean solutions. This site is under development — more is coming soon.
      </p>
      <a
        href="mailto:saadkiker.k@gmail.com"
        className="mt-6 inline-block text-blue-600 hover:underline"
      >
        📬 Contact Me
      </a>
    </main>
  );
}