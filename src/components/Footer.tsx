import { MapPin, Phone, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground/95 text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Hand Loom Weaving Saree</h3>
            <p className="text-lg italic opacity-90">ஆர்டரின் பெயரில் நைத்துறப்படும்</p>
            <p className="text-sm opacity-80">
              Traditional hand loom sarees crafted with precision and care. 
              Every thread tells a story.
            </p>
          </div>

          {/* Quick Contact */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Quick Contact</h4>
            <div className="space-y-3">
              <a
                href="https://wa.me/919189889549"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <MessageCircle className="h-5 w-5" />
                <span>+91 91898 89549 (WhatsApp)</span>
              </a>
              <a
                href="tel:+919189889549"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <Phone className="h-5 w-5" />
                <span>+91 91898 89549</span>
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Visit Us</h4>
            <div className="flex items-start gap-2">
              <MapPin className="h-5 w-5 flex-shrink-0 mt-1" />
              <address className="not-italic opacity-90">
                Kothamangalam, KVB Bank Opposite<br />
                P. Velur (TK), Namakkal (D.T)<br />
                Tamil Nadu, 637 213
              </address>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-80">
              © {currentYear} Hand Loom Weaving Saree. All rights reserved.
            </p>
            <p className="text-sm opacity-80">
              Handcrafted with tradition and care
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
