import { motion } from "framer-motion";
import { Facebook, Instagram, Youtube } from "lucide-react";

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#reservation", label: "Reservation" },
  { href: "#journey", label: "Our Journey" },
  { href: "#story", label: "Our Story" },
  { href: "#menu", label: "Menu" },
  { href: "#locations", label: "Locations" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/p/thehouseoffailures-61573999512651/", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/the.house.of.failures/", label: "Instagram" },
  { icon: Youtube, href: "https://www.youtube.com/@thefword_thf", label: "YouTube" },
];

export const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card/80 border-t border-border/50 pt-20 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <button onClick={() => scrollToSection("#home")} className="block mb-6">
              <h3 className="text-2xl font-serif font-bold text-foreground leading-tight">
                The<br />
                House of<br />
                <span className="text-primary">Failures</span>
              </h3>
            </button>
            <p className="text-muted-foreground mb-6">
              Where every bite is a brushstroke on the canvas of your soul.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Brands */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Our Brands</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("#cafe")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Kaffe Nasha
                </button>
              </li>
            </ul>
          </div>

          {/* Logos */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Experience Excellence</h4>
            <div className="flex gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                <span className="text-primary font-serif font-bold text-lg">THF</span>
              </div>
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                <span className="text-primary font-serif font-bold text-sm">KN</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} The House of Failures - By Failure's Kitchen. All Rights Reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Crafted with <span className="text-primary">♥</span> in Vadodara
          </p>
        </div>
      </div>
    </footer>
  );
};
