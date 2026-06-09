import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import RevealLines from "./RevealLines";
import RevealWords from "./RevealWords";
import ScrollReveal from "./ScrollReveal";

const HeroSection = () => {
  return (
    <section className="relative min-h-[100dvh] flex flex-col overflow-hidden">
      <img
        src="/hero-bg-hd.webp"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center"
        fetchPriority="high"
        decoding="async"
      />

      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.2) 45%, transparent 70%)",
        }}
      />

      <div className="absolute bottom-0 left-0 right-0 z-[2] pointer-events-none h-[min(22vh,200px)]">
        <div
          className="absolute inset-0 backdrop-blur-[2px]"
          style={{
            opacity: 0.5,
            maskImage: "linear-gradient(to top, black 35%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to top, black 35%, transparent 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, #000000 0%, rgba(0,0,0,0.45) 40%, rgba(0,0,0,0.15) 70%, transparent 100%)",
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 flex-1 flex items-center justify-center pt-28 lg:pt-32 pb-16 lg:pb-20">
        <div className="max-w-3xl mx-auto text-center w-full">
          <RevealLines
            as="h1"
            lines={["Monitor BBM & Emisi", "Karbon Industri Anda."]}
            className="text-4xl lg:text-6xl xl:text-[64px] font-semibold text-white leading-[1.08] tracking-tight mb-6"
            onScroll={false}
          />

          <RevealWords
            as="p"
            text="Catat BBM truk, alat berat, dan genset langsung dari lapangan — lewat web, mobile, atau WhatsApp. Emisi dihitung ke GHG Protocol, laporan ESG siap saat audit atau pelaporan regulator."
            className="text-white/75 text-base lg:text-lg leading-relaxed max-w-2xl mx-auto mb-10"
            delay={0.35}
            onScroll={false}
          />

          <ScrollReveal
            className="flex flex-col sm:flex-row gap-3 justify-center"
            delay={0.65}
            stagger={0.12}
            onScroll={false}
          >
            <Button className="rounded-full bg-white text-neutral-900 hover:bg-neutral-100 h-12 px-7 text-sm font-medium gap-2">
              Mulai Gratis Sekarang
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              className="rounded-full border-white/40 text-white bg-transparent hover:bg-white/10 h-12 px-7 text-sm font-medium"
            >
              Lihat Cara Kerja
            </Button>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
