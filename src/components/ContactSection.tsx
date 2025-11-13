import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, MessageCircle, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/useLanguage";
import ExternalLink from "@/components/ExternalLink";

// Map preview image
const mapPreviewUrl = new URL("../../assets/map_preview.png", import.meta.url).href;

const ContactSection = () => {
  const { isTamil, toggleLanguage } = useLanguage();

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            {isTamil ? "தொடர்பில் இருங்கள்" : "Get In Touch"}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            {isTamil
              ? "எங்கள் கடைக்கு வரவும் அல்லது எந்தவொரு விசாரணைக்கும் எங்களை அணுகவும்"
              : "Visit our store or reach out to us for any inquiries"}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4" />
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Contact Information */}
          <Card className="p-6 sm:p-8 space-y-5 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">
              {isTamil ? "தொடர்பு தகவல்" : "Contact Information"}
            </h3>

            <div className="space-y-5 sm:space-y-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">
                    {isTamil ? "எங்கள் இடம்" : "Our Location"}
                  </h4>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    Kothamangalam, KVB Bank Opposite<br />
                    P. Velur (TK), Namakkal (D.T)<br />
                    Tamil Nadu, 637 213
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">
                    {isTamil ? "தொலைபேசி" : "Phone"}
                  </h4>
                  <a
                    href="tel:+918489889549"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base"
                  >
                    +91 84898 89549
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">
                    {isTamil ? "வணிக நேரம்" : "Business Hours"}
                  </h4>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    {isTamil
                      ? "மாண்புமிகு ஆலோசனைக்கு தினமும் திறந்திருக்கும்\nநியமனத்திற்காக எங்களை அணுகவும்"
                      : "Open daily for consultations\nContact us for appointment"}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 sm:pt-6 space-y-3">
              <Button
                variant="whatsapp"
                size="lg"
                asChild
                className="w-full min-h-[48px]"
              >
                <ExternalLink href="https://wa.me/918489889549" blank className="text-sm sm:text-base">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  {isTamil ? "WhatsApp இல் உரையாட" : "Chat on WhatsApp"}
                </ExternalLink>
              </Button>

              <Button
                variant="outline"
                size="lg"
                asChild
                className="w-full min-h-[48px]"
              >
                <a href="tel:+918489889549" className="text-sm sm:text-base">
                  <Phone className="mr-2 h-5 w-5" />
                  {isTamil ? "இப்போது அழைக்க" : "Call Now"}
                </a>
              </Button>
            </div>
          </Card>

          {/* Delivery & Collection Info */}
          <Card className="p-6 sm:p-8 space-y-5 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">
              {isTamil ? "விநியோகம் மற்றும் வருகை" : "Delivery & Collection"}
            </h3>

            <div className="space-y-5 sm:space-y-6">
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-4 sm:p-6 rounded-lg border-l-4 border-primary">
                <h4 className="font-semibold text-foreground mb-2 text-base sm:text-lg">
                  {isTamil ? "விநியோகம் உள்ளது" : "Delivery Available"}
                </h4>
                <p className="text-muted-foreground text-sm sm:text-base">
                  {isTamil
                    ? "எங்கள் அனைத்து சேலைகளுக்கும் விநியோகம் வழங்குகிறோம். உங்கள் இடத்திற்கான விநியோக விருப்பங்கள் மற்றும் ஏற்பாடுகளை விவாதிக்க எங்களை தொடர்பு கொள்ளவும்."
                    : "We offer delivery services for all our sarees. Contact us to discuss delivery options and arrangements for your location."}
                </p>
              </div>

              <div className="bg-gradient-to-r from-secondary/10 to-accent/10 p-4 sm:p-6 rounded-lg border-l-4 border-secondary">
                <h4 className="font-semibold text-foreground mb-2 text-base sm:text-lg">
                  {isTamil ? "எங்கள் கடைக்கு வருகை" : "Visit Our Store"}
                </h4>
                <p className="text-muted-foreground text-sm sm:text-base">
                  {isTamil
                    ? "நீங்கள் எங்கள் கடைக்கு வந்து முழுமையான சேலைகளை நேரில் காணலாம். எங்கள் ஊழியர்கள் தேர்வு செயல்முறையில் உங்களுக்கு வழிகாட்டி உதவுவார்கள்."
                    : "You're welcome to visit our store and view our complete collection in person. Our staff will guide you through the selection process and help you choose the perfect saree."}
                </p>
              </div>

              <div className="bg-muted/50 p-4 sm:p-6 rounded-lg">
                <h4 className="font-semibold text-foreground mb-3 text-sm sm:text-base">
                  {isTamil ? "எங்களை எதற்காக பார்க்க வேண்டும்?" : "Why Visit Us?"}
                </h4>
                <ul className="space-y-2 text-muted-foreground text-sm sm:text-base">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    {isTamil ? "அனைத்து சேலைக் காட்சிகளையும் காண" : "View complete saree collections"}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    {isTamil ? "துணியின் தரத்தை நேரடியாக அனுபவிக்க" : "Feel the fabric quality firsthand"}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    {isTamil ? "நிபுணர்களிடமிருந்து தனிப்பட்ட ஆலோசனை பெற" : "Personal consultation with our experts"}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    {isTamil ? "உங்கள் விருப்பத்தின்படி தனிப்பட்ட வடிவமைப்புகளை விவரமாகப் பேச" : "Discuss custom design requirements"}
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>

        {/* Map */}
        <div className="max-w-5xl mx-auto mt-6 sm:mt-8">
          <Card className="overflow-hidden">
              <ExternalLink
                href="https://maps.app.goo.gl/QwVJqZwCKGSe7utU7"
                blank
                aria-label={isTamil ? "Google Maps இல் இடத்தை திறக்க" : "Open location in Google Maps"}
                className="block"
              >
              <div className="aspect-video relative overflow-hidden bg-muted/50 border-2 border-dashed border-border hover:opacity-90 transition-opacity">
                <img
                  src={mapPreviewUrl}
                  alt={isTamil ? "எங்கள் கடை இடத்தின் வரைபட முன்னோட்டம்" : "Map preview: our store location"}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="bg-black/30 text-white rounded px-3 py-2 text-sm sm:text-base flex items-center">
                    <MapPin className="inline-block mr-2 -mt-1" />
                    {isTamil ? "Google Maps இல் திறக்க" : "Open in Google Maps"}
                  </div>
                </div>
              </div>
            </ExternalLink>
          </Card>
        </div>

        {/* Language Toggle */}
        <div className="text-center mt-6">

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
