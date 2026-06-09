import { Github, Linkedin, Twitter } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const DiscordIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.445.865-.608 1.25-1.845-.276-3.68-.276-5.487 0-.164-.393-.406-.874-.618-1.25a.077.077 0 0 0-.078-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.028C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.056c2.053 1.508 4.041 2.423 5.993 3.029a.078.078 0 0 0 .084-.028c.462-.63.873-1.295 1.226-1.994a.076.076 0 0 0-.042-.106c-.653-.248-1.274-.55-1.872-.892a.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 0 1 .078-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .079.01c.12.099.246.198.373.292a.077.077 0 0 1-.007.128 12.299 12.299 0 0 1-1.873.891.077.077 0 0 0-.041.107c.36.698.772 1.363 1.225 1.993a.076.076 0 0 0 .084.028c1.961-.607 3.95-1.522 6.002-3.029a.077.077 0 0 0 .031-.055c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.029ZM8.02 15.33c-1.183 0-2.157-1.086-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.211 0 2.176 1.095 2.157 2.419 0 1.333-.955 2.419-2.157 2.419Zm7.975 0c-1.183 0-2.157-1.086-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.211 0 2.176 1.095 2.157 2.419 0 1.333-.946 2.419-2.157 2.419Z" />
  </svg>
);

const socials: { label: string; href: string; Icon: LucideIcon | typeof DiscordIcon }[] = [
  { label: "Twitter", href: "#", Icon: Twitter },
  { label: "LinkedIn", href: "#", Icon: Linkedin },
  { label: "Discord", href: "#", Icon: DiscordIcon },
  { label: "GitHub", href: "#", Icon: Github },
];

const footerLinks: Record<string, { label: string; href: string }[]> = {
  Produk: [
    { label: "Fitur", href: "#fitur" },
    { label: "Pricing", href: "#pricing" },
    { label: "Changelog", href: "#" },
  ],
  Regulasi: [
    { label: "IPCC 2006", href: "#regulasi" },
    { label: "Perpres 98/2021", href: "#regulasi" },
    { label: "KLHK SIGN-SMART", href: "https://signsmart.menlhk.go.id" },
    { label: "GHG Protocol", href: "#regulasi" },
  ],
  Perusahaan: [
    { label: "Tentang Kami", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Karir", href: "#" },
    { label: "Press Kit", href: "#" },
  ],
  Dukungan: [
    { label: "FAQ", href: "#faq" },
    { label: "Dokumentasi", href: "#" },
    { label: "Status", href: "#" },
    { label: "Kontak", href: "#" },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-black font-inter">
      <div className="px-4 sm:px-6 lg:px-10 xl:px-16 pt-16 lg:pt-20 pb-10">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-14 lg:gap-20 mb-14 lg:mb-16">
          <div className="max-w-xs">
            <a href="/" className="inline-flex items-center gap-3 mb-5 group">
              <img
                src="/verdana-logo.png"
                alt="Verdana"
                className="w-10 h-10 rounded-lg object-contain"
              />
              <span className="text-lg font-semibold text-white group-hover:text-[var(--nav-accent)] transition-colors">
                Verdana
              </span>
            </a>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Platform ESG & Carbon Monitoring untuk industri Indonesia.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-10 flex-1 lg:max-w-2xl lg:ml-auto">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[var(--nav-accent)] mb-4">
                  {category}
                </p>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-neutral-400 hover:text-white transition-colors"
                        {...(link.href.startsWith("http")
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
          <p className="text-xs text-neutral-600">
            © 2026 Verdana Protocol. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="text-neutral-500 hover:text-white transition-colors"
              >
                <Icon className="w-[18px] h-[18px]" strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
