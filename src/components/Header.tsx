import React, { useEffect, useState } from "react";
import { Menu, X, Map } from "lucide-react";

interface HeaderProps {
  onNavChange: (section: string) => void;
  activeSection: string;
}

export function Header({ onNavChange, activeSection }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Change background if scrolled more than 50px
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const determineBackground = () => {
    // Make the header background visible for non-Home sections
    return activeSection !== "home" || isScrolled
      ? "bg-gray-900/80"
      : "bg-transparent";
  };

  const NavLink = ({
    children,
    section,
  }: {
    children: React.ReactNode;
    section: string;
  }) => (
    <button
      onClick={() => {
        onNavChange(section);
        setIsOpen(false);
      }}
      className={`group relative px-3 py-2 transition-colors duration-300 ${
        activeSection === section ? "text-blue-500" : "text-white"
      }`}
    >
      <span className="relative z-10">{children}</span>
      <span
        className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform origin-left transition-transform duration-300 ${
          activeSection === section ? "scale-x-100" : "scale-x-0"
        } group-hover:scale-x-100`}
      ></span>
    </button>
  );

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-cd transition-all duration-300 ${determineBackground()}`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => onNavChange("home")}
            className="flex items-center space-x-2 text-3xl font-bold text-white"
            aria-label="Navigate to Home"
          >
            <Map className="w-8 h-8" />
            <span>MP Explorer</span>
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8">
            <NavLink section="home">Home</NavLink>
            <NavLink section="explore">Explore</NavLink>
            <NavLink section="insights">Insights</NavLink>
            <NavLink section="about">About Us</NavLink>
            <NavLink section="contact">Get in Touch</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4">
            <NavLink section="home">Home</NavLink>
            <NavLink section="explore">Explore</NavLink>
            <NavLink section="about">About Us</NavLink>
            <NavLink section="insights">Insights</NavLink>
            <NavLink section="contact">Get in Touch</NavLink>
          </div>
        )}
      </nav>
    </header>
  );
}
