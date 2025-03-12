
import { useRef, useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface ExampleCardProps {
  title: string;
  description: string;
  image: string;
  index: number;
}

const ExampleCard = ({ title, description, image, index }: ExampleCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("revealed");
            }, index * 150);
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
      className="reveal-on-scroll glass-card overflow-hidden rounded-xl transition-all duration-300 hover:shadow-lg"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const ExamplesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  const examples = [
    {
      title: "Banca Digital Premium",
      description: "Implementación de una plataforma de banca digital para una institución financiera líder con funcionalidades avanzadas de seguridad.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Sistema de Gestión de Riesgos",
      description: "Desarrollo de un sistema integral para la identificación, evaluación y mitigación de riesgos financieros en tiempo real.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Plataforma de Cumplimiento Normativo",
      description: "Solución automatizada para el seguimiento y cumplimiento de regulaciones financieras en múltiples jurisdicciones.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
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
    <section id="examples" className="section-padding" ref={sectionRef}>
      <div className="container mx-auto">
        <div className={`text-center mb-16 opacity-0 transform translate-y-8 transition-all duration-700 ${isVisible ? "opacity-100 transform-none" : ""}`}>
          <h2 className="section-title">Algunos Ejemplos</h2>
          <p className="section-subtitle">
            Descubre cómo hemos ayudado a instituciones financieras a transformar sus operaciones con nuestras soluciones SaaS.
          </p>
        </div>
        
        <div className="flex flex-col space-y-8 max-w-3xl mx-auto">
          {examples.map((example, index) => (
            <ExampleCard
              key={index}
              title={example.title}
              description={example.description}
              image={example.image}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExamplesSection;
