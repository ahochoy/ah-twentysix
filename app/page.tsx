import Hero from "./components/Hero";
import About from "./components/About";
import Eras from "./components/Eras";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default async function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main id="main-container" className="flex flex-col size-full items-start">
        <Hero />
        <About />
        <Eras />
        <Projects />
        <Contact />
      </main>
    </div >
  );
}
