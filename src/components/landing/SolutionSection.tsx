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
    <section className="bg-verdana-dark py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <span className="text-verdana-yellow text-sm font-medium uppercase tracking-wider">
            The Solution
          </span>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-serif font-semibold text-verdana-cream mt-4 mb-4">
            The Solution Architecture
          </h2>
          <p className="text-verdana-cream/70 text-lg max-w-2xl mx-auto">
            A comprehensive blockchain infrastructure designed for industrial sustainability
          </p>
        </div>

        {/* Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-verdana-green border border-verdana-medium/40 rounded-2xl p-6 hover:border-verdana-yellow/40 transition-colors group"
            >
              <div className="w-14 h-14 bg-verdana-cream/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-verdana-yellow/20 transition-colors">
                <solution.icon className="w-7 h-7 text-verdana-cream group-hover:text-verdana-yellow transition-colors" />
              </div>
              <h3 className="text-verdana-cream font-semibold text-xl mb-3">
                {solution.title}
              </h3>
              <p className="text-verdana-cream/60 text-sm leading-relaxed">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
