import Cta from "@/components/home/cta";
import Hero from "@/components/home/hero";
import About from "@/components/home/about";
import Process from "@/components/home/process";
import GalleryPage from "@/components/ui/gallery";
import Services from "@/components/home/why-choose";
import ClientsMarquee from "@/components/home/client-marquee";

export default function Home() {
  return (
    <main>
      <Hero />
      <ClientsMarquee />
      <Process />
      <GalleryPage />
      <About />
      <Services />
      <Cta />
    </main>
  );
}
