
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 glassmorphism border-b border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <span className="text-2xl font-bold tracking-tighter">
              LUXE<span className="text-gold">DRIVE</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">About</a>
            <a href="#collection" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Collection</a>
            <a href="#services" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Services</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Contact</a>
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm font-medium text-white hover:text-gold transition-colors">
              Log in
            </button>
            <button className="bg-white text-deepBlack hover:bg-gold hover:text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]">
              Register
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-graphite border-t border-white/5">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <a href="#about" className="block px-3 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md">About</a>
            <a href="#collection" className="block px-3 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md">Collection</a>
            <a href="#services" className="block px-3 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md">Services</a>
            <a href="#contact" className="block px-3 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md">Contact</a>
            <div className="mt-4 flex flex-col gap-3 px-3">
              <button className="w-full text-center py-3 text-base font-medium text-white border border-white/20 rounded-lg hover:bg-white/5">
                Log in
              </button>
              <button className="w-full text-center py-3 bg-gold text-deepBlack text-base font-bold rounded-lg">
                Register
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
