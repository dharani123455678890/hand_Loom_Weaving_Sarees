import { MapPin, Phone, MessageCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/useLanguage";
import ExternalLink from "@/components/ExternalLink";

const AboutSection = () => {
  const { isTamil, toggleLanguage } = useLanguage();

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              {isTamil ? "எங்களை பற்றி" : "About Us"}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
          </div>

          {/* Card Content */}
          <Card className="p-6 sm:p-8 md:p-12 shadow-lg">
            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-foreground/90 leading-relaxed">
                {isTamil ? (
                  <>
                    <span className="font-semibold text-primary">Hand Loom Weaving Saree</span> - 
                    விக்னேஸ்வரன் தலைமையில் நாங்கள் உங்கள் விருப்பத்திற்கேற்ப சேலைகளை வடிவமைத்து நெய்கிறோம்.
                  </>
                ) : (
                  <>
                    Welcome to <span className="font-semibold text-primary">Hand Loom Weaving Saree</span>, 
                    where tradition meets craftsmanship. Led by Vigneshwaran and our dedicated team, 
                    we specialize in weaving sarees exactly as per your design orders.
                  </>
                )}
              </p>

              <p className="text-base sm:text-lg text-foreground/90 leading-relaxed">
                {isTamil ? (
                  <>
                    உங்கள் கனவுகளை நிஜமாக்கும் பாரம்பரிய நெய்தல் முறைகளில் நாங்கள் சிறந்து விளங்குகிறோம். 
                    சரியான saree design, fabric, மற்றும் pattern தேர்வு செய்ய வழிகாட்டுகிறோம்.
                  </>
                ) : (
                  <>
                    Our expertise lies in understanding your vision and bringing it to life through 
                    traditional hand loom techniques. We provide comprehensive guidance in choosing 
                    the perfect saree design, fabric, and patterns that match your preferences.
                  </>
                )}
              </p>

              <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-4 sm:p-6 rounded-lg border-l-4 border-primary">
                <p className="text-base sm:text-lg font-medium text-foreground italic">
                  {isTamil
                    ? "“நாங்கள் நெய்யும் ஒவ்வொரு சேலையும், உங்கள் கனவில் இருக்கும் சேலையை நினைவாக மாற்றி கொடுப்பதே ஆகும்.”"
                    : "“Every saree we weave carries the essence of your dreams, woven with care and precision.”"}
                </p>
              </div>

              {/* Contact and Location Section */}
              <div className="pt-4 sm:pt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground text-sm sm:text-base">
                      {isTamil ? "எங்கள் முகவரி" : "Our Location"}
                    </p>
                    <p className="text-muted-foreground text-sm sm:text-base">
                      {isTamil ? (
                        <>
                          கொத்தமங்கலம், கே.வி.பி வங்கி எதிரில் <br />
                          பி. வேலூர் (தாலுகா), நாமக்கல் (மாவட்டம்) – 637 213
                        </>
                      ) : (
                        <>
                          Kothamangalam, KVB Bank Opposite <br />
                          P. Velur (TK), Namakkal (D.T), 637 213
                        </>
                      )}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button variant="whatsapp" asChild className="flex-1 min-h-[48px]">
                    <ExternalLink href="https://wa.me/918489889549" blank className="text-sm sm:text-base">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      {isTamil ? "WhatsApp: +91 84898 89549" : "WhatsApp: +91 84898 89549"}
                    </ExternalLink>
                  </Button>

                  <Button variant="outline" asChild className="flex-1 min-h-[48px]">
                    <a href="tel:+918489889549" className="text-sm sm:text-base">
                      <Phone className="mr-2 h-4 w-4" />
                      {isTamil ? "Call Us" : "Call Us"}
                    </a>
                  </Button>
                </div>
              </div>

              {/* Toggle Button */}
              <div className="pt-6 text-center">

              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
