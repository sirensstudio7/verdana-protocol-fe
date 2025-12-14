import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, BarChart3, Zap, Globe } from "lucide-react";

const featureCards = [
  {
    tag: "MRV",
    title: "Automated MRV Protocols",
    description: "Real-time measurement, reporting, and verification of environmental impact data.",
    icon: Leaf,
  },
  {
    tag: "IAT",
    title: "Industrial Assessment Tokenization",
    description: "Transform industrial sustainability assessments into verifiable digital assets.",
    icon: BarChart3,
  },
  {
    tag: "CFT",
    title: "Carbon Footprint Tracking",
    description: "End-to-end carbon monitoring across your entire manufacturing supply chain.",
    icon: Globe,
  },
  {
    tag: "SEM",
    title: "Sustainable Energy Management",
    description: "Optimize energy consumption with AI-powered sustainability insights.",
    icon: Zap,
  },
];

const HeroSection = () => {
  return (
    <section className="bg-verdana-dark py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8">
            <div className="inline-flex items-center gap-2 bg-verdana-medium/30 px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-verdana-yellow rounded-full" />
              <span className="text-verdana-cream/80 text-sm">
                Blockchain-Powered Sustainability
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-serif font-semibold text-verdana-cream leading-tight">
              The Green Layer for Sustainable Manufacturing
            </h1>

            <p className="text-verdana-cream/70 text-lg lg:text-xl max-w-xl">
              Transform your manufacturing operations with blockchain-verified environmental compliance and real-time sustainability tracking.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-verdana-cream text-verdana-dark hover:bg-verdana-yellow text-base px-6 py-6">
                Start Building
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="border-verdana-cream/30 text-verdana-cream hover:bg-verdana-medium/30 hover:text-verdana-cream text-base px-6 py-6"
              >
                View Documentation
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-verdana-medium/30">
              <div>
                <div className="text-2xl lg:text-3xl font-semibold text-verdana-cream">$2.4B+</div>
                <div className="text-verdana-cream/60 text-sm">Carbon Credits Verified</div>
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-semibold text-verdana-cream">340+</div>
                <div className="text-verdana-cream/60 text-sm">Global Partners</div>
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-semibold text-verdana-cream">99.9%</div>
                <div className="text-verdana-cream/60 text-sm">Uptime SLA</div>
              </div>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {featureCards.map((card, index) => (
              <div
                key={index}
                className="bg-verdana-medium/20 border border-verdana-medium/30 rounded-xl p-5 hover:bg-verdana-medium/30 transition-colors group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-verdana-cream/10 rounded-lg flex items-center justify-center group-hover:bg-verdana-cream/20 transition-colors">
                    <card.icon className="w-5 h-5 text-verdana-cream" />
                  </div>
                  <span className="text-xs font-medium text-verdana-yellow bg-verdana-yellow/10 px-2 py-1 rounded">
                    {card.tag}
                  </span>
                </div>
                <h3 className="text-verdana-cream font-medium mb-2">{card.title}</h3>
                <p className="text-verdana-cream/60 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
