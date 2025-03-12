
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
      content: "contact@easolutions.com",
      link: "mailto:contact@easolutions.com"
    },
    {
      icon: <Phone size={20} />,
      title: "Phone",
      content: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: <MapPin size={20} />,
      title: "Office",
      content: "123 Financial District, New York, NY",
      link: "https://maps.google.com"
    },
    {
      icon: <Clock size={20} />,
      title: "Business Hours",
      content: "Monday-Friday: 9AM-5PM",
      link: null
    }
  ];

  return (
    <section id="contact" className="section-padding bg-ea-gray" ref={sectionRef}>
      <div className="container mx-auto">
        <div className={`mb-16 opacity-0 transform translate-y-8 transition-all duration-700 ${isVisible ? "opacity-100 transform-none" : ""}`}>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Ready to transform your financial institution with innovative SaaS solutions? Contact us today for a personalized consultation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="glass-card p-8 md:p-10 rounded-2xl h-fit">
            <h3 className="text-2xl font-bold mb-6">Schedule a Consultation</h3>
            <ContactForm />
          </div>
          
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
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
            
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Ready to Start?</h3>
              <p className="text-gray-600 mb-6">
                Our team is ready to help you implement the perfect SaaS solution for your financial institution. Schedule a consultation today and take the first step towards digital transformation.
              </p>
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block btn-primary w-full text-center"
              >
                Book a Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
