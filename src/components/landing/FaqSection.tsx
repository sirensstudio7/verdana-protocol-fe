import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import RevealLines from "./RevealLines";
import ScrollReveal from "./ScrollReveal";

const faqs = [
  {
    question: "Apa itu Verdana Protocol?",
    answer:
      "Platform monitoring BBM dan emisi karbon untuk industri Indonesia. Catat konsumsi dari lapangan, hitung CO₂eq otomatis, dan hasilkan laporan ESG siap audit.",
  },
  {
    question: "Bagaimana emisi dihitung?",
    answer:
      "Berdasarkan GHG Protocol dan IPCC 2006. Platform mendukung fuel-based dan distance-based, termasuk penyesuaian blending B40 untuk solar di SPBU.",
  },
  {
    question: "Apakah bisa lapor ke SIGN-SMART KLHK?",
    answer:
      "Ya. Laporan dihasilkan sesuai format inventarisasi GRK nasional dan kompatibel dengan SIGN-SMART (signsmart.menlhk.go.id).",
  },
  {
    question: "Dari mana data BBM bisa diinput?",
    answer:
      "Lewat web form, mobile PWA, atau WhatsApp Bot. Cocok untuk operator di lapangan tanpa perlu buka dashboard.",
  },
  {
    question: "Apa bedanya paket Freemium dan Pro?",
    answer:
      "Freemium gratis untuk 3 aset dan 3 user. Pro menambah kapasitas 80 aset, analitik per driver/lokasi, mobile PWA, dan white-label.",
  },
  {
    question: "Bisakah upgrade paket kapan saja?",
    answer:
      "Ya. Mulai dari Freemium, lalu upgrade ke Starter, Pro, atau Enterprise sesuai pertumbuhan operasional tanpa kehilangan data historis.",
  },
];

const FaqSection = () => {
  return (
    <section id="faq" className="bg-black font-inter border-t border-neutral-900">
      <div className="px-4 sm:px-6 lg:px-10 xl:px-16 py-20 lg:py-28">
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <ScrollReveal className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--nav-accent)] mb-6">
            FAQ
          </ScrollReveal>
          <RevealLines
            as="h2"
            lines={["Pertanyaan", "yang sering diajukan."]}
            className="text-2xl lg:text-3xl xl:text-[36px] font-semibold text-white leading-[1.15] tracking-[-0.02em]"
          />
        </div>

        <ScrollReveal className="max-w-3xl mx-auto" delay={0.1}>
          <Accordion type="single" collapsible className="divide-y divide-neutral-800">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={faq.question}
                  value={`faq-${index}`}
                  className="border-none"
                >
                  <AccordionTrigger className="py-6 lg:py-7 text-left text-base lg:text-lg font-medium text-white hover:no-underline hover:text-[var(--nav-accent)] transition-colors [&>svg]:text-neutral-500">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm lg:text-base text-neutral-400 leading-relaxed pb-6 lg:pb-7">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
          </Accordion>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FaqSection;
