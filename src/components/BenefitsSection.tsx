
import { useState, useEffect, useRef } from "react";
import { Code, ShieldCheck, LineChart } from "lucide-react";

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
}

const BenefitCard = ({ icon, title, description, delay }: BenefitCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
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
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`glass-card p-8 hover-translate reveal-on-scroll ${delay}`}
    >
      <div className="size-16 bg-ea-blue/10 rounded-lg flex items-center justify-center mb-6 text-ea-blue">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const BenefitsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
    <section id="benefits" className="section-padding bg-ea-gray" ref={sectionRef}>
      <div className="container mx-auto">
        <div className={`text-center mb-16 opacity-0 transform translate-y-8 transition-all duration-700 ${isVisible ? "opacity-100 transform-none" : ""}`}>
          <h2 className="section-title">¿Por Qué Elegirnos?</h2>
          <p className="section-subtitle">
            Asociarse con EA Solutions para transformar su institución financiera con tecnología construida para el futuro.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <BenefitCard
            icon={<Code size={32} />}
            title="Desarrollo Personalizado"
            description="Soluciones a medida diseñadas específicamente para satisfacer sus necesidades comerciales y flujos de trabajo únicos."
            delay=""
          />
          
          <BenefitCard
            icon={<ShieldCheck size={32} />}
            title="Seguridad y Cumplimiento"
            description="Estándares líderes en la industria para la protección de datos financieros y el cumplimiento normativo."
            delay="animation-delay-500"
          />
          
          <BenefitCard
            icon={<LineChart size={32} />}
            title="Escalabilidad y Rendimiento"
            description="Arquitectura de software de alto rendimiento que crece sin problemas con su negocio."
            delay="animation-delay-1000"
          />
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
