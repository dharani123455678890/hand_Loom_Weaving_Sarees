import { Card } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/useLanguage";


const ServicesSection = () => {
   const { isTamil, toggleLanguage } = useLanguage();
  const sareeTypes = [
    {
      tamil: "முகூர்த்தப்பட்டு",
      english: "Muhurtha Pattu",
      description:
        "Traditional ceremonial silk sarees perfect for auspicious occasions and weddings",
    },
    {
      tamil: "நிச்சயதார்த்தப்பட்டு",
      english: "Nischayathartha Pattu",
      description: "Elegant engagement sarees that symbolize new beginnings",
    },
    {
      tamil: "சாப்ட் பட்டு",
      english: "Soft Silk",
      description:
        "Luxurious soft silk sarees with comfortable drape and rich texture",
    },
    {
      tamil: "கிப்ட் பட்டு",
      english: "Gift Silk",
      description: "Premium sarees perfect for gifting on special occasions",
    },
    {
      tamil: "எம்போஸ் பட்டு",
      english: "Emboss Silk",
      description:
        "Unique embossed patterns that add depth and elegance to silk sarees",
    },
  ];

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Saree Collections
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Discover our exquisite range of handwoven silk sarees, each crafted
            with precision and care
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {sareeTypes.map((saree, index) => (
            <Card
              key={index}
              className="p-5 sm:p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50 group"
            >
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                      {saree.tamil}
                    </h3>
                    <p className="text-base sm:text-lg font-semibold text-foreground">
                      {saree.english}
                    </p>
                  </div>
                  <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-accent flex-shrink-0" />
                </div>

                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {saree.description}
                </p>

                <div className="pt-2">
                  <div className="h-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full" />
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12 px-4">
          <p className="text-base sm:text-lg text-muted-foreground italic">
            {isTamil
              ? "எல்லா சேலைகளும் உங்கள் விருப்பத்திற்கேற்ப வடிவமைக்கப்படும்."
              : "All sarees can be customized according to your design preferences"}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;