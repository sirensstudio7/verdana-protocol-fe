import { useState } from "react";
import { Check } from "lucide-react";

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
    <section className="bg-verdana-dark py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-verdana-yellow text-sm font-medium uppercase tracking-wider">
              Core Product
            </span>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-serif font-semibold text-verdana-cream mt-4 mb-6">
              Buying and Selling Sustainable Assets
            </h2>
            <p className="text-verdana-cream/70 text-lg mb-8">
              Our marketplace enables seamless trading of verified environmental 
              assets with institutional-grade security and transparency.
            </p>

            {/* Feature List */}
            <ul className="space-y-4">
              {productFeatures.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-verdana-yellow/20 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-verdana-yellow" />
                  </div>
                  <span className="text-verdana-cream/80">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Content - Product Card */}
          <div className="bg-verdana-green border border-verdana-medium/40 rounded-2xl p-6 lg:p-8">
            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === index
                      ? "bg-verdana-yellow text-verdana-dark"
                      : "bg-verdana-medium/30 text-verdana-cream hover:bg-verdana-medium/50"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Product Display */}
            <div className="bg-verdana-dark/50 rounded-xl p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-verdana-cream/60 text-sm">Available Balance</span>
                <span className="text-verdana-yellow text-sm font-medium">Verified ✓</span>
              </div>
              <div className="text-4xl font-semibold text-verdana-cream mb-2">
                24,580 <span className="text-lg text-verdana-cream/60">tCO₂e</span>
              </div>
              <div className="text-verdana-cream/60 text-sm">
                ≈ $1,245,000 USD
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <button className="bg-verdana-cream text-verdana-dark font-medium py-3 rounded-lg hover:bg-verdana-yellow transition-colors">
                Buy Credits
              </button>
              <button className="bg-verdana-medium/30 text-verdana-cream font-medium py-3 rounded-lg hover:bg-verdana-medium/50 transition-colors border border-verdana-medium/50">
                Sell Credits
              </button>
            </div>

            {/* Market Info */}
            <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-verdana-medium/30">
              <div>
                <div className="text-verdana-cream font-medium">$50.65</div>
                <div className="text-verdana-cream/50 text-xs">Price/tCO₂e</div>
              </div>
              <div>
                <div className="text-verdana-yellow font-medium">+2.4%</div>
                <div className="text-verdana-cream/50 text-xs">24h Change</div>
              </div>
              <div>
                <div className="text-verdana-cream font-medium">$2.1B</div>
                <div className="text-verdana-cream/50 text-xs">Market Cap</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreProductSection;
