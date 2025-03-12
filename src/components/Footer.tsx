
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
              Innovative SaaS solutions for financial institutions, designed to streamline operations, enhance security, and drive growth.
            </p>
            <p className="text-gray-500 text-sm">
              &copy; {year} EA Solutions. All rights reserved.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#benefits" 
                  className="text-gray-600 hover:text-ea-blue transition-colors"
                >
                  Why Choose Us
                </a>
              </li>
              <li>
                <a 
                  href="#solutions" 
                  className="text-gray-600 hover:text-ea-blue transition-colors"
                >
                  Our Solutions
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-gray-600 hover:text-ea-blue transition-colors"
                >
                  Contact Us
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
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-600 hover:text-ea-blue transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-600 hover:text-ea-blue transition-colors"
                >
                  Security Policy
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
