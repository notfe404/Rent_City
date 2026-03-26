
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-deepBlack pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & App Download */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold tracking-tighter">
                LUXE<span className="text-gold">DRIVE</span>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              Experience the ultimate luxury journey with our premium car rental service. Download our app for exclusive offers and faster booking.
            </p>
            <div className="flex flex-col gap-3 pt-2">
              <button className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl px-4 py-2 hover:border-white/20 transition-all w-full md:w-48 group">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 group-hover:text-white transition-colors">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.09 2.31-.82 3.59-.73 1.5.15 2.53.7 3.21 1.6-2.98 1.83-2.49 5.83.47 7.18-.71 1.73-1.54 3.19-2.35 4.12zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                <div className="text-left flex flex-col justify-center">
                  <span className="text-[10px] text-gray-400 leading-none">Download on the</span>
                  <span className="text-sm font-semibold leading-tight mt-0.5">App Store</span>
                </div>
              </button>
              <button className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl px-4 py-2 hover:border-white/20 transition-all w-full md:w-48 group">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#3DDC84]">
                  <path d="M2.5 2.5v19l11-11-11-8zm12.5 8l4.5 3-4.5 3-3-3 3-3zM3.5 1.5l14 10-2-1.5-12-8.5zM3.5 22.5l12-8.5 2-1.5-14 10z" />
                </svg>
                <div className="text-left flex flex-col justify-center">
                  <span className="text-[10px] text-gray-400 leading-none">GET IT ON</span>
                  <span className="text-sm font-semibold leading-tight mt-0.5">Google Play</span>
                </div>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold">Quick Links</h4>
            <ul className="space-y-4">
              {['About Us', 'Our Fleet', 'Services', 'Pricing', 'Testimonials', 'Contact Us'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-gold transition-colors text-sm flex items-center gap-2 group">
                    <ArrowRight size={14} className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold">Contact Info</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex gap-3">
                <MapPin className="text-gold w-5 h-5 flex-shrink-0" />
                <span>123 Luxury Drive Avenue,<br/>Beverly Hills, CA 90210</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="text-gold w-5 h-5 flex-shrink-0" />
                <span>+1 (800) 123-4567</span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="text-gold w-5 h-5 flex-shrink-0" />
                <span>bookings@luxedrive.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold">Newsletter</h4>
            <p className="text-sm text-gray-400">Subscribe to get the latest updates and exclusive luxury offers.</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-4 pr-12 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all text-sm"
              />
              <button 
                type="button"
                className="absolute right-1 top-1 bottom-1 aspect-square bg-gold text-deepBlack font-bold rounded-lg flex items-center justify-center hover:bg-yellow-400 transition-colors"
                aria-label="Subscribe"
              >
                <ArrowRight size={18} />
              </button>
            </form>
            <div className="flex gap-4 pt-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gold hover:border-gold transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} LUXEDRIVE. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
