import React from "react";
import { Facebook, Instagram, Twitter, Mail, MapPin } from "lucide-react";

const Footer: React.FC = () => {
  const scrollToSection = (id: string, e?: React.MouseEvent<HTMLAnchorElement>) => {
    if (e) e.preventDefault();
    // try section id first, then a heading id like "about-heading"
    const target =
      document.getElementById(id) ||
      document.getElementById(`${id}-heading`) ||
      document.querySelector(`[aria-labelledby="${id}-heading"]`);

    if (target) {
      (target as HTMLElement).scrollIntoView({ behavior: "smooth", block: "start" });
      // update URL hash without jumping
      try {
        history.replaceState(null, "", `#${id}`);
      } catch {
        /* ignore in unsupported env */
      }
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground py-8 sm:py-12 relative overflow-hidden">
      <div className="container mx-auto px-4 pt-12 sm:pt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* About */}
          <div className="text-center sm:text-left">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-secondary mb-3 sm:mb-4">
              Odyssey 2026
            </h3>
            <p className="text-primary-foreground/80 mb-3 sm:mb-4 font-body text-sm sm:text-base">
              The grand cultural festival of IIIT Delhi celebrating creativity, culture, and camaraderie.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="font-display text-lg sm:text-xl font-bold text-secondary mb-3 sm:mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 font-body text-sm sm:text-base">
              <li>
                <a
                  href="#about"
                  onClick={(e) => scrollToSection("about", e)}
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#events"
                  onClick={(e) => scrollToSection("events", e)}
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="#register"
                  onClick={(e) => scrollToSection("register", e)}
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  Register
                </a>
              </li>
              <li>
                <a
                  href="#sponsors"
                  onClick={(e) => scrollToSection("sponsors", e)}
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  Sponsors
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center sm:text-left sm:col-span-2 md:col-span-1">
            <h3 className="font-display text-lg sm:text-xl font-bold text-secondary mb-3 sm:mb-4">
              Connect With Us
            </h3>
            <div className="space-y-3 mb-4">
              <div className="flex items-center justify-center sm:justify-start gap-2 text-primary-foreground/80">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="font-body text-sm sm:text-base">odyssey@iiitd.ac.in</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-2 text-primary-foreground/80">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="font-body text-sm sm:text-base">IIIT Delhi</span>
              </div>
            </div>
            <div className="flex gap-3 sm:gap-4 justify-center sm:justify-start">
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-4 sm:pt-6 text-center">
          <p className="text-primary-foreground/60 font-body text-sm">
            © 2026 Odyssey - IIIT Delhi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
