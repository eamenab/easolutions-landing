
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
              Potencia a las instituciones financieras con soluciones tecnológicas a medida para optimizar operaciones y mejorar el servicio al cliente.
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
                  Hagamos una Reunión
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
