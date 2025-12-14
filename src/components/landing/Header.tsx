import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = ["Features", "Docs", "Use Cases", "Integrations"];

  return (
    <header className="bg-verdana-dark sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-verdana-cream rounded-full flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-verdana-dark rounded-full" />
            </div>
            <span className="text-verdana-cream font-semibold text-lg">
              Verdana Protocol
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-verdana-cream/80 hover:text-verdana-cream transition-colors text-sm"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="ghost"
              className="text-verdana-cream hover:text-verdana-cream hover:bg-verdana-medium/30"
            >
              Sign In
            </Button>
            <Button className="bg-verdana-cream text-verdana-dark hover:bg-verdana-yellow">
              Get Started
            </Button>
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
                  className="text-verdana-cream hover:text-verdana-cream hover:bg-verdana-medium/30 justify-start"
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
