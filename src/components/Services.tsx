import { TrendingUp, BarChart4, Workflow } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const servicesIcons = [TrendingUp, BarChart4, Workflow];

const Services = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 md:py-32 px-4 md:px-8">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3">
          <span className="text-primary">|</span>
          <span>{t.services.title}</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.services.items.map((service, index) => {
            const Icon = servicesIcons[index];
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 group text-center"
              >
                <div className="mb-6 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
