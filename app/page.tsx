import Hero from "./components/Hero";
import About from "./components/About";
import Eras from "./components/Eras";

export default async function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main id="main-container" className="flex flex-col size-full items-start">
        <Hero />
        <About />
        <Eras />
      </main>
    </div >
  );
}
