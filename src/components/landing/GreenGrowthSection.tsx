import RevealWords from "./RevealWords";
import ScrollReveal from "./ScrollReveal";

type CardTone = "default" | "forest" | "accent";

const cardStyles: Record<
  CardTone,
  { bg: string; category: string; title: string; description: string }
> = {
  default: {
    bg: "bg-neutral-900",
    category: "text-neutral-400",
    title: "text-xl text-white",
    description: "text-neutral-300",
  },
  forest: {
    bg: "bg-[var(--nav-accent-contrast)]",
    category: "text-[var(--nav-accent)] opacity-80",
    title: "text-xl text-white",
    description: "text-white/70",
  },
  accent: {
    bg: "bg-[var(--nav-accent)]",
    category: "text-[var(--nav-accent-contrast)] opacity-60",
    title: "text-2xl lg:text-3xl text-[var(--nav-accent-contrast)]",
    description: "text-[var(--nav-accent-contrast)] opacity-75",
  },
};

const painPoints: {
  category: string;
  title: string;
  description: string;
  bento?: string;
  tone?: CardTone;
}[] = [
  {
    category: "Fuel Log",
    title: "Multi-Aset",
    description:
      "Input konsumsi BBM untuk kendaraan, alat berat, dan genset. Support web form, mobile, dan WhatsApp Bot.",
    bento: "sm:col-span-2",
    tone: "forest",
  },
  {
    category: "Kalkulasi",
    title: "CO₂eq Otomatis",
    description:
      "Hitung emisi berdasarkan fuel-based atau distance-based. Mendukung blending B40, CH₄, N₂O sesuai GWP AR6 IPCC.",
    tone: "accent",
    bento: "sm:col-span-2 lg:col-span-2 lg:row-span-2",
  },
  {
    category: "Compliance",
    title: "Laporan ESG & PDF",
    description:
      "Generate laporan kepatuhan otomatis. Compatible dengan sistem SIGN-SMART KLHK dan pelaporan OJK untuk perusahaan Tbk.",
    bento: "lg:row-span-2",
  },
  {
    category: "Analytics",
    title: "Dashboard Real-time",
    description:
      "Visualisasi konsumsi per kendaraan, per sopir, per lokasi, dan tren emisi 30 hari. Breakdown lengkap untuk manajemen.",
  },
  {
    category: "Keamanan",
    title: "Anomaly Detection",
    description:
      "Flag otomatis pengisian melebihi kapasitas tangki, konsumsi > 2x rata-rata historis, dan pengisian di luar jam operasional.",
  },
  {
    category: "Multi-tenant",
    title: "Role-Based Access",
    description:
      "5 level role: Super Admin, Admin, Manager, Operator, Viewer. Row-level security di PostgreSQL per organisasi.",
    bento: "sm:col-span-2",
  },
];

const GreenGrowthSection = () => {
  return (
    <section id="fitur" className="bg-black py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-end mb-16 lg:mb-24">
          <RevealWords
            as="h2"
            text="Satu platform untuk semua kebutuhan monitoring energi"
            className="text-2xl lg:text-4xl xl:text-[42px] font-semibold text-white leading-[1.35] lg:leading-[1.3] xl:leading-[1.25] tracking-[-0.02em] text-balance"
          />
          <ScrollReveal
            as="p"
            className="text-base text-neutral-400 leading-relaxed lg:max-w-md lg:ml-auto lg:self-end"
            delay={0.15}
          >
            Dari input manual hingga IoT sensor, dari startup logistik hingga korporat yang wajib
            lapor ESG ke OJK.
          </ScrollReveal>
        </div>

        <ScrollReveal
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 auto-rows-[minmax(200px,auto)] lg:auto-rows-[minmax(220px,1fr)]"
          stagger={0.08}
          y={32}
        >
          {painPoints.map((point) => {
            const style = cardStyles[point.tone ?? "default"];
            return (
              <div
                key={point.category}
                className={`group flex flex-col h-full min-h-[200px] rounded-2xl p-6 lg:p-7 transition-all duration-300 ${point.bento ?? ""} ${style.bg}`}
              >
                <p className={`text-xs font-medium uppercase tracking-wider mb-3 ${style.category}`}>
                  {point.category}
                </p>
                <h3 className={`font-semibold leading-tight mb-3 ${style.title}`}>{point.title}</h3>
                <p className={`text-sm leading-relaxed mt-auto ${style.description}`}>
                  {point.description}
                </p>
              </div>
            );
          })}
        </ScrollReveal>
      </div>
    </section>
  );
};

export default GreenGrowthSection;
