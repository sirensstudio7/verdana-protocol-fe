import { useState, useEffect, useRef, useCallback } from "react";
import { ArrowRight } from "lucide-react";
import RevealLines from "./RevealLines";
import ScrollReveal from "./ScrollReveal";

const segments = [
  {
    label: "Fleet & Logistik",
    tag: "Armada truk & distribusi",
    description:
      "Pantau konsumsi BBM armada distribusi secara real-time — dari input lapangan hingga laporan siap audit.",
    image: "/segments-fleet-logistik.png",
  },
  {
    label: "Konstruksi",
    tag: "Alat berat & genset proyek",
    description:
      "Catat pemakaian BBM alat berat dan genset di setiap proyek dengan akurasi data lapangan.",
    image: "/segments-konstruksi.png",
  },
  {
    label: "Perkebunan",
    tag: "Estate & operasional kebun",
    description:
      "Kelola konsumsi energi operasional kebun skala besar dengan visibilitas per lokasi dan unit.",
    image: "/segments-perkebunan.png",
  },
  {
    label: "Pertambangan",
    tag: "Hauling & fleet site",
    description:
      "Monitor armada hauling dan operasional site dengan deteksi anomali konsumsi otomatis.",
    image: "/segments-pertambangan.png",
  },
  {
    label: "Korporat ESG",
    tag: "Pelaporan OJK & audit",
    description:
      "Generate laporan ESG dan kepatuhan regulasi OJK dengan data terstruktur siap audit.",
    image: "/segments-korporat-esg.png",
  },
];

const AUTO_PLAY_MS = 5000;

const SegmentsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % segments.length);
    }, AUTO_PLAY_MS);
  }, []);

  useEffect(() => {
    if (!isPaused) startTimer();
    else if (timerRef.current) clearInterval(timerRef.current);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, startTimer]);

  const handleSelect = (index: number) => {
    setActiveIndex(index);
    if (!isPaused) startTimer();
  };

  return (
    <section className="bg-black font-inter">
      <div className="container mx-auto px-4 lg:px-8 pt-20 lg:pt-28 pb-32 lg:pb-44">
        {/* Header — reference split layout */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-24 items-end mb-12 lg:mb-16">
          <div>
            <ScrollReveal className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--nav-accent)] mb-5 lg:mb-6">
              Industri
            </ScrollReveal>
            <RevealLines
              as="h2"
              lines={["Segmen yang didukung", "untuk operasional Anda."]}
              className="text-3xl lg:text-4xl xl:text-[42px] font-semibold text-white leading-[1.15] tracking-[-0.02em] max-w-lg"
            />
          </div>

          <div className="lg:pb-2 lg:text-right lg:ml-auto">
            <ScrollReveal
              as="p"
              className="text-neutral-400 text-base lg:text-lg leading-snug mb-8 lg:ml-auto"
              delay={0.15}
            >
              Lima sektor dengan konsumsi BBM terbesar di lapangan,
              <br />
              dari armada distribusi hingga korporat yang wajib lapor ESG.
            </ScrollReveal>
            <ScrollReveal className="lg:flex lg:justify-end" delay={0.25}>
              <a
                href="#fitur"
                className="inline-flex items-center gap-3 rounded-full bg-white text-neutral-900 h-12 pl-6 pr-2 text-sm font-semibold transition-colors hover:bg-neutral-100"
              >
                Pelajari Lebih Lanjut
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-900">
                  <ArrowRight className="h-4 w-4 text-white" />
                </span>
              </a>
            </ScrollReveal>
          </div>
        </div>

        {/* Horizontal accordion cards — reference style */}
        <ScrollReveal y={56}>
          <div
            className="flex gap-2 lg:gap-3 h-[400px] sm:h-[440px] lg:h-[480px]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
          {segments.map((segment, index) => {
            const isActive = index === activeIndex;

            if (isActive) {
              return (
                <button
                  key={segment.label}
                  type="button"
                  onClick={() => handleSelect(index)}
                  className="relative flex-[4] min-w-0 overflow-hidden rounded-2xl text-left transition-all duration-500 ease-out"
                >
                  <img
                    src={segment.image}
                    alt={segment.label}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/50" />
                  <div className="relative z-10 flex h-full items-end justify-between gap-4 p-6 lg:p-8">
                    <div className="max-w-md text-left">
                      <h3 className="text-2xl lg:text-3xl font-semibold text-white leading-tight">
                        {segment.label}
                      </h3>
                      <p className="mt-3 text-sm lg:text-base text-white/75 leading-relaxed">
                        {segment.description}
                      </p>
                    </div>
                    <span className="shrink-0 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-lg">
                      <ArrowRight className="h-4 w-4 text-neutral-900" />
                    </span>
                  </div>
                </button>
              );
            }

            return (
              <button
                key={segment.label}
                type="button"
                onClick={() => handleSelect(index)}
                className="relative w-[64px] sm:w-[72px] lg:w-[88px] shrink-0 overflow-hidden rounded-2xl bg-neutral-900 transition-all duration-500 ease-out hover:opacity-90"
                aria-label={segment.label}
              >
                <img
                  src={segment.image}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full object-cover opacity-50"
                  loading="lazy"
                />
                <span className="absolute inset-0 bg-black/55" />
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="whitespace-nowrap text-sm sm:text-base lg:text-lg font-semibold text-white [writing-mode:vertical-lr] rotate-180 tracking-wide">
                    {segment.label}
                  </span>
                </span>
              </button>
            );
          })}
          </div>
        </ScrollReveal>

        {/* Mobile segment picker */}
        <div className="mt-4 flex gap-2 overflow-x-auto pb-1 lg:hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {segments.map((segment, index) => (
            <button
              key={segment.label}
              type="button"
              onClick={() => handleSelect(index)}
              className={`shrink-0 rounded-full px-4 py-2 text-xs font-medium transition-colors ${
                index === activeIndex
                  ? "bg-white text-neutral-900"
                  : "bg-neutral-900 text-neutral-400"
              }`}
            >
              {segment.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SegmentsSection;
