import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  // Animation with intersection observer
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    elementsRef.current.forEach(el => {
      if (el) observer.observe(el);
    });
    return () => {
      elementsRef.current.forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);
  return (
    <section className="relative min-h-screen flex items-center bg-hero-primary overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-hero-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-hero-light/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-white">
            <div ref={el => elementsRef.current[0] = el} className="reveal-on-scroll">
              <span className="inline-block bg-hero-secondary/10 text-hero-light px-4 py-1 rounded-full text-sm font-medium mb-4">
                Desarrollo SaaS para Finanzas
              </span>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight">
                Soluciones SaaS Innovadoras
              </h1>
              <p className="text-2xl sm:text-3xl md:text-4xl text-hero-light/80 mt-4">
                para Instituciones Financieras
              </p>
            </div>
            
            <p ref={el => elementsRef.current[1] = el} className="text-xl text-hero-light/70 max-w-xl reveal-on-scroll animation-delay-500">
              EA Solutions potencia a las instituciones financieras con soluciones tecnológicas a medida para optimizar operaciones, mejorar la seguridad y impulsar el crecimiento.
            </p>
            
            <div ref={el => elementsRef.current[2] = el} className="reveal-on-scroll animation-delay-1000">
              <button 
                onClick={scrollToContact} 
                className="bg-hero-secondary hover:bg-hero-secondary/90 text-hero-primary px-8 py-4 rounded-lg font-medium transition-all flex items-center group text-lg"
              >
                Solicitar una Consulta
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={24} />
              </button>
            </div>
          </div>
          
          <div ref={el => elementsRef.current[3] = el} className="lg:block hidden">
            <div className="relative w-full aspect-square">
              <div className="absolute inset-0 bg-hero-secondary/20 rounded-full blur-3xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
