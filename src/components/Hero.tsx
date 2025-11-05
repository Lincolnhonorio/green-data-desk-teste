import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import profileImage from "@/assets/lincoln-profile.jpg";

const Hero = () => {
  const { t } = useLanguage();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-secondary/20 px-4 md:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(75_100%_64%_/_0.05),transparent_50%)]" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left space-y-6 animate-fade-in">
            <div className="space-y-2">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                <span className="text-primary">Lincoln</span>{" "}
                <span className="text-foreground">Honorio</span>
              </h1>
              <div className="h-1 w-24 bg-primary mx-auto md:mx-0 rounded-full" />
            </div>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
              {t.hero.subtitle}
            </p>

            <Button
              size="lg"
              onClick={() => scrollToSection("sobre-mim")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-primary/25 transition-all duration-300 group"
            >
              {t.hero.button}
              <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>

          {/* Right Photo */}
          <div className="flex-shrink-0 animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-glow" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl">
                <img
                  src={profileImage}
                  alt="Lincoln Honorio"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
