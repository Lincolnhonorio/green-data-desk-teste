import { Globe, Mail, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const contactData = [
  {
    icon: Globe,
    labelKey: "website" as const,
    value: "lincolnhonorio.com",
    link: "https://www.lincolnhonorio.com"
  },
  {
    icon: Mail,
    labelKey: "email" as const,
    value: "lincolnhonorio@hotmail.com",
    link: "mailto:lincolnhonorio@hotmail.com"
  },
  {
    icon: Linkedin,
    labelKey: "linkedin" as const,
    value: "lincoln-honorio",
    link: "https://www.linkedin.com/in/lincoln-honorio-1aa4a6286"
  },
  {
    icon: Github,
    labelKey: "github" as const,
    value: "Lincolnhonorio",
    link: "https://github.com/Lincolnhonorio"
  }
];

const Contact = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 md:py-32 px-4 md:px-8 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3">
          <span className="text-primary">|</span>
          <span>{t.contact.title}</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactData.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <Button
                key={index}
                variant="outline"
                className="h-auto p-6 justify-start border-border hover:border-primary/50 hover:bg-card transition-all duration-300 group"
                asChild
              >
                <a href={contact.link} target="_blank" rel="noopener noreferrer">
                  <div className="flex items-center gap-4 w-full">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-left flex-1">
                      <div className="text-sm text-muted-foreground mb-1">
                        {t.contact[contact.labelKey]}
                      </div>
                      <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {contact.value}
                      </div>
                    </div>
                  </div>
                </a>
              </Button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
