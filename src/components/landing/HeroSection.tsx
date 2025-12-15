import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, BarChart3, Zap, Globe } from "lucide-react";

const featureCards = [
  {
    tag: "MRV",
    title: "Automated MRV Protocols",
    description: ["Measurment, Reporting, Verfication"],
    icon: Leaf,
  },
  {
    tag: "IAT",
    title: "Industrial Assessment Tokenization",
    description: ["Measurment, Reporting, Verfication"],
    icon: BarChart3,
  },
  {
    tag: "CFT",
    title: "Carbon Footprint Tracking",
    description: ["Measurment, Reporting, Verfication"],
    icon: Globe,
  },
  {
    tag: "SEM",
    title: "Sustainable Energy Management",
    description: ["Measurment, Reporting, Verfication"],
    icon: Zap,
  },
];

const HeroSection = () => {
  return (
    <section className="relative h-[100vh] py-16 lg:py-24 bg-cover bg-center bg-no-repeat flex items-end z-0 -mt-[100px]" style={{ backgroundImage: 'url(/webp/bg-hero.webp)', paddingBottom: '48px' }}>
      <div className="absolute bottom-0 left-0 right-0 w-full h-[200px] pointer-events-none" style={{ background: 'linear-gradient(to top, hsl(150, 40%, 22%), transparent)' }}></div>
      <div className="container mx-auto px-4 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-end">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="flex flex-col gap-4 w-full" style={{ color: 'rgba(23, 54, 38, 0)' }}>
              <h1 className="text-[40px] font-serif font-semibold text-[#DFF390] leading-tight">
                The Green Layer for<br />
                Sustainable Manufacturing
              </h1>

              <p className="text-verdana-cream/70 text-base max-w-xl" style={{ fontSize: '16px', color: 'white' }}>
                On-Chain Verification and Asset Trading at Manufacturing Scale.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-verdana-cream text-verdana-dark hover:bg-verdana-yellow text-base px-6 py-6 rounded-[48px]">
                Start Building
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="border-verdana-cream/30 text-white bg-transparent hover:bg-transparent hover:text-white text-base px-6 py-6 h-[24px] rounded-[48px]"
              >
                Open Dashboard
              </Button>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {featureCards.map((card, index) => (
              <div
                key={index}
                className="bg-verdana-medium/20 border border-verdana-medium/30 rounded-xl hover:bg-verdana-medium/30 transition-colors group"
                style={{ 
                  padding: '16px',
                  background: 'unset',
                  backgroundColor: 'rgba(255, 255, 255, 0.3)',
                  borderColor: 'rgba(255, 255, 255, 0.3)',
                  color: 'rgba(23, 54, 38, 1)',
                  backdropFilter: 'blur(5px)',
                  WebkitBackdropFilter: 'blur(5px)'
                }}
              >
                <h3 className="text-verdana-cream font-medium mb-2" style={{ color: 'rgba(223, 243, 144, 1)', fontSize: '24px', fontWeight: '800' }}>{card.title}</h3>
                <div className="space-y-1">
                  {card.description.map((paragraph, idx) => (
                    <p key={idx} className="text-verdana-cream/60 text-sm leading-relaxed" style={{ color: 'rgba(255, 255, 255, 1)', lineHeight: '32px' }}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
