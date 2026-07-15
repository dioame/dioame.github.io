import GsapInit from "@/components/animations/GsapInit";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import About from "@/components/sections/About";
import Capabilities from "@/components/sections/Capabilities";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import JavBis from "@/components/sections/JavBis";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import Stack from "@/components/sections/Stack";
import Trust from "@/components/sections/Trust";

export default function HomePage() {
  return (
    <>
      <div className="scroll-progress" aria-hidden />
      <Navbar />
      <main id="main" className="flex-1">
        <Hero />
        <Trust />
        <Services />
        <About />
        <Projects />
        <JavBis />
        <Stack />
        <Capabilities />
        <Contact />
      </main>
      <Footer />
      <GsapInit />
    </>
  );
}
