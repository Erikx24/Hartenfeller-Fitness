import Hero from "@/components/Hero";
import "@/css/text.css"
import "@/css/items.css"
import Pitch from "@/components/Pitch";
import Navbar from "@/components/navbar";
import About from "@/components/About";
import Vorteile from "@/components/Vorteile";
import Bewertungen from "@/components/Bewertungen";
import Termin from "@/components/Termin";
import Kontakt from "@/components/Kontakt";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-white min-h-screen flex flex-col items-center justify-start">
      <Navbar />
      <Hero />
      <Pitch />
      <Bewertungen />
      <div className="px-5 md:px-24 w-full max-w-7xl mx-auto">
      <About />
      <Vorteile />
      </div>
      <Termin />
      <div className="px-5 md:px-24 w-full max-w-7xl mx-auto">
        <Kontakt />
      </div>
      <Footer />
    </main>
  );
}
