import RevealWords from "./RevealWords";
import ScrollReveal from "./ScrollReveal";

const QuoteSection = () => {
  return (
    <section className="bg-black py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden aspect-[16/9] lg:aspect-[21/9]">
          <img
            src="/webp/impactfull.webp"
            alt="Keberlanjutan industri"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-neutral-900/50" />
          <div className="absolute inset-0 flex items-center justify-center p-8 lg:p-16">
            <div className="max-w-3xl text-center">
              <ScrollReveal className="flex items-center justify-center gap-2 text-sm text-white/80 font-medium mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                Impactful Things
              </ScrollReveal>
              <RevealWords
                as="blockquote"
                text="Pelaporan emisi bukan beban operasional — ini fondasi industri yang bertanggung jawab di era regulasi ESG."
                className="text-2xl lg:text-4xl xl:text-[42px] font-semibold text-white leading-[1.2] tracking-tight"
                delay={0.12}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
