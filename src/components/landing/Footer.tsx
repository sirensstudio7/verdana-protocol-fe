const Footer = () => {
  const footerLinks = {
    Product: ["Features", "Pricing", "Documentation", "API Reference"],
    Company: ["About", "Careers", "Blog", "Press Kit"],
    Resources: ["Community", "Partners", "Support", "Status"],
    Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  };

  return (
    <footer className="bg-verdana-dark border-t border-verdana-medium/30 py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-verdana-cream rounded-full flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-verdana-dark rounded-full" />
              </div>
              <span className="text-verdana-cream font-semibold text-lg">
                Verdana Protocol
              </span>
            </div>
            <p className="text-verdana-cream/60 text-sm leading-relaxed">
              The blockchain infrastructure for sustainable manufacturing verification and compliance.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-verdana-cream font-medium mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-verdana-cream/60 hover:text-verdana-cream text-sm transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-verdana-medium/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-verdana-cream/50 text-sm">
            © 2024 Verdana Protocol. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-verdana-cream/50 hover:text-verdana-cream text-sm transition-colors">
              Twitter
            </a>
            <a href="#" className="text-verdana-cream/50 hover:text-verdana-cream text-sm transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-verdana-cream/50 hover:text-verdana-cream text-sm transition-colors">
              Discord
            </a>
            <a href="#" className="text-verdana-cream/50 hover:text-verdana-cream text-sm transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
