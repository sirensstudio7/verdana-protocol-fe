import { Clock, MapPin, ShieldAlert, Wallet } from "lucide-react";

const painPoints = [
  {
    icon: Clock,
    title: "Manual and Inefficient",
    description: "Traditional sustainability reporting is time-consuming, error-prone, and lacks real-time visibility.",
  },
  {
    icon: MapPin,
    title: "Geographic Friction",
    description: "Cross-border environmental compliance creates significant operational barriers and delays.",
  },
  {
    icon: ShieldAlert,
    title: "Data Trust Gap",
    description: "Stakeholders struggle to verify environmental claims without standardized audit trails.",
  },
  {
    icon: Wallet,
    title: "Financing Barrier",
    description: "Sustainable projects face difficulties accessing green financing due to verification challenges.",
  },
];

const GreenGrowthSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-verdana-green to-verdana-forest overflow-hidden">
      {/* Forest Illustration Header */}
      <div className="relative h-32 lg:h-48 overflow-hidden">
        <svg
          viewBox="0 0 1440 200"
          className="absolute bottom-0 w-full h-full"
          preserveAspectRatio="xMidYMax slice"
        >
          {/* Background trees */}
          <g fill="hsl(150 40% 25%)">
            <path d="M0,200 L0,120 C20,100 40,80 60,100 C80,80 100,60 120,80 C140,60 160,70 180,90 C200,70 220,50 240,70 L240,200 Z" />
            <path d="M200,200 L200,100 C220,80 240,60 260,80 C280,60 300,40 320,60 C340,40 360,50 380,70 L380,200 Z" />
            <path d="M340,200 L340,110 C360,90 380,70 400,90 C420,70 440,50 460,70 C480,50 500,60 520,80 L520,200 Z" />
            <path d="M480,200 L480,90 C500,70 520,50 540,70 C560,50 580,30 600,50 C620,30 640,40 660,60 L660,200 Z" />
            <path d="M620,200 L620,100 C640,80 660,60 680,80 C700,60 720,40 740,60 C760,40 780,50 800,70 L800,200 Z" />
            <path d="M760,200 L760,85 C780,65 800,45 820,65 C840,45 860,25 880,45 C900,25 920,35 940,55 L940,200 Z" />
            <path d="M900,200 L900,95 C920,75 940,55 960,75 C980,55 1000,35 1020,55 C1040,35 1060,45 1080,65 L1080,200 Z" />
            <path d="M1040,200 L1040,90 C1060,70 1080,50 1100,70 C1120,50 1140,30 1160,50 C1180,30 1200,40 1220,60 L1220,200 Z" />
            <path d="M1180,200 L1180,100 C1200,80 1220,60 1240,80 C1260,60 1280,40 1300,60 C1320,40 1340,50 1360,70 L1360,200 Z" />
            <path d="M1320,200 L1320,110 C1340,90 1360,70 1380,90 C1400,70 1420,50 1440,70 L1440,200 Z" />
          </g>
          {/* Foreground trees */}
          <g fill="hsl(150 45% 20%)">
            <path d="M-20,200 L-20,140 C0,120 20,100 40,120 C60,100 80,80 100,100 L100,200 Z" />
            <path d="M80,200 L80,130 C100,110 120,90 140,110 C160,90 180,70 200,90 L200,200 Z" />
            <path d="M180,200 L180,145 C200,125 220,105 240,125 C260,105 280,85 300,105 L300,200 Z" />
            <path d="M280,200 L280,135 C300,115 320,95 340,115 C360,95 380,75 400,95 L400,200 Z" />
            <path d="M380,200 L380,140 C400,120 420,100 440,120 C460,100 480,80 500,100 L500,200 Z" />
            <path d="M480,200 L480,130 C500,110 520,90 540,110 C560,90 580,70 600,90 L600,200 Z" />
            <path d="M580,200 L580,145 C600,125 620,105 640,125 C660,105 680,85 700,105 L700,200 Z" />
            <path d="M680,200 L680,135 C700,115 720,95 740,115 C760,95 780,75 800,95 L800,200 Z" />
            <path d="M780,200 L780,140 C800,120 820,100 840,120 C860,100 880,80 900,100 L900,200 Z" />
            <path d="M880,200 L880,130 C900,110 920,90 940,110 C960,90 980,70 1000,90 L1000,200 Z" />
            <path d="M980,200 L980,145 C1000,125 1020,105 1040,125 C1060,105 1080,85 1100,105 L1100,200 Z" />
            <path d="M1080,200 L1080,135 C1100,115 1120,95 1140,115 C1160,95 1180,75 1200,95 L1200,200 Z" />
            <path d="M1180,200 L1180,140 C1200,120 1220,100 1240,120 C1260,100 1280,80 1300,100 L1300,200 Z" />
            <path d="M1280,200 L1280,130 C1300,110 1320,90 1340,110 C1360,90 1380,70 1400,90 L1400,200 Z" />
            <path d="M1380,200 L1380,145 C1400,125 1420,105 1440,125 L1460,200 Z" />
          </g>
        </svg>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-serif font-semibold text-verdana-cream mb-4">
            Green Growth Challenges
          </h2>
          <p className="text-verdana-cream/70 text-lg max-w-2xl mx-auto">
            The path to sustainable manufacturing is blocked by systemic inefficiencies
          </p>
        </div>

        {/* Pain Point Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="bg-verdana-cream rounded-2xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-verdana-green/10 rounded-xl flex items-center justify-center mb-4">
                <point.icon className="w-6 h-6 text-verdana-green" />
              </div>
              <h3 className="text-verdana-dark font-semibold text-lg mb-2">
                {point.title}
              </h3>
              <p className="text-verdana-dark/70 text-sm leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GreenGrowthSection;
