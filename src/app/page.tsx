// Temporary under-construction page: renders nothing but the background.
// The NeedleField effect is mounted in layout.tsx.
// To restore the site, render <HomeContent /> from ./home-content.tsx here
// and drop the redirects in next.config.ts.

export default function Home() {
  return <div className="h-[100dvh] w-full" style={{ backgroundColor: "#F5F5F0" }} />;
}
