
import { useState, useEffect } from "react";

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-white py-12 border-t border-gray-200">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-ea-blue font-bold text-2xl mb-4">EA Solutions</h3>
            <p className="text-gray-600 mb-4 max-w-md">
              Soluciones SaaS innovadoras para instituciones financieras, diseñadas para optimizar operaciones, mejorar la seguridad e impulsar el crecimiento.
            </p>
            <p className="text-gray-500 text-sm">
              &copy; {year} EA Solutions. Todos los derechos reservados.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#solutions" 
                  className="text-gray-600 hover:text-ea-blue transition-colors"
                >
                  Nuestras Soluciones
                </a>
              </li>
              <li>
                <a 
                  href="#examples" 
                  className="text-gray-600 hover:text-ea-blue transition-colors"
                >
                  Algunos Ejemplos
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="text-gray-600 hover:text-ea-blue transition-colors"
                >
                  Nosotros
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-gray-600 hover:text-ea-blue transition-colors"
                >
                  Contáctanos
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#" 
                  className="text-gray-600 hover:text-ea-blue transition-colors"
                >
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-600 hover:text-ea-blue transition-colors"
                >
                  Términos de Servicio
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-600 hover:text-ea-blue transition-colors"
                >
                  Política de Seguridad
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
