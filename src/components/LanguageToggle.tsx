import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt');
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleLanguage}
      className="fixed top-4 right-4 z-50 w-auto px-4 border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg"
      aria-label="Toggle language"
    >
      <Languages className="h-5 w-5" />
      <span className="ml-2 text-sm font-semibold">{language.toUpperCase()}</span>
    </Button>
  );
};

export default LanguageToggle;
