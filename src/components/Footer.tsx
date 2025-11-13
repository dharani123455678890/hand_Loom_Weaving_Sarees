import { MapPin, Phone, MessageCircle } from "lucide-react";
import ExternalLink from "@/components/ExternalLink";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground/95 text-background py-10 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Brand */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold">Hand Loom Weaving Sarees</h3>
            <p className="text-base sm:text-lg italic opacity-90">ஆர்டரின் பெயரில் நைத்துறப்படும்</p>
            <p className="text-xs sm:text-sm opacity-80">
              Traditional hand loom sarees crafted with precision and care. 
              Every thread tells a story.
            </p>
          </div>

          {/* Quick Contact */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-lg sm:text-xl font-semibold">Quick Contact</h4>
            <div className="space-y-2 sm:space-y-3">
              <ExternalLink
                href="https://wa.me/918489889549"
                blank
                className="flex items-center gap-2 hover:opacity-80 transition-opacity text-sm sm:text-base"
              >
                <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                <span>+91 84898 89549 (WhatsApp)</span>
              </ExternalLink>
              <a
                href="tel:+918489889549"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity text-sm sm:text-base"
              >
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                <span>+91 84898 89549</span>
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-lg sm:text-xl font-semibold">Visit Us</h4>
            <div className="flex items-start gap-2">
              <MapPin className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 mt-1" />
              <address className="not-italic opacity-90 text-sm sm:text-base">
                Kothamangalam, KVB Bank Opposite<br />
                P. Velur (TK), Namakkal (D.T)<br />
                Tamil Nadu, 637 213
              </address>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-background/20">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-center sm:text-left">
            <p className="text-xs sm:text-sm opacity-80">
              © {currentYear} Hand Loom Weaving Saree. All rights reserved.
            </p>
            <p className="text-xs sm:text-sm opacity-80">
              Handcrafted with tradition and care
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
