import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";
import heroWeaving from "@/assets/hero-weaving.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroWeaving}
          alt="Traditional hand loom weaving in progress"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 z-10 relative">
        <div className="max-w-3xl">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
              Hand Loom Weaving Saree
            </h1>
            
            <p className="text-2xl md:text-3xl text-primary font-semibold italic">
              ஆர்டரின் பெயரில் நைத்துறப்படும்
            </p>
            
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              We weave sarees exactly as per your wish design.
            </p>

            <p className="text-lg text-foreground/80 max-w-2xl">
              Specializing in custom hand loom sarees with traditional craftsmanship. 
              Every thread tells a story, every pattern reflects your vision.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                variant="whatsapp"
                size="lg"
                asChild
              >
                <a
                  href="https://wa.me/919189889549"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Contact via WhatsApp
                </a>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                asChild
              >
                <a href="tel:+919189889549" className="text-lg">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </Button>
            </div>

            <div className="pt-6 text-sm text-muted-foreground">
              <p>📍 Kothamangalam, KVB Bank Opposite</p>
              <p>P. Velur (TK), Namakkal (D.T), 637 213</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
