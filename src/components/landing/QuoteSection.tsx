const QuoteSection = () => {
  return (
    <section className="relative bg-verdana-forest py-20 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg
          viewBox="0 0 1440 400"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Abstract forest background pattern */}
          <g fill="hsl(150 45% 30%)">
            <circle cx="100" cy="100" r="80" />
            <circle cx="300" cy="150" r="100" />
            <circle cx="500" cy="80" r="60" />
            <circle cx="700" cy="200" r="120" />
            <circle cx="900" cy="100" r="90" />
            <circle cx="1100" cy="180" r="110" />
            <circle cx="1300" cy="120" r="70" />
            <circle cx="200" cy="300" r="100" />
            <circle cx="400" cy="350" r="80" />
            <circle cx="600" cy="320" r="90" />
            <circle cx="800" cy="380" r="70" />
            <circle cx="1000" cy="340" r="100" />
            <circle cx="1200" cy="300" r="85" />
            <circle cx="1400" cy="360" r="95" />
          </g>
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Decorative Quote Marks */}
          <div className="flex justify-center mb-6">
            <span className="text-verdana-yellow text-8xl lg:text-9xl font-serif leading-none opacity-50">
              "
            </span>
          </div>

          <blockquote className="text-2xl lg:text-3xl xl:text-4xl font-serif italic text-verdana-cream leading-relaxed mb-8">
            We believe that sustainable manufacturing shouldn't be a competitive disadvantage. 
            It should be the foundation of modern industrial excellence.
          </blockquote>

          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 bg-verdana-cream/20 rounded-full" />
            <div className="text-left">
              <div className="text-verdana-cream font-medium">Sarah Chen</div>
              <div className="text-verdana-cream/60 text-sm">CEO, Verdana Protocol</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
