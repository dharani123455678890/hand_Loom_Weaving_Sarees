import { MapPin, Phone, MessageCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About Us
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
          </div>

          <Card className="p-8 md:p-12 shadow-lg">
            <div className="space-y-6">
              <p className="text-lg text-foreground/90 leading-relaxed">
                Welcome to <span className="font-semibold text-primary">Hand Loom Weaving Saree</span>, 
                where tradition meets craftsmanship. Led by Vigneshwaran and our dedicated team, 
                we specialize in weaving sarees exactly as per your design orders.
              </p>

              <p className="text-lg text-foreground/90 leading-relaxed">
                Our expertise lies in understanding your vision and bringing it to life through 
                traditional hand loom techniques. We provide comprehensive guidance in choosing 
                the perfect saree design, fabric, and patterns that match your preferences.
              </p>

              <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-lg border-l-4 border-primary">
                <p className="text-lg font-medium text-foreground italic">
                  "Every saree we weave carries the essence of your dreams, woven with care and precision."
                </p>
              </div>

              <div className="pt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Our Location</p>
                    <p className="text-muted-foreground">
                      Kothamangalam, KVB Bank Opposite<br />
                      P. Velur (TK), Namakkal (D.T), 637 213
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button
                    variant="whatsapp"
                    asChild
                    className="flex-1"
                  >
                    <a
                      href="https://wa.me/919189889549"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      WhatsApp: +91 91898 89549
                    </a>
                  </Button>
                  
                  <Button
                    variant="outline"
                    asChild
                    className="flex-1"
                  >
                    <a href="tel:+919189889549">
                      <Phone className="mr-2 h-4 w-4" />
                      Call Us
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
