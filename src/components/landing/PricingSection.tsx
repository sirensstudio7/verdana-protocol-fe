import { ArrowRight, Building2, Crown, Rocket, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import RevealWords from "./RevealWords";
import ScrollReveal from "./ScrollReveal";

const pricingBg =
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1920&q=80";

const plans: {
  name: string;
  quota: string;
  price: string;
  pricePrefix?: string;
  priceSuffix?: string | null;
  description: string;
  features: string[];
  cta: string;
  popular: boolean;
  icon: LucideIcon;
}[] = [
  {
    name: "Freemium",
    quota: "3 aset · 3 user",
    price: "Gratis",
    description: "Mulai monitoring BBM tanpa biaya untuk tim kecil dan uji coba platform.",
    features: [
      "Dashboard basic",
      "Input fuel log manual",
      "Kalkulasi CO₂ otomatis",
      "3 kendaraan / aset",
      "Laporan PDF",
      "WhatsApp Bot",
    ],
    cta: "Mulai Gratis",
    popular: false,
    icon: Sparkles,
  },
  {
    name: "Starter",
    quota: "15 aset · 15 user",
    price: "799K",
    pricePrefix: "Rp",
    priceSuffix: "/bulan",
    description: "Untuk operasional berkembang yang butuh workflow dan laporan lebih lengkap.",
    features: [
      "Semua fitur Freemium",
      "15 kendaraan / aset",
      "15 user seat",
      "Approval workflow",
      "IoT sensor",
      "White-label",
    ],
    cta: "Pilih Starter",
    popular: false,
    icon: Rocket,
  },
  {
    name: "Pro",
    quota: "80 aset · 80 user",
    price: "1,5 jt",
    pricePrefix: "Rp",
    priceSuffix: "/bulan",
    description: "Solusi lengkap untuk fleet menengah dengan analitik dan mobile PWA.",
    features: [
      "Semua fitur Starter",
      "80 kendaraan / aset",
      "Analitik per driver/lokasi",
      "Mobile PWA",
      "WhatsApp Bot input",
      "White-label",
    ],
    cta: "Pilih Pro",
    popular: true,
    icon: Crown,
  },
  {
    name: "Enterprise",
    quota: "Unlimited · Unlimited",
    price: "Custom",
    description: "Infrastruktur kustom, integrasi ERP, dan dukungan dedicated untuk korporat.",
    features: [
      "Semua fitur Pro",
      "Unlimited aset & user",
      "GPS tracker & IoT sensor",
      "Dedicated support & SLA",
      "ERP integration",
      "Carbon credit marketplace",
    ],
    cta: "Hubungi Sales",
    popular: false,
    icon: Building2,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="relative overflow-hidden font-inter">
      <img
        src={pricingBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-20 lg:py-28">
        <div className="text-center mb-14 lg:mb-20">
          <ScrollReveal className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-white/90 mb-6 backdrop-blur-sm">
            Pricing
          </ScrollReveal>
          <h2 className="text-white leading-[1.12] tracking-[-0.02em]">
            <span className="block font-serif text-3xl lg:text-4xl xl:text-5xl font-normal italic">
              <RevealWords text="Paket yang sesuai" />
            </span>
            <span className="block text-3xl lg:text-5xl xl:text-[56px] font-semibold mt-1">
              <RevealWords text="untuk operasional Anda." delay={0.18} />
            </span>
          </h2>
        </div>

        <ScrollReveal
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-5 items-end"
          stagger={0.1}
          y={40}
        >
          {plans.map((plan) => {
            const Icon = plan.icon;
            const isGlass = plan.popular;

            return (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-sm p-6 lg:p-7 min-h-[520px] ${
                  isGlass
                    ? "bg-white/15 backdrop-blur-xl border border-white/25 text-white shadow-2xl xl:scale-[1.03] xl:-translate-y-2"
                    : "bg-white text-neutral-900 shadow-xl"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-neutral-900">
                    Paling Populer
                  </span>
                )}

                <Icon
                  className={`w-8 h-8 mb-6 ${isGlass ? "text-white" : "text-neutral-900"}`}
                  strokeWidth={1.25}
                />

                <div className="mb-1">
                  {plan.pricePrefix && (
                    <span
                      className={`text-sm ${isGlass ? "text-white/70" : "text-neutral-500"}`}
                    >
                      {plan.pricePrefix}{" "}
                    </span>
                  )}
                  <span className="text-4xl lg:text-[42px] font-bold tracking-tight leading-none">
                    {plan.price}
                  </span>
                  {plan.priceSuffix && (
                    <span
                      className={`text-sm ml-1 align-top ${isGlass ? "text-white/70" : "text-neutral-500"}`}
                    >
                      {plan.priceSuffix}
                    </span>
                  )}
                </div>

                <h3
                  className={`font-serif text-2xl lg:text-[28px] mt-4 mb-2 ${
                    isGlass ? "text-white" : "text-neutral-900"
                  }`}
                >
                  {plan.name}
                </h3>

                <p
                  className={`text-xs leading-relaxed mb-5 ${
                    isGlass ? "text-white/75" : "text-neutral-500"
                  }`}
                >
                  {plan.description}
                </p>

                <p
                  className={`text-[11px] uppercase tracking-wider mb-4 ${
                    isGlass ? "text-white/60" : "text-neutral-400"
                  }`}
                >
                  {plan.quota}
                </p>

                <ul className="flex-1 space-y-2.5 mb-8">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-start gap-2 text-xs leading-snug ${
                        isGlass ? "text-white/90" : "text-neutral-600"
                      }`}
                    >
                      <ArrowRight
                        className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                          isGlass ? "text-white/80" : "text-neutral-900"
                        }`}
                        strokeWidth={2}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  className={`w-full py-3.5 text-sm font-semibold transition-colors ${
                    isGlass
                      ? "bg-white text-neutral-900 hover:bg-white/90"
                      : "bg-neutral-900 text-white hover:bg-neutral-800"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            );
          })}
        </ScrollReveal>

        <ScrollReveal className="text-center mt-12 lg:mt-16" delay={0.2}>
          <p className="text-sm text-white/70">
            Belum yakin paket mana yang tepat?{" "}
            <a href="#fitur" className="text-white underline underline-offset-4 hover:text-white/90">
              Hubungi tim kami
            </a>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PricingSection;
