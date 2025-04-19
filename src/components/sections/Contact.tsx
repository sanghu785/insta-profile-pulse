
import { Mail, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  // Function to open WhatsApp chat
  const openWhatsApp = () => {
    // Replace with your WhatsApp number
    const phoneNumber = "+918009723749";
    const message = "Hi there! I'd like to get in touch.";
    
    // Encode the message for the URL
    const encodedMessage = encodeURIComponent(message);
    
    // Create the WhatsApp URL
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="section scroll-mt bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">Get In Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto animate-on-scroll">
            Have a question or want to work together? Feel free to reach out.
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Email */}
            <a 
              href="mailto:your.email@example.com" 
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow animate-on-scroll border border-gray-100"
            >
              <div className="bg-blue-50 w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4">
                <Mail className="text-blue-600" size={20} />
              </div>
              <h3 className="font-bold mb-2">Email</h3>
              <p className="text-gray-600">sanghpriya785@gmail.com</p>
            </a>
            
            {/* WhatsApp */}
            <button 
              onClick={openWhatsApp}
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow animate-on-scroll border border-gray-100"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="bg-green-50 w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4">
                <MessageCircle className="text-green-600" size={20} />
              </div>
              <h3 className="font-bold mb-2">WhatsApp</h3>
              <p className="text-gray-600">Send me a message</p>
            </button>
            
            {/* Phone */}
            <a 
              href="tel:+1234567890" 
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow animate-on-scroll border border-gray-100"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="bg-purple-50 w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4">
                <Phone className="text-purple-600" size={20} />
              </div>
              <h3 className="font-bold mb-2">Phone</h3>
              <p className="text-gray-600">+1 (234) 567-890</p>
            </a>
          </div>
          
          <div className="text-center mt-12 animate-on-scroll">
            <Button 
              onClick={openWhatsApp} 
              className="bg-green-500 hover:bg-green-600 px-8 py-2 flex items-center gap-2 mx-auto"
            >
              <MessageCircle size={18} /> Chat on WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
