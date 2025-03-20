import { useRef, useEffect, useState } from "react";

const ChatSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false); // State for expanding/collapsing

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

  // Function to toggle iframe height
  const toggleIframe = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <section id="chat" className="section-padding" ref={sectionRef}>
      <div
        className={`text-center mb-16 opacity-0 transform translate-y-8 transition-all duration-700 ${
          isVisible ? "opacity-100 transform-none" : ""
        }`}
      >
        <h2 className="section-title">Algunos Ejemplos</h2>
        <p className="section-subtitle">
          Estos son algunos ejemplos de soluciones que podemos implementar.
        </p>
      </div>
      <div className="flex justify-center">
        <div className="reveal-on-scroll glass-card overflow-hidden rounded-xl transition-all duration-300 hover:shadow-lg w-full max-w-3xl">
          <div className="p-6">
            {/* Toggle Button */}
            <button
              onClick={toggleIframe}
              className="mb-4 bg-blue-500 text-white px-4 py-2 rounded-lg transition hover:bg-blue-600"
            >
              {isExpanded ? "Minimizar Chat" : "Expandir Chat"}
            </button>

            {/* Chat Container with Dynamic Height */}
            <div
              className="relative overflow-hidden transition-all duration-500 ease-in-out"
              style={{ height: isExpanded ? "1000px" : "600px" }}
            >
              <iframe
                ref={iframeRef}
                src="https://n8n.easolutions.cl/webhook/731480fb-df3c-4b8e-85d4-e1de646760e4/chat"
                title="Chat"
                className="w-full transition-all duration-500 ease-in-out"
                style={{ height: isExpanded ? "980px" : "580px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatSection;
