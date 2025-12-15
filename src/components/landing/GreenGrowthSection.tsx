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
      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24" style={{ backgroundImage: 'url(/arrow.png)', backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-serif font-semibold text-verdana-cream mb-4">
            Legacy System Are<br />
            Stifling Green Growth
          </h2>
          <p className="text-verdana-cream/70 text-lg max-w-2xl mx-auto">
            The path to sustainable manufacturing is blocked by systemic inefficiencies
          </p>
        </div>

        {/* Pain Point Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" style={{ height: '430px' }}>
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="rounded-2xl p-6 flex flex-col card-hover"
              style={{ 
                backgroundColor: '#DFF390',
                backgroundImage: 'url(/1-card.png)',
                backgroundSize: '64%',
                backgroundPosition: 'right center',
                backgroundRepeat: 'no-repeat',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                gap: '56px',
                transition: 'transform 0.3s ease'
              }}
            >
              <h3 className="text-verdana-dark font-semibold text-lg mb-2" style={{ fontSize: '32px', color: '#305E51', lineHeight: '120%' }}>
                {point.title.split(' ').slice(0, Math.ceil(point.title.split(' ').length / 2)).join(' ')}<br />
                {point.title.split(' ').slice(Math.ceil(point.title.split(' ').length / 2)).join(' ')}
              </h3>
              <p className="text-verdana-dark/70 text-sm leading-relaxed" style={{ fontSize: '16px', color: '#305E51' }}>
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
