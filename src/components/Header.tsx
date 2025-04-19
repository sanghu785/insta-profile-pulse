
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Listen for scroll to change header style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMobileMenuOpen && !target.closest("#mobile-menu") && !target.closest("#menu-button")) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  // Handle smooth scrolling for anchor links
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      // Close mobile menu if open
      setIsMobileMenuOpen(false);
      // Update URL without navigation
      window.history.pushState({}, "", `${window.location.pathname}#${sectionId}`);
    }
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white bg-opacity-90 backdrop-blur-sm shadow-sm" 
          : "bg-transparent"
      }`}
    >
      <div className="container-custom py-4 px-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-poppins font-bold">
          Sanghpriya
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <a href="#about" onClick={(e) => scrollToSection(e, "about")} className="font-medium hover:text-primary transition-colors">
            About
          </a>
          <a href="#achievements" onClick={(e) => scrollToSection(e, "achievements")} className="font-medium hover:text-primary transition-colors">
            Achievements
          </a>
          <a href="#blog" onClick={(e) => scrollToSection(e, "blog")} className="font-medium hover:text-primary transition-colors">
            Blog
          </a>
          <a href="#contact" onClick={(e) => scrollToSection(e, "contact")} className="font-medium hover:text-primary transition-colors">
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          id="menu-button"
          className="md:hidden text-gray-700 hover:text-primary transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-white absolute w-full border-t border-gray-200 animate-fade-in"
        >
          <nav className="flex flex-col space-y-4 p-4">
            <Link 
              to="/" 
              className="font-medium hover:text-primary transition-colors px-4 py-2" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <a 
              href="#about" 
              onClick={(e) => scrollToSection(e, "about")}
              className="font-medium hover:text-primary transition-colors px-4 py-2"
            >
              About
            </a>
            <a 
              href="#achievements" 
              onClick={(e) => scrollToSection(e, "achievements")}
              className="font-medium hover:text-primary transition-colors px-4 py-2"
            >
              Achievements
            </a>
            <a 
              href="#blog" 
              onClick={(e) => scrollToSection(e, "blog")}
              className="font-medium hover:text-primary transition-colors px-4 py-2"
            >
              Blog
            </a>
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, "contact")}
              className="font-medium hover:text-primary transition-colors px-4 py-2"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
