import Cta from "@/components/home/cta";
import Hero from "@/components/home/hero";
import Services from "@/components/home/services";
import WhyChooseSection from "@/components/home/why-choose";
import ClientsMarquee from "@/components/home/client-marquee";
import WorkingProcedure from "@/components/home/working-procedure";
import WorkingPriciples from "@/components/home/working-priciples";

export default function Home() {
  return (
    <main>
      <Hero />
      <ClientsMarquee />
      <Services />
      <WhyChooseSection />
      <WorkingPriciples />
      <Cta />
      <WorkingProcedure />
    </main>
  );
}
