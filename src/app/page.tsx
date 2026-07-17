import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { ProofBand } from "@/components/ProofBand";
import { Work } from "@/components/Work";
import { Testimonials } from "@/components/Testimonials";
import { Approach } from "@/components/Approach";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <ProofBand />
        <Work />
        <Testimonials />
        <Approach />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
