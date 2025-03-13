
import { useRef, useEffect, useState } from "react";
import { User } from "lucide-react";

const AboutUsSection = () => {
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
    <section id="about" className="bg-ea-gray" ref={sectionRef}>
      <div className="container mx-auto">
        <div className={`text-center mb-12 opacity-0 transform translate-y-8 transition-all duration-700 ${isVisible ? "opacity-100 transform-none" : ""}`}>
          <h2 className="section-title p-8">Nosotros</h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-10 rounded-xl reveal-on-scroll">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="flex-shrink-0">
                <div className="size-28 md:size-32 bg-ea-blue/10 rounded-full flex items-center justify-center overflow-hidden">
                  <img 
                    src={`${import.meta.env.BASE_URL}1684777494934.jpg`}  
                    alt="User Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4 text-center md:text-left">Ernesto Amenábar</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Mi nombre es Ernesto Amenábar, soy un Ingeniero Civil Industrial. He trabajado en Corredoras de Bolsa y empresas financieras en el área de operaciones y liderando implementaciones de mejoras a través de soluciones tecnológicas a medida, también he realizado consultoría en optimización de procesos.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Mi enfoque está en crear y acompañar a las empresas en la implementación de herramientas tecnológicas innovadoras que permitan mejorar su eficiencia y servicio al cliente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
