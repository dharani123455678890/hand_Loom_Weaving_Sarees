import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/useLanguage";
import ExternalLink from "@/components/ExternalLink";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isTamil, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { id: "about", label: "About Us" },
    { id: "services", label: "Services" },
    { id: "portfolio", label: "Portfolio" },
    { id: "custom-design", label: "Custom Design" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="flex flex-col items-start"
          >
            <h1 className="text-xl md:text-2xl font-bold text-primary">
              Hand Loom Weaving Saree
            </h1>
            <p className="text-xs md:text-sm text-muted-foreground italic">
              ஆர்டரின் பெயரில் நைத்துறப்படும்
            </p>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </button>
            ))}
            {/* Language toggle - global */}
            <Button variant="outline" size="sm" onClick={toggleLanguage}>
              {isTamil ? "தமிழ்" : "EN"}
            </Button>
            <Button
              variant="whatsapp"
              size="sm"
              asChild
            >
              <ExternalLink href="https://wa.me/918489889549" blank>
                <Phone className="mr-2 h-4 w-4" />
                WhatsApp
              </ExternalLink>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2">
            {/* Mobile-only language toggle (always visible on small screens) */}
            <div className="md:hidden">
              <Button variant="outline" size="sm" onClick={toggleLanguage}>
                {isTamil ? "தமிழ்" : "EN"}
              </Button>
            </div>

            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-foreground" />
              ) : (
                <Menu className="h-6 w-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background/95 backdrop-blur-md">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-left text-foreground hover:text-primary transition-colors font-medium px-2"
                >
                  {link.label}
                </button>
              ))}
              <Button
                variant="whatsapp"
                size="sm"
                asChild
                className="w-full"
              >
                  <ExternalLink href="https://wa.me/918489889549" blank>
                    <Phone className="mr-2 h-4 w-4" />
                    Contact via WhatsApp
                  </ExternalLink>
              </Button>
              {/* language toggle moved to header for mobile; keep mobile menu uncluttered */}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
