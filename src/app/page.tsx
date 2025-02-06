import Cta from "@/components/shared/cta";
import Hero from "@/components/home/hero";
import Services from "@/components/home/services";
import WhyChooseSection from "@/components/home/why-choose";
import ClientsMarquee from "@/components/shared/client-marquee";
import WorkingProcedure from "@/components/shared/working-procedure";
import WorkingPriciples from "@/components/home/working-priciples";
import NewsLetter from "@/components/shared/news-letter";
import Technologies from "@/components/shared/technologies";

export default function Home() {
  return (
    <main>
      <Hero />
      <ClientsMarquee />
      <Services />
      <WhyChooseSection />
      <WorkingPriciples />
      <Technologies />
      <Cta />
      <WorkingProcedure />
      <NewsLetter />
    </main>
  );
}
