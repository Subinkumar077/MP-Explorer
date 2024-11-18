import React from 'react';
import { Menu, X, Map } from 'lucide-react';

interface HeaderProps {
  onNavChange: (section: string) => void;
  activeSection: string;
}

export function Header({ onNavChange, activeSection }: HeaderProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const NavLink = ({ href, children, section }: { href: string; children: React.ReactNode; section: string }) => (
    <button
      onClick={() => {
        onNavChange(section);
        setIsOpen(false);
      }}
      className={`group relative px-3 py-2 transition-colors duration-300 ${
        activeSection === section ? 'text-blue-500' : 'text-white'
      }`}
    >
      <span className="relative z-10">{children}</span>
      <span
        className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform origin-left transition-transform duration-300 ${
          activeSection === section ? 'scale-x-100' : 'scale-x-0'
        } group-hover:scale-x-100`}
      ></span>
    </button>
  );

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-900/80 backdrop-blur-md">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => onNavChange('home')}
            className="flex items-center space-x-2 text-3xl font-bold text-white"
          >
            <Map className="w-8 h-8" />
            <span>MP Explorer</span>
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8">
            <NavLink href="/explore" section="explore">
              Home
            </NavLink>
          
            <NavLink href="/insights" section="insights">
              Insights
            </NavLink>
             <NavLink href="/about" section="about">
              About Us
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4">
            <NavLink href="/explore" section="explore">
              Explore
            </NavLink>
            <NavLink href="/about" section="about">
              About Us
            </NavLink>
            <NavLink href="/insights" section="insights">
              Insights
            </NavLink>
            <NavLink href="/contact" section="contact">
              Get in Touch
            </NavLink>
          </div>
        )}
      </nav>
    </header>
  );
}
