import { Shield, Zap, FileCheck, Globe } from "lucide-react";

const solutions = [
  {
    icon: Shield,
    title: "Audit-Grade Data",
    description: "Immutable blockchain records provide tamper-proof evidence for environmental audits and regulatory compliance.",
  },
  {
    icon: Zap,
    title: "Instant Settlement",
    description: "Smart contracts enable real-time verification and automatic settlement of carbon credits and sustainability metrics.",
  },
  {
    icon: FileCheck,
    title: "Automated Compliance",
    description: "AI-powered monitoring automatically tracks and reports against international sustainability frameworks.",
  },
  {
    icon: Globe,
    title: "Global Capital Access",
    description: "Tokenized sustainability assets unlock new financing opportunities from global green investment funds.",
  },
];

const SolutionSection = () => {
  return (
    <section className="bg-verdana-dark py-16 lg:py-24 relative">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'url(/webp/tree-left.webp)', backgroundSize: 'contain', backgroundPosition: 'left center', backgroundRepeat: 'no-repeat', transform: 'rotate(-5deg)', left: '-50px' }}></div>
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-12 lg:mb-16">
          <span className="text-verdana-yellow text-sm font-medium uppercase tracking-wider">
            The Solution
          </span>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-serif font-semibold text-verdana-cream mt-4 mb-4">
            The Solution Architecture
          </h2>
          <p className="text-verdana-cream/70 text-lg max-w-2xl mx-auto">
            A unfied operating system for the entire asset lifecycle. From measurement to monetization.
          </p>
        </div>

        {/* Solution Cards */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2" style={{ gap: '16px', columnGap: '16px' }}>
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="border border-verdana-medium/40 rounded-2xl p-6 hover:border-verdana-yellow/40 transition-colors group"
              style={{ backgroundColor: '#DFF390', width: '450px' }}
            >
              <div className="w-14 h-14 bg-verdana-cream/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-verdana-yellow/20 transition-colors">
                <solution.icon className="w-7 h-7 transition-colors" style={{ color: '#305E51' }} />
              </div>
              <h3 className="font-semibold text-xl mb-3" style={{ color: '#305E51', fontSize: '24px' }}>
                {solution.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#305E51' }}>
                {solution.description}
              </p>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
