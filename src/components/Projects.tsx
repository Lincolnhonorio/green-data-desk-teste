import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const projectsData = [
  {
    title: "DASHBOARD DE RH",
    description: "Dashboard completo de análise de Recursos Humanos com indicadores de turnover, absenteísmo, performance e gestão de talentos. Visualizações interativas para apoiar decisões estratégicas na área de pessoas.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    link: "https://github.com/Lincolnhonorio/PortifoliodeProjetos/blob/main/Projeto_HR_Analyst/Portifolio.pdf"
  },
  {
    title: "Portfólio de Projetos",
    description: "Coleção de projetos desenvolvidos em análise de dados, incluindo dashboards financeiros, de vendas e operacionais. Aplicação de melhores práticas em ETL e visualização de dados.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    link: "https://github.com/Lincolnhonorio/PortifoliodeProjetos"
  },
  {
    title: "Analytics & Insights",
    description: "Projetos focados em extração de insights de negócio através de análise exploratória de dados, machine learning e estatística aplicada para decisões baseadas em dados.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    link: "https://github.com/Lincolnhonorio/PortifoliodeProjetos"
  }
];

const Projects = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 md:py-32 px-4 md:px-8 bg-secondary/30">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
          <span className="text-primary">|</span>
          <span>{t.projects.title}</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-4">
                  {project.description}
                </p>
                <Button
                  variant="outline"
                  className="w-full border-primary/30 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 group/button"
                  asChild
                >
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    {t.projects.button}
                    <ExternalLink className="ml-2 h-4 w-4 group-hover/button:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
