import { Facebook, Instagram, Twitter, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 relative overflow-hidden">
      {/* Decorative wave */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" className="w-full h-auto">
          <path 
            fill="hsl(var(--background))" 
            d="M0,32L48,34.7C96,37,192,43,288,42.7C384,43,480,37,576,34.7C672,32,768,32,864,34.7C960,37,1056,43,1152,42.7C1248,43,1344,37,1392,34.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-display text-2xl font-bold text-secondary mb-4">
              Odyssey 2026
            </h3>
            <p className="text-primary-foreground/80 mb-4 font-body">
              The grand cultural festival of IIIT Delhi celebrating creativity, culture, and camaraderie.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-xl font-bold text-secondary mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 font-body">
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#events" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Events
                </a>
              </li>
              <li>
                <a href="#register" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Register
                </a>
              </li>
              <li>
                <a href="#sponsors" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Sponsors
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-xl font-bold text-secondary mb-4">
              Connect With Us
            </h3>
            <div className="space-y-3 mb-4">
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <Mail className="w-5 h-5" />
                <span className="font-body">odyssey@iiitd.ac.in</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <MapPin className="w-5 h-5" />
                <span className="font-body">IIIT Delhi</span>
              </div>
            </div>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-6 text-center">
          <p className="text-primary-foreground/60 font-body text-sm">
            © 2026 Odyssey - IIIT Delhi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
