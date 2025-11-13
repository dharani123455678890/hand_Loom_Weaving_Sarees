import React, { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/useLanguage";
import { Button } from "@/components/ui/button";
import ExternalLink from "@/components/ExternalLink";
import { MessageCircle, Phone } from "lucide-react";

// runtime-safe URLs for hero backgrounds
const heroA = new URL("../../src/assets/hero-weaving.jpg", import.meta.url).href;
const heroB = new URL("../../src/assets/IMG-20251112-WA0025.jpg", import.meta.url).href;

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  // read global language toggle
  const { isTamil, toggleLanguage } = useLanguage();

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % 2), 5000);
    return () => clearInterval(id);
  }, []);

  const backgrounds = [heroA, heroB];

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden"
    >
      {/* Background crossfade */}
      <div className="absolute inset-0 z-0">
        {backgrounds.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={
              i === 0
                ? "Traditional hand loom weaving in progress"
                : "Folding process"
            }
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${
              index === i ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70 md:from-background/95 md:via-background/80 md:to-background/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 z-10 relative">
        <div className="max-w-3xl">
          <div className="space-y-4 sm:space-y-6 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-foreground leading-tight">
              {isTamil ? "Hand Loom Weaving Sarees" : "Hand Loom Weaving Sarees"}
            </h1>

            <p className="text-xl sm:text-2xl md:text-3xl text-primary font-semibold italic">
              {isTamil ? "ஆர்டரின் பெயரில் நெய்த்துறப்படும்" : "Woven in the name of your order"}
            </p>

            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-light">
              {isTamil
                ? "உங்கள் விருப்பமான வடிவமைப்பில் நாங்கள் சேலை நெய்து தருகிறோம்."
                : "We weave sarees exactly as per your wish design."}
            </p>

            <p className="text-base sm:text-lg text-foreground/80 max-w-2xl">
              {isTamil
                ? "பாரம்பரியத்துடன் உருவாக்கப்படும் தனிப்பட்ட கைத்தறி சேலைகள். ஒவ்வொரு நூலும் ஒரு கதையைக் கூறும்; ஒவ்வொரு வடிவமும் உங்கள் கனவைக் பிரதிபலிக்கும்."
                : "Specializing in custom hand loom sarees with traditional craftsmanship. Every thread tells a story, every pattern reflects your vision."}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
              <Button
                variant="whatsapp"
                size="lg"
                asChild
                className="w-full sm:w-auto min-h-[48px]"
              >
                <ExternalLink href="https://wa.me/918489889549" blank className="text-base sm:text-lg">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  {isTamil ? "WhatsApp மூலம் தொடர்பு கொள்ள" : "Contact via WhatsApp"}
                </ExternalLink>
              </Button>

              <Button
                variant="outline"
                size="lg"
                asChild
                className="w-full sm:w-auto min-h-[48px]"
              >
                <a href="tel:+918489889549" className="text-base sm:text-lg">
                  <Phone className="mr-2 h-5 w-5" />
                  {isTamil ? "Call Now" : "Call Now"}
                </a>
              </Button>
            </div>

            <div className="pt-4 sm:pt-6 text-sm sm:text-base text-muted-foreground">
              {isTamil ? (
                <>
                  <p>📍 கொத்தமங்கலம், கே.வி.பி வங்கி எதிரில்</p>
                  <p className="text-xs sm:text-sm">
                    பி. வேலூர் (தாலுகா), நாமக்கல் (மாவட்டம்) – 637 213
                  </p>
                </>
              ) : (
                <>
                  <p>📍 Kothamangalam, KVB Bank Opposite</p>
                  <p className="text-xs sm:text-sm">
                    P. Velur (TK), Namakkal (D.T), 637 213
                  </p>
                </>
              )}
            </div>

            {/* Toggle Button (Optional UI to switch language) */}
            <div className="pt-6">

            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
