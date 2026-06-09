import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import RevealLines from "./RevealLines";
import ScrollReveal from "./ScrollReveal";

const tabs = ["Carbon Credits", "Green Bonds", "Energy Certificates"];

const productFeatures = [
  "Automated compliance verification",
  "Real-time market pricing",
  "Fractional ownership enabled",
  "Cross-border settlement",
  "Audit trail transparency",
  "Smart contract automation",
];

const CoreProductSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="marketplace" className="bg-black py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <ScrollReveal className="flex items-center gap-2 text-sm text-[var(--nav-accent)] font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--nav-accent)]" />
              Core Product
            </ScrollReveal>
            <RevealLines
              as="h2"
              lines={["Marketplace Aset", "Berkelanjutan."]}
              className="text-3xl lg:text-5xl font-semibold text-white leading-[1.1] tracking-tight mb-6"
            />
            <ScrollReveal
              as="p"
              className="text-neutral-400 text-base lg:text-lg leading-relaxed mb-8 max-w-md"
              delay={0.2}
            >
              Platform perdagangan aset lingkungan terverifikasi dengan keamanan dan transparansi
              standar institusional.
            </ScrollReveal>

            <ScrollReveal as="ul" className="space-y-4 mb-10" stagger={0.08} delay={0.3}>
              {productFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[var(--nav-accent)] flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-[var(--nav-accent-contrast)]" strokeWidth={3} />
                  </div>
                  <span className="text-neutral-300 text-sm">{feature}</span>
                </li>
              ))}
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
            <Button className="rounded-full bg-[var(--nav-accent)] text-[var(--nav-accent-contrast)] hover:bg-[var(--nav-accent-strong)] h-12 px-7 text-sm font-bold gap-2">
              Jelajahi Marketplace
              <ArrowRight className="w-4 h-4" />
            </Button>
            </ScrollReveal>
          </div>

          <ScrollReveal className="bg-neutral-950 border border-neutral-800 rounded-3xl p-6 lg:p-8" y={56}>
            <div className="flex flex-wrap gap-2 mb-8">
              {tabs.map((tab, index) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(index)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeTab === index
                      ? "bg-[var(--nav-accent)] text-[var(--nav-accent-contrast)]"
                      : "bg-neutral-900 text-neutral-400 hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="bg-neutral-900 rounded-2xl p-6 mb-6 border border-neutral-800">
              <div className="flex items-center justify-between mb-4">
                <span className="text-neutral-400 text-sm">Available Balance</span>
                <span className="text-[var(--nav-accent)] text-sm font-medium">Verified ✓</span>
              </div>
              <div className="text-4xl font-semibold text-white mb-1">
                24,580 <span className="text-lg text-neutral-400 font-normal">tCO₂e</span>
              </div>
              <div className="text-neutral-400 text-sm">≈ $1,245,000 USD</div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-6">
              <button
                type="button"
                className="bg-[var(--nav-accent)] text-[var(--nav-accent-contrast)] font-medium py-3 rounded-full text-sm hover:bg-[var(--nav-accent-strong)] transition-colors"
              >
                Buy Credits
              </button>
              <button
                type="button"
                className="bg-neutral-900 text-white font-medium py-3 rounded-full text-sm border border-neutral-700 hover:bg-neutral-800 transition-colors"
              >
                Sell Credits
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-neutral-800">
              <div>
                <div className="text-white font-semibold text-sm">$50.65</div>
                <div className="text-neutral-400 text-xs mt-1">Price/tCO₂e</div>
              </div>
              <div>
                <div className="text-[var(--nav-accent)] font-semibold text-sm">+2.4%</div>
                <div className="text-neutral-400 text-xs mt-1">24h Change</div>
              </div>
              <div>
                <div className="text-white font-semibold text-sm">$2.1B</div>
                <div className="text-neutral-400 text-xs mt-1">Market Cap</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default CoreProductSection;
