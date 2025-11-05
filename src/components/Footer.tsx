import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="container mx-auto max-w-7xl text-center">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()}{" "}
          <span className="text-primary font-semibold">Lincoln Honorio</span>. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
