
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth"
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          <a 
            href="#" 
            className="text-ea-blue font-bold text-2xl flex items-center gap-4"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          >
            
            EA Solutions
            <img src={`${import.meta.env.BASE_URL}logo1_1.png`} className="h-8 w-auto" />
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#solutions" 
              onClick={(e) => { e.preventDefault(); scrollToSection("solutions"); }}
              className="text-gray-700 hover:text-ea-blue transition-colors"
            >
              Nuestras Soluciones
            </a>
            <a 
              href="#examples" 
              onClick={(e) => { e.preventDefault(); scrollToSection("examples"); }}
              className="text-gray-700 hover:text-ea-blue transition-colors"
            >
              Algunos Ejemplos
            </a>
            <a 
              href="#about" 
              onClick={(e) => { e.preventDefault(); scrollToSection("about"); }}
              className="text-gray-700 hover:text-ea-blue transition-colors"
            >
              Nosotros
            </a>
            <a 
              href="#contact" 
              onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }}
              className="btn-primary"
            >
              Hagamos una Reunión
            </a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden fixed inset-0 top-20 bg-white z-40 transition-all duration-300 ease-in-out transform",
          mobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
        )}
      >
        <nav className="flex flex-col space-y-6 p-6">
          <a 
            href="#solutions" 
            onClick={(e) => { e.preventDefault(); scrollToSection("solutions"); }}
            className="text-gray-700 hover:text-ea-blue transition-colors text-xl py-2"
          >
            Nuestras Soluciones
          </a>
          <a 
            href="#examples" 
            onClick={(e) => { e.preventDefault(); scrollToSection("examples"); }}
            className="text-gray-700 hover:text-ea-blue transition-colors text-xl py-2"
          >
            Algunos Ejemplos
          </a>
          <a 
            href="#about" 
            onClick={(e) => { e.preventDefault(); scrollToSection("about"); }}
            className="text-gray-700 hover:text-ea-blue transition-colors text-xl py-2"
          >
            Nosotros
          </a>
          <a 
            href="#contact" 
            onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }}
            className="btn-primary text-center text-xl"
          >
            Hagamos una Reunión
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
