import RevealWords from "./RevealWords";
import ScrollReveal from "./ScrollReveal";

const regulations = [
  {
    code: "Perpres 71/2011",
    title: "Inventarisasi GRK Nasional",
    description:
      "Kewajiban inventarisasi gas rumah kaca secara nasional yang menjadi dasar sistem pelaporan emisi di Indonesia.",
  },
  {
    code: "Perpres 98/2021",
    title: "Nilai Ekonomi Karbon",
    description:
      "Regulasi utama perdagangan karbon dan mekanisme penetapan harga karbon di Indonesia. Wajib CO₂eq.",
  },
  {
    code: "Permen LHK 21/2022",
    title: "Tata Cara Inventarisasi GRK",
    description:
      "Pedoman teknis tata cara inventarisasi gas rumah kaca untuk sektor industri, energi, dan transportasi.",
  },
  {
    code: "IPCC 2006",
    title: "Guidelines for GHG Inventories",
    description:
      "Standar internasional penghitungan emisi. Emission factor BBM bersumber dari panduan ini.",
  },
  {
    code: "GHG Protocol",
    title: "Corporate Standard",
    description:
      "Framework pelaporan emisi korporasi paling widely-used di dunia. Scope 1, 2, dan 3.",
  },
  {
    code: "SIGN-SMART",
    title: "Platform KLHK",
    description:
      "Sistem informasi inventarisasi GRK nasional (signsmart.menlhk.go.id). Platform resmi pelaporan.",
  },
];

const RegulationSection = () => {
  return (
    <section id="regulasi" className="bg-black font-inter border-t border-neutral-900">
      <div className="lg:grid lg:grid-cols-[minmax(300px,36%)_1fr] xl:grid-cols-[minmax(340px,32%)_1fr] lg:items-start">
        {/* Left — sticky intro panel */}
        <aside className="lg:sticky lg:top-28 lg:self-start h-fit w-full max-h-none lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto px-4 sm:px-6 lg:px-10 xl:px-16 py-20 lg:py-28 lg:border-r lg:border-neutral-900">
          <ScrollReveal className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--nav-accent)] mb-6">
            Kepatuhan Regulasi
          </ScrollReveal>

          <h2 className="text-white leading-[1.12] tracking-[-0.02em] mb-8">
            <span className="block text-2xl lg:text-3xl xl:text-[32px] font-semibold">
              <RevealWords text="Dibangun Sesuai" />
            </span>
            <span className="block text-2xl lg:text-3xl xl:text-[32px] font-semibold mt-1">
              <RevealWords text="Hukum Indonesia" delay={0.18} />
            </span>
          </h2>

          <ScrollReveal
            as="p"
            className="text-neutral-400 text-base leading-relaxed mb-10 max-w-sm"
            delay={0.15}
          >
            Setiap kalkulasi emisi, setiap laporan yang dihasilkan platform ini mengacu pada regulasi
            resmi pemerintah Indonesia dan standar internasional yang diakui KLHK.
          </ScrollReveal>

          <ScrollReveal className="mt-10 max-w-sm" delay={0.25}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[var(--nav-accent)] mb-3">
              Update 2025 · B40
            </p>
            <p className="text-sm text-neutral-400 leading-[1.75]">
              Solar di SPBU wajib blending 60% fosil dan 40% biodiesel. Verdana menyesuaikan
              emission factor ke{" "}
              <span className="text-white tabular-nums">2,316 kg CO₂eq/L</span>
              <span className="block mt-3 text-xs text-neutral-600 tabular-nums">
                (2,68 × 0,60) + (1,77 × 0,40)
              </span>
            </p>
          </ScrollReveal>
        </aside>

        {/* Right — full-bleed regulation index */}
        <div className="px-4 sm:px-6 lg:px-10 xl:px-16 py-12 lg:py-28">
          <ScrollReveal className="flex items-center justify-between mb-10 lg:mb-14" delay={0.1}>
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
              {regulations.length} Regulasi & Standar
            </p>
            <p className="hidden lg:block text-xs uppercase tracking-[0.25em] text-neutral-700 [writing-mode:vertical-lr] rotate-180">
              Kepatuhan
            </p>
          </ScrollReveal>

          <div className="divide-y divide-neutral-800">
            {regulations.map((item, index) => (
              <ScrollReveal
                key={item.code}
                className="group py-8 lg:py-10 first:pt-0 last:pb-0"
                delay={index * 0.06}
                y={24}
              >
                <div className="grid grid-cols-[auto_1fr] gap-5 lg:gap-10 items-start">
                  <span className="text-3xl lg:text-5xl font-light tabular-nums text-neutral-800 transition-colors duration-300 group-hover:text-[var(--nav-accent)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[var(--nav-accent)]">
                      {item.code}
                    </p>
                    <h3 className="text-xl lg:text-2xl font-semibold text-white mt-2 mb-3 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm lg:text-base text-neutral-400 leading-relaxed max-w-2xl">
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegulationSection;
