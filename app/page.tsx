import About from "./components/About";
import Hero from "./components/Hero";

export default async function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main id="main-container" className="flex flex-col size-full items-start">
        <Hero />
        <About />
      </main>
    </div >
  );
}
