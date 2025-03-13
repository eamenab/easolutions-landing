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
    <section className="pt-16 min-h-[80vh] flex items-center relative overflow-hidden">
      {/* Container to Align Everything */}
      <div className="container mx-auto px-4 md:px-6">
        {/* Banner Image */}
        <div className="w-full mb-6">
          <img 
            src={`${import.meta.env.BASE_URL}banner.png`} 
            alt="Banner" 
            className="w-full max-h-64 object-cover"
          />
        </div>
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-ea-teal/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-ea-green/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 items-center">
            <div className="space-y-4">
              <div ref={el => elementsRef.current[0] = el} className="reveal-on-scroll">
                <span className="inline-block bg-ea-teal/10 text-ea-teal px-4 py-1 rounded-full text-sm font-medium">
                  Consultoría y Desarrollo SaaS a Medida
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-ea-teal">
                  Soluciones SaaS Innovadoras para Instituciones Financieras
                </h1>
              </div>

              <p ref={el => elementsRef.current[1] = el} className="text-lg text-gray-600 max-w-lg leading-relaxed reveal-on-scroll animation-delay-500">
                EA Solutions potencia a las instituciones financieras con soluciones tecnológicas a medida para optimizar operaciones y mejorar el servicio al cliente.
              </p>

              <div ref={el => elementsRef.current[2] = el} className="reveal-on-scroll animation-delay-1000">
                <button onClick={scrollToContact} className="btn-primary flex items-center group">
                  Hagamos una Reunión
                  <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={18} />
                </button>
              </div>
            </div>
            
            <div ref={el => elementsRef.current[3] = el} className="reveal-on-scroll"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
