import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, MessageCircle, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Visit our store or reach out to us for any inquiries
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4" />
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <Card className="p-8 space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Our Location</h4>
                  <p className="text-muted-foreground">
                    Kothamangalam, KVB Bank Opposite<br />
                    P. Velur (TK), Namakkal (D.T)<br />
                    Tamil Nadu, 637 213
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                  <a
                    href="tel:+919189889549"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 91898 89549
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Business Hours</h4>
                  <p className="text-muted-foreground">
                    Open daily for consultations<br />
                    Contact us for appointment
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 space-y-3">
              <Button
                variant="whatsapp"
                size="lg"
                asChild
                className="w-full"
              >
                <a
                  href="https://wa.me/919189889549"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                asChild
                className="w-full"
              >
                <a href="tel:+919189889549">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </Button>
            </div>
          </Card>

          {/* Delivery & Collection Info */}
          <Card className="p-8 space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-6">Delivery & Collection</h3>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-lg border-l-4 border-primary">
                <h4 className="font-semibold text-foreground mb-2 text-lg">Delivery Available</h4>
                <p className="text-muted-foreground">
                  We offer delivery services for all our sarees. Contact us to discuss 
                  delivery options and arrangements for your location.
                </p>
              </div>

              <div className="bg-gradient-to-r from-secondary/10 to-accent/10 p-6 rounded-lg border-l-4 border-secondary">
                <h4 className="font-semibold text-foreground mb-2 text-lg">Visit Our Store</h4>
                <p className="text-muted-foreground">
                  You're welcome to visit our store and view our complete collection in person. 
                  Our staff will guide you through the selection process and help you choose 
                  the perfect saree.
                </p>
              </div>

              <div className="bg-muted/50 p-6 rounded-lg">
                <h4 className="font-semibold text-foreground mb-3">Why Visit Us?</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>View complete saree collections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Feel the fabric quality firsthand</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Personal consultation with our experts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Discuss custom design requirements</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>

        {/* Map Placeholder */}
        <div className="max-w-5xl mx-auto mt-8">
          <Card className="overflow-hidden">
            <div className="aspect-video bg-muted/50 flex items-center justify-center border-2 border-dashed border-border">
              <div className="text-center p-8">
                <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Map integration ready<br />
                  <span className="text-sm">Google Maps embed can be added here</span>
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
