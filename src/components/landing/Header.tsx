import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = ["Compliance", "Platform", "Integration"];

  return (
    <header className="bg-verdana-dark sticky top-0 z-50" style={{ boxSizing: 'content-box', boxShadow: 'none', background: 'linear-gradient(to bottom, rgba(5, 75, 98, 0.8), rgba(5, 75, 98, 0))' }}>
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-center flex-wrap w-full h-[100px] bg-transparent" style={{ color: 'rgba(23, 54, 38, 0)' }}>
        <div className="flex items-center justify-between w-full text-center h-[100px]" style={{ width: '100%', color: 'rgba(23, 54, 38, 0)' }}>
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img 
              src="/verdana-logo.png" 
              alt="Verdana Protocol Logo" 
              className="w-14 h-14"
            />
            <span className="text-verdana-cream font-semibold text-lg">
              Verdana Protocol
            </span>
          </div>

          {/* Desktop Navigation and CTA Buttons Wrapper */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Desktop Navigation */}
            <nav className="flex items-center gap-4 h-16 p-2 bg-[rgba(255,255,255,0.24)] rounded-[72px]" style={{ border: '2px solid rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
              {navLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="hover:opacity-80 transition-colors text-sm h-12 flex items-center px-4"
                  style={{ color: 'white' }}
                >
                  {link}
                </a>
              ))}
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                className="hover:bg-verdana-medium/30"
                style={{ borderRadius: '48px', border: '1px solid rgba(255, 255, 255, 0.1)', paddingLeft: '24px', paddingRight: '24px', backgroundColor: 'white', color: '#305E51' }}
              >
                Sign In
              </Button>
              <Button className="text-white hover:opacity-90" style={{ backgroundColor: '#305E51', paddingLeft: '24px', paddingRight: '24px', borderRadius: '48px' }}>
                Get Started
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-verdana-cream"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-verdana-medium/30">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-verdana-cream/80 hover:text-verdana-cream transition-colors"
                >
                  {link}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-4">
                <Button
                  variant="ghost"
                  className="hover:bg-verdana-medium/30 justify-start"
                  style={{ borderRadius: '48px', border: '1px solid rgba(255, 255, 255, 0.1)', paddingLeft: '24px', paddingRight: '24px', backgroundColor: 'white', color: '#305E51' }}
                >
                  Sign In
                </Button>
                <Button className="bg-verdana-cream text-verdana-dark hover:bg-verdana-yellow">
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
