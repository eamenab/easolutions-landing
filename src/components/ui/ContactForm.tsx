
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("¡Gracias por tu mensaje! Nos pondremos en contacto pronto.");
      setFormData({
        name: "",
        email: "",
        company: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Nombre Completo
          </label>
          <Input
            id="name"
            name="name"
            placeholder="Juan Pérez"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Correo Electrónico
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="juan@ejemplo.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full"
          />
        </div>
        
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
            Empresa
          </label>
          <Input
            id="company"
            name="company"
            placeholder="Tu Empresa"
            value={formData.company}
            onChange={handleChange}
            required
            className="w-full"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Mensaje
          </label>
          <Textarea
            id="message"
            name="message"
            placeholder="¿Cómo podemos ayudar a tu institución financiera?"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full"
          />
        </div>
      </div>
      
      <Button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full bg-ea-blue hover:bg-ea-darkblue text-white font-medium py-3 rounded-lg transition-all flex items-center justify-center"
      >
        {isSubmitting ? "Enviando..." : (
          <>
            Enviar <Send size={16} className="ml-2" />
          </>
        )}
      </Button>
    </form>
  );
};

export default ContactForm;
