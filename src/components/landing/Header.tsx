import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Fitur", href: "#fitur" },
  { label: "Pricing", href: "#pricing" },
  { label: "Regulasi", href: "#regulasi" },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 64);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4">
      <div className="flex justify-center px-4">
        <nav
          className={`relative flex w-full items-center justify-between px-5 backdrop-blur-xl transition-all duration-500 ease-out rounded-full border border-white/10 bg-black/50 py-3 ${
            isScrolled ? "max-w-[900px]" : "max-w-[1280px]"
          }`}
        >
          <a href="/" className="shrink-0">
            <img
              src="/verdana-logo.png"
              alt="Verdana Protocol"
              width={40}
              height={40}
              className="h-10 w-10 rounded-lg object-contain"
            />
          </a>

          <div className="absolute left-1/2 hidden -translate-x-[55%] items-center gap-20 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="whitespace-nowrap rounded-full px-3 py-1.5 text-sm text-[var(--nav-text-muted)] transition-colors duration-200 hover:bg-[rgba(var(--foreground-rgb),0.05)] hover:text-[var(--nav-foreground)]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <a
              href="#pricing"
              className="hidden items-center whitespace-nowrap rounded-full bg-[var(--nav-accent)] h-10 px-5 text-sm font-bold text-[var(--nav-accent-contrast)] transition-colors duration-200 hover:bg-[var(--nav-accent-strong)] md:inline-flex"
            >
              Get Started
            </a>

            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-200 md:hidden"
              style={{
                borderColor: "rgba(var(--border-rgb), 0.6)",
                backgroundColor: "rgba(var(--surface-rgb), 0.42)",
                color: "var(--nav-foreground)",
              }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" strokeWidth={1.8} />}
            </button>
          </div>
        </nav>
      </div>

      {isMobileMenuOpen && (
        <div className="flex justify-center px-4 mt-2 md:hidden">
          <div className="w-full max-w-[1280px] rounded-full border border-white/10 bg-black/50 px-4 py-3 backdrop-blur-xl">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-full px-3 py-2 text-sm transition-colors duration-200 hover:bg-[rgba(var(--foreground-rgb),0.05)]"
                  style={{ color: "var(--nav-text-muted)" }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#pricing"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-full h-10 px-5 text-sm font-bold"
                style={{
                  backgroundColor: "var(--nav-accent)",
                  color: "var(--nav-accent-contrast)",
                }}
              >
                Get Started
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
