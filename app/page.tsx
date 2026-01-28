import Hero from "./components/Hero";

export default async function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main id="main-container" className="flex min-h-screen w-full flex-col items-start border-x border-solid border-(--border-color)">
        <Hero />  
      </main>
    </div >
  );
}
