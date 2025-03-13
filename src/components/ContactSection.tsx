
import { useRef, useEffect, useState } from "react";
import ContactForm from "./ui/ContactForm";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
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

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      title: "Email",
      content: "ernestoamenabar@easolutions.cl",
      link: "mailto:ernestoamenabar@easolutions.cl"
    },
  ];

  return (
    <section id="contact" className="section-padding bg-ea-gray" ref={sectionRef}>
      <div className="container mx-auto">
        <div className={`mb-16 opacity-0 transform translate-y-8 transition-all duration-700 ${isVisible ? "opacity-100 transform-none" : ""}`}>
          <h2 className="section-title">Hagamos una Reunión</h2>
          <p className="section-subtitle">
            Programemos una reunión y veámos si te puedo ayudar.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-10 rounded-xl">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="w-full">
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="size-10 bg-ea-blue/10 rounded-lg flex items-center justify-center text-ea-blue shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{item.title}</h4>
                        {item.link ? (
                          <a 
                            href={item.link} 
                            className="text-ea-blue hover:underline"
                            target={item.link.startsWith('http') ? "_blank" : undefined}
                            rel={item.link.startsWith('http') ? "noopener noreferrer" : undefined}
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-gray-600">{item.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
