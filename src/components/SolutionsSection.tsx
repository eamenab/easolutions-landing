
import { useState, useEffect, useRef } from "react";
import { CreditCard, Database, Bookmark, BarChart3, LucideWebhook } from "lucide-react";

interface SolutionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const SolutionCard = ({ icon, title, description, index }: SolutionCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("revealed");
            }, index * 200);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) observer.observe(cardRef.current);

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, [index]);

  return (
    <div 
      ref={cardRef} 
      className="reveal-on-scroll glass-card p-6 hover-translate transition-all hover:shadow-md"
    >
      <div className="flex items-start gap-5">
        <div className="size-12 bg-ea-blue/10 rounded-lg flex items-center justify-center text-ea-blue">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

const SolutionsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  const solutions = [
    {
      icon: <LucideWebhook size={24} />,
      title: "Integración",
      description: "Integración con sistemas internos y externos a través de APIs o archivos"
    },
    {
      icon: <Database size={24} />,
      title: "Conciliación y Automatización de Flujos de Datos",
      description: "Flujos de trabajo automatizados para la conciliación de datos, reduciendo el esfuerzo manual y las tasas de error."
    },
    {
      icon: <Bookmark size={24} />,
      title: "Mejoras de Procesos",
      description: "Mejoras en los flujos de procesos a través de herramientas técnologicas."
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Reportes",
      description: "Visualización y Disponiblización de información. Estandarización para reportes normativos."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entries[0].target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section id="solutions" className="section-padding" ref={sectionRef}>
      <div className="container mx-auto">
        <div className={`text-center mb-16 opacity-0 transform translate-y-8 transition-all duration-700 ${isVisible ? "opacity-100 transform-none" : ""}`}>
          <h2 className="section-title">Nuestras Soluciones</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={index}
              icon={solution.icon}
              title={solution.title}
              description={solution.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
