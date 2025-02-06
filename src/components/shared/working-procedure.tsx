import { JSX } from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { ReactLenis } from "lenis/react";

export default function WorkingProcedure(): JSX.Element {
  return (
    <ReactLenis root>
      <section className="max-w-6xl mx-auto px-6 md:px-4">
        <h1 className="max-w-2xl mx-auto text-center py-24 font-medium text-4xl md:text-5xl lg:text-6xl">
          <span className="font-title">Our working process</span> <br />
          <span className="font-uncut tracking-tighter">and insights.</span>
        </h1>

        <div className="grid md:grid-cols-2 items-start gap-10 md:gap-12 mb-20">
          <div className="lg:sticky top-5 min-h-screen flex flex-col justify-center gap-4 pr-12">
            <div className="space-y-4">
              <h2 className="font-medium font-uncut tracking-tight text-3xl">
                Coderbrix is ready to help you achieve your business goals.
              </h2>
              <p className="text-lg">
                Our solutions have helped thousands of businesses to reach new
                heights of success while creating our digital footprint in the
                global economy.
              </p>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Check className="text-primary h-5 w-5" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium font-uncut tracking-tighter text-xl">
                    Transforming Tech Visions of Entrepreneurs into Reality
                  </h3>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Check className="text-primary h-5 w-5" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium font-uncut tracking-tighter text-xl">
                    Delivering Long-Term Value & Customer Success
                  </h3>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Check className="text-primary h-5 w-5" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium font-uncut tracking-tighter text-xl">
                    Leveraging Innovation for Competitive Advantage
                  </h3>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Check className="text-primary h-5 w-5" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium font-uncut tracking-tighter text-xl">
                    Fostering Collaborative & Transparent Partnerships
                  </h3>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Check className="text-primary h-5 w-5" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium font-uncut tracking-tighter text-xl">
                    Building Scalable Solutions for Global Reach
                  </h3>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Check className="text-primary h-5 w-5" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium font-uncut tracking-tighter text-xl">
                    Cost-Effective Solutions with High ROI
                  </h3>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Check className="text-primary h-5 w-5" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium font-uncut tracking-tighter text-xl">
                    Agile Development for Faster Delivery
                  </h3>
                </div>
              </li>
            </ul>
          </div>

          <div className="grid gap-2">
            <div className="relative rounded-xl overflow-hidden">
              <Image
                className="absolute top-0 left-0 w-full h-full"
                src="/images/bg/green-strip-bg.png"
                alt="bg"
                width={1000}
                height={1000}
              />
              <div className="relative h-full w-full flex flex-col items-start justify-center gap-10 px-10 py-10 md:py-12 lg:py-14 bg-primary/30">
                <h1 className="font-medium text-2xl md:text-3xl lg:text-5xl text-white text-tracking-tighter">
                  Pre-Development (Planning & Design)
                </h1>

                <ul className="flex flex-col gap-1 text-sm md:text-base lg:text-lg text-white list-decimal list-inside">
                  <li>Requirement gathering & analysis.</li>
                  <li>Market research & competitor study.</li>
                  <li>UI/UX design & prototyping.</li>
                  <li>Client feedback & approval.</li>
                </ul>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden">
              <Image
                className="absolute top-0 left-0 w-full h-full scale-125"
                src="/images/bg/blue-strip-bg.png"
                alt="bg"
                width={1000}
                height={1000}
              />
              <div className="relative h-full w-full flex flex-col items-start justify-center gap-10 px-10 py-10 md:py-12 lg:py-14">
                <h1 className="font-medium text-2xl md:text-3xl lg:text-5xl text-white text-tracking-tighter">
                  Development & Implementation
                </h1>
                <ul className="flex flex-col gap-1 text-sm md:text-base lg:text-lg text-white list-decimal list-inside">
                  <li>Backend & frontend development.</li>
                  <li>API integration & database setup.</li>
                  <li>Security & performance optimization.</li>
                  <li>Iterative development & testing.</li>
                </ul>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden">
              <Image
                className="absolute top-0 left-0 w-full h-full"
                src="/images/bg/purple-strip-bg.png"
                alt="bg"
                width={1000}
                height={1000}
              />
              <div className="relative h-full w-full flex flex-col items-start justify-center gap-10 px-10 py-10 md:py-12 lg:py-14 bg-purple-800/30">
                <h1 className="font-medium text-2xl md:text-3xl lg:text-5xl text-white text-tracking-tighter">
                  Deployment & Maintenance
                </h1>
                <ul className="flex flex-col gap-1 text-sm md:text-base lg:text-lg text-white list-decimal list-inside">
                  <li>Deployment to production.</li>
                  <li>Final testing & quality assurance.</li>
                  <li>Ongoing support & updates.</li>
                  <li>Performance monitoring & scalability improvements.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ReactLenis>
  );
}
