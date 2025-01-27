import Hero from "@/components/home/hero";
import ClientsMarquee from "@/components/home/client-marquee";
import Cta from "@/components/home/cta";
import About from "@/components/home/about";
import Services from "@/components/home/services";

export default function Home() {
  return (
    <main>
      <Hero />
      <ClientsMarquee />
      <About />
      <Services />
      <Cta />
    </main>
  );
}
