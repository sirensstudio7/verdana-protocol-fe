const QuoteSection = () => {
  return (
    <section className="relative bg-verdana-forest py-20 lg:py-32 overflow-hidden" style={{ backgroundImage: 'url(/webp/impactfull.webp)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '800px' }}>
      {/* Top Gradient */}
      <div className="absolute top-0 left-0 right-0 w-full h-[200px] pointer-events-none z-0" style={{ background: 'linear-gradient(to bottom, hsl(150, 45%, 18%), transparent)' }}></div>
      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 w-full h-[300px] pointer-events-none z-0" style={{ background: 'linear-gradient(to top, hsl(150, 40%, 15%) 0%, hsl(150, 40%, 15%) 25%, rgba(23, 54, 38, 0.8) 50%, rgba(23, 54, 38, 0.4) 75%, rgba(23, 54, 38, 0) 100%)' }}></div>
      <div className="container mx-auto px-4 lg:px-8 relative z-10 h-full flex items-center justify-center">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title */}
          <h2 className="text-verdana-cream text-center" style={{ fontSize: '20px', color: '#DFF390', marginBottom: '16px' }}>
            Impactfull Things
          </h2>

          <blockquote className="text-2xl lg:text-3xl xl:text-4xl font-serif italic text-verdana-cream leading-relaxed mb-8">
            We believe that sustainable manufacturing shouldn't be a competitive disadvantage. 
            It should be the foundation of modern industrial excellence.
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
