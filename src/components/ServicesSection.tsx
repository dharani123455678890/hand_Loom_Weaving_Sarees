import { Card } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

const ServicesSection = () => {
  const sareeTypes = [
    {
      tamil: "முகூர்த்தப்பட்டு",
      english: "Muhurtha Pattu",
      description: "Traditional ceremonial silk sarees perfect for auspicious occasions and weddings",
    },
    {
      tamil: "நிச்சயதார்த்தப்பட்டு",
      english: "Nischayathartha Pattu",
      description: "Elegant engagement sarees that symbolize new beginnings",
    },
    {
      tamil: "சாப்ட் பட்டு",
      english: "Soft Silk",
      description: "Luxurious soft silk sarees with comfortable drape and rich texture",
    },
    {
      tamil: "கிப்ட் பட்டு",
      english: "Gift Silk",
      description: "Premium sarees perfect for gifting on special occasions",
    },
    {
      tamil: "எம்போஸ் பட்டு",
      english: "Emboss Silk",
      description: "Unique embossed patterns that add depth and elegance to silk sarees",
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Saree Collections
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our exquisite range of handwoven silk sarees, each crafted with precision and care
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {sareeTypes.map((saree, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50 group"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                      {saree.tamil}
                    </h3>
                    <p className="text-lg font-semibold text-foreground">
                      {saree.english}
                    </p>
                  </div>
                  <Sparkles className="h-6 w-6 text-accent flex-shrink-0" />
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {saree.description}
                </p>

                <div className="pt-2">
                  <div className="h-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full" />
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground italic">
            All sarees can be customized according to your design preferences
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
