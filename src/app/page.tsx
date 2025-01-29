import Cta from "@/components/home/cta";
import Hero from "@/components/home/hero";
import About from "@/components/home/about";
import Process from "@/components/home/working-procedure";
import GalleryPage from "@/components/ui/gallery";
import WorkingProcedure from "@/components/home/why-choose";
import ClientsMarquee from "@/components/home/client-marquee";
import Services from "@/components/home/services";

export default function Home() {
  return (
    <main>
      <Hero />
      <ClientsMarquee />
      <Services />
      <Process />
      <GalleryPage />
      <About />
      <WorkingProcedure />
      <Cta />
    </main>
  );
}
