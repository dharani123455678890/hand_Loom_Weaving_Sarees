import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import sareeCollection from "@/assets/sarees-collection.jpg";

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Craftsmanship
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Witness the journey from thread to masterpiece
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4" />
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {/* Featured Collection Image */}
          <Card className="overflow-hidden shadow-xl">
            <img
              src={sareeCollection}
              alt="Collection of handwoven silk sarees"
              className="w-full h-auto object-cover"
            />
          </Card>

          {/* Portfolio Showcase Structure */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 space-y-4 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-primary">Weaving Phase</h3>
              <p className="text-muted-foreground">
                Watch the intricate process of hand loom weaving, where skilled artisans bring designs to life, 
                thread by thread, on traditional looms.
              </p>
              <div className="aspect-video bg-muted/50 rounded-lg flex items-center justify-center border-2 border-dashed border-border">
                <p className="text-muted-foreground text-center px-4">
                  Video content: Weaving process<br />
                  <span className="text-sm">(Structure ready for video integration)</span>
                </p>
              </div>
            </Card>

            <Card className="p-8 space-y-4 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-primary">Folding Phase</h3>
              <p className="text-muted-foreground">
                The delicate art of folding and handling completed sarees, ensuring the fabric maintains 
                its pristine quality and beautiful drape.
              </p>
              <div className="aspect-video bg-muted/50 rounded-lg flex items-center justify-center border-2 border-dashed border-border">
                <p className="text-muted-foreground text-center px-4">
                  Video content: Folding & handling<br />
                  <span className="text-sm">(Structure ready for video integration)</span>
                </p>
              </div>
            </Card>
          </div>

          {/* Final Showcase Tabs */}
          <Card className="p-8">
            <Tabs defaultValue="final1" className="w-full">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-primary mb-4">Final Masterpieces</h3>
                <TabsList className="grid w-full grid-cols-3 lg:grid-cols-5">
                  <TabsTrigger value="final1">Saree 1</TabsTrigger>
                  <TabsTrigger value="final2">Saree 2</TabsTrigger>
                  <TabsTrigger value="final3">Saree 3</TabsTrigger>
                  <TabsTrigger value="final4">Saree 4</TabsTrigger>
                  <TabsTrigger value="final5">Saree 5</TabsTrigger>
                </TabsList>
              </div>

              {[1, 2, 3, 4, 5].map((num) => (
                <TabsContent key={num} value={`final${num}`} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="aspect-square bg-muted/50 rounded-lg flex items-center justify-center border-2 border-dashed border-border">
                      <p className="text-muted-foreground text-center">
                        High-quality image {num}A<br />
                        <span className="text-sm">(Gallery ready)</span>
                      </p>
                    </div>
                    <div className="aspect-square bg-muted/50 rounded-lg flex items-center justify-center border-2 border-dashed border-border">
                      <p className="text-muted-foreground text-center">
                        High-quality image {num}B<br />
                        <span className="text-sm">(Gallery ready)</span>
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground italic text-center">
                    Click images to view in full size
                  </p>
                </TabsContent>
              ))}
            </Tabs>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
