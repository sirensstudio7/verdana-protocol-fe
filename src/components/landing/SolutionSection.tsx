import { ArrowRight, Shield, Zap, FileCheck, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { LucideIcon } from "lucide-react";
import RevealLines from "./RevealLines";
import ScrollReveal from "./ScrollReveal";

const solutions: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Shield,
    title: "Audit-Grade Data",
    description:
      "Rekam data konsumsi BBM yang konsisten dan dapat ditelusuri untuk audit lingkungan dan kepatuhan regulasi.",
  },
  {
    icon: Zap,
    title: "Instant Settlement",
    description:
      "Verifikasi dan kalkulasi emisi berjalan otomatis — dari input lapangan hingga angka siap lapor.",
  },
  {
    icon: FileCheck,
    title: "Automated Compliance",
    description:
      "Pemantauan dan pelaporan terhadap kerangka keberlanjutan nasional maupun internasional.",
  },
  {
    icon: Globe,
    title: "Global Capital Access",
    description:
      "Data ESG terstruktur membuka peluang pembiayaan hijau dari investor global.",
  },
];

const SolutionSection = () => {
  return (
    <section id="solusi" className="bg-black py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-start mb-16 lg:mb-20">
          <div className="lg:pr-8">
            <ScrollReveal className="flex items-center gap-2 text-sm text-[var(--nav-accent)] font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--nav-accent)]" />
              Solusi
            </ScrollReveal>
            <RevealLines
              as="h2"
              lines={["Arsitektur Solusi", "Verdana."]}
              className="text-4xl lg:text-5xl xl:text-[56px] font-semibold text-white leading-[1.08] tracking-tight mb-6"
            />
            <ScrollReveal
              as="p"
              className="text-neutral-400 text-base lg:text-lg leading-relaxed max-w-md mb-10"
              delay={0.2}
            >
              Sistem operasi terpadu untuk seluruh siklus aset — dari pengukuran konsumsi hingga
              pelaporan dan monetisasi kredit karbon.
            </ScrollReveal>
            <ScrollReveal delay={0.35}>
            <Button className="rounded-full bg-[var(--nav-accent)] text-[var(--nav-accent-contrast)] hover:bg-[var(--nav-accent-strong)] h-12 px-7 text-sm font-bold gap-2">
              Hubungi Tim Kami
              <ArrowRight className="w-4 h-4" />
            </Button>
            </ScrollReveal>
          </div>

          <ScrollReveal className="grid grid-cols-2 gap-4 lg:gap-5" stagger={0.1} y={48}>
            <div className="relative overflow-hidden rounded-3xl aspect-[4/5]">
              <img
                src="/webp/land-leaf.webp"
                alt="Energi terbarukan"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="relative overflow-hidden rounded-3xl aspect-[4/5] mt-8">
              <img
                src="/webp/tree-right.webp"
                alt="Operasional industri"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="col-span-2 relative overflow-hidden rounded-3xl aspect-[21/9]">
              <img
                src="/webp/bg-hero.webp"
                alt="Hutan dan keberlanjutan"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal className="grid grid-cols-1 md:grid-cols-2 gap-5" stagger={0.1}>
          {solutions.map((solution) => {
            const Icon = solution.icon;
            return (
              <div
                key={solution.title}
                className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6 lg:p-7 hover:border-neutral-700 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-neutral-900 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-[var(--nav-accent)]" strokeWidth={1.75} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{solution.title}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">{solution.description}</p>
              </div>
            );
          })}
        </ScrollReveal>
      </div>
    </section>
  );
};

export default SolutionSection;
