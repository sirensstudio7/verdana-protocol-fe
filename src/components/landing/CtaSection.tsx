import { ArrowRight } from "lucide-react";
import RevealWords from "./RevealWords";
import ScrollReveal from "./ScrollReveal";

const ctaBg =
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1920&q=80";

const CtaSection = () => {
  return (
    <section className="relative font-inter overflow-hidden">
      <img
        src={ctaBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 px-4 sm:px-6 lg:px-10 xl:px-16 py-28 lg:py-36">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--nav-accent)] mb-6">
            Mulai Sekarang
          </ScrollReveal>

          <h2 className="text-white leading-[1.12] tracking-[-0.02em] mb-6">
            <span className="block font-serif text-3xl lg:text-4xl xl:text-5xl font-normal italic">
              <RevealWords text="Siap lapor emisi" />
            </span>
            <span className="block text-3xl lg:text-4xl xl:text-[52px] font-semibold mt-1">
              <RevealWords text="dengan data audit-ready?" delay={0.18} />
            </span>
          </h2>

          <ScrollReveal
            as="p"
            className="text-neutral-400 text-base lg:text-lg leading-relaxed mb-4"
            delay={0.12}
          >
            Mulai gratis untuk 3 aset dan 3 user.
            <br className="hidden sm:block" />
            Upgrade kapan saja sesuai skala operasional.
          </ScrollReveal>

          <ScrollReveal
            as="p"
            className="text-sm text-[var(--nav-accent)] mb-10"
            delay={0.18}
          >
            Gratis · 3 aset · 3 user
          </ScrollReveal>

          <ScrollReveal
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
            delay={0.25}
          >
            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--nav-accent)] text-[var(--nav-accent-contrast)] h-12 px-8 text-sm font-bold transition-colors hover:bg-[var(--nav-accent-strong)] w-full sm:w-auto"
            >
              Mulai Gratis
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#fitur"
              className="inline-flex items-center justify-center rounded-full border border-white/30 text-white h-12 px-8 text-sm font-medium transition-colors hover:border-white/50 hover:bg-white/10 w-full sm:w-auto backdrop-blur-sm"
            >
              Lihat Fitur
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
