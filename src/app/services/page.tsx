import React from "react";
import Services from "@/components/home/services";
import WorkingPriciples from "@/components/home/working-priciples";

function ServicePage() {
  return (
    <main>
      <Services className="py-16 md:py-20 lg:py-24" />
      <WorkingPriciples />
    </main>
  );
}

export default ServicePage;
