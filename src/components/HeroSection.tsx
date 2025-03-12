
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

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      elementsRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section className="pt-20 min-h-screen flex items-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-ea-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-ea-lightblue/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div 
              ref={(el) => (elementsRef.current[0] = el)} 
              className="reveal-on-scroll"
            >
              <span className="inline-block bg-ea-blue/10 text-ea-blue px-4 py-1 rounded-full text-sm font-medium mb-4">
                Financial SaaS Development
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-gray-900">
                Innovative SaaS Solutions for Financial Institutions
              </h1>
            </div>
            
            <p 
              ref={(el) => (elementsRef.current[1] = el)} 
              className="text-xl text-gray-600 max-w-xl reveal-on-scroll animation-delay-500"
            >
              EA Solutions empowers financial institutions with tailored technology solutions to streamline operations, enhance security, and drive growth.
            </p>
            
            <div 
              ref={(el) => (elementsRef.current[2] = el)} 
              className="reveal-on-scroll animation-delay-1000"
            >
              <button 
                onClick={scrollToContact} 
                className="btn-primary flex items-center group"
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={18} />
              </button>
            </div>
          </div>
          
          <div 
            ref={(el) => (elementsRef.current[3] = el)} 
            className="reveal-on-scroll"
          >
            <div className="glass-card p-6 md:p-8 aspect-square max-w-lg mx-auto">
              <div className="h-full w-full bg-gradient-to-br from-ea-blue/80 to-ea-lightblue/80 rounded-xl flex items-center justify-center p-10">
                <div className="text-white text-center">
                  <div className="flex justify-center mb-8">
                    <div className="size-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <div className="size-16 rounded-full bg-white/30 flex items-center justify-center">
                        <div className="size-8 rounded-full bg-white"></div>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Secure & Scalable</h3>
                  <p className="text-white/80">
                    Our SaaS solutions are built with enterprise-grade security and scalability from the ground up.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
