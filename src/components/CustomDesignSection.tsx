
import { Card } from "@/components/ui/card";
import { MessageCircle, Lightbulb, Scissors } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

import { useLanguage } from "@/contexts/useLanguage";
import ExternalLink from "@/components/ExternalLink";

const CustomDesignSection = () => {
   const { isTamil, toggleLanguage } = useLanguage();

  const steps = [
    {
      number: "01",
      icon: MessageCircle,
      title: { en: "Describe Your Design", ta: "உங்கள் வடிவமைப்பை விவரிக்கவும்" },
      description: {
        en: "Share your vision with us via WhatsApp. Send us design ideas, patterns, or inspirations you have in mind.",
        ta: "WhatsApp மூலம் உங்கள் கற்பனையை எங்களுடன் பகிரவும். உங்கள் வடிவமைப்பு யோசனைகள், வடிவங்கள், அல்லது ஊக்கங்கள் அனுப்பவும்.",
      },
    },
    {
      number: "02",
      icon: Lightbulb,
      title: { en: "We Note & Advise", ta: "நாங்கள் பதிவு செய்து ஆலோசனை வழங்குகிறோம்" },
      description: {
        en: "Our team records your design preferences and provides expert suggestions on thread quality, patterns, and fabric choices.",
        ta: "நமது குழு உங்கள் வடிவமைப்பு விருப்பங்களை பதிவு செய்து, நூல் தரம், வடிவங்கள் மற்றும் துணி தேர்வுகள் குறித்து நிபுண ஆலோசனைகளை வழங்குகிறது.",
      },
    },
    {
      number: "03",
      icon: Scissors,
      title: { en: "Weaving & Delivery", ta: "நெய்தல் மற்றும் விநியோகம்" },
      description: {
        en: "Your saree is meticulously woven as per your design. We explain the pricing and arrange convenient delivery.",
        ta: "உங்கள் சேலை உங்கள் வடிவமைப்பின் படி நுட்பமாக நெய்யப்படுகிறது. நாங்கள் விலையை பற்றி விளக்கி, வசதியான விநியோகத்தை ஏற்பாடு செய்கிறோம்.",
      },
    },
  ];

  return (
    <section id="custom-design" className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            {isTamil ? "சேவை வடிவமைப்பு செயல்முறை" : "Custom Design Process"}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            {isTamil
              ? "உங்கள் கற்பனையில் இருந்து உருவாக்க வரை - மூன்று எளிய படிகள்"
              : "From your imagination to reality - in three simple steps"}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4" />
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card
                  key={index}
                  className="p-6 sm:p-8 text-center space-y-3 sm:space-y-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 text-6xl sm:text-8xl font-bold text-primary/5 group-hover:text-primary/10 transition-colors">
                    {step.number}
                  </div>

                  <div className="relative">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2 sm:mb-3">
                      {isTamil ? step.title.ta : step.title.en}
                    </h3>

                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {isTamil ? step.description.ta : step.description.en}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Call to Action */}
          <Card className="p-6 sm:p-8 md:p-12 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border-2 border-primary/20">
            <div className="text-center space-y-4 sm:space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                {isTamil
                  ? "உங்கள் கனவு சேலை வடிவமைக்க தயாரா?"
                  : "Ready to Create Your Dream Saree?"}
              </h3>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
                {isTamil
                  ? "இன்றே உங்கள் தனிப்பட்ட வடிவமைப்பைத் தொடங்குங்கள். பாரம்பரிய கைத்தறி நெசவாளர்களின் திறமையை கொண்டு, உங்கள் கனவுகளை நனவாக்க நமது குழு தயாராக உள்ளது."
                  : "Start your custom design journey today. Our team is ready to bring your vision to life with traditional craftsmanship and modern expertise."}
              </p>
              <Button
                variant="gold"
                size="lg"
                asChild
                className="text-base sm:text-lg min-h-[48px] w-full sm:w-auto"
              >
                <ExternalLink href="https://wa.me/918489889549" blank>
                  <MessageCircle className="mr-2 h-5 w-5" />
                  {isTamil ? "தனிப்பட்ட ஆர்டர் தொடங்கவும்" : "Start Custom Order"}
                </ExternalLink>
              </Button>
            </div>
          </Card>

          {/* Language Toggle */}
          <div className="text-center mt-6">
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomDesignSection;
