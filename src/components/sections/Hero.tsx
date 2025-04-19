
import { Facebook, Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  // Function to open WhatsApp chat
  const openWhatsApp = () => {
    // Replace with your WhatsApp number
    const phoneNumber = "+918009723749"; 
    const message = "Hi there! I saw your portfolio and wanted to connect.";
    
    // Encode the message for the URL
    const encodedMessage = encodeURIComponent(message);
    
    // Create the WhatsApp URL
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="pt-36 pb-20 md:pt-40 md:pb-28 relative bg-gradient-to-b from-blue-50 to-transparent">
      <div className="container-custom px-4 flex flex-col md:flex-row items-center">
        {/* Profile Info */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight animate-on-scroll">
            Hi, I'm <span className="text-blue-600">Your Name</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-6 max-w-lg animate-on-scroll">
            Digital Creator & Content Specialist
          </p>
          <p className="text-gray-600 mb-8 max-w-lg animate-on-scroll">
            I create engaging content and build meaningful connections through storytelling and digital media.
          </p>

          <div className="flex flex-wrap gap-4 animate-on-scroll">
            <Button 
              onClick={openWhatsApp}
              className="bg-green-500 hover:bg-green-600 px-6 py-2 flex items-center gap-2"
            >
              <MessageCircle size={18} /> Chat on WhatsApp
            </Button>

            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-full text-white hover:opacity-90 transition-opacity"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-blue-600 rounded-full text-white hover:bg-blue-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Profile Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end animate-on-scroll">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white px-4 py-2 rounded-full shadow-md">
              <span className="font-medium text-blue-600">👋 Say hello!</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
