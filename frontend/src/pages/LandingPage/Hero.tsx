
import { Calendar, MapPin, Search } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-deepBlack/80 via-deepBlack/50 to-deepBlack z-10" />
        <img 
          src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80" 
          alt="Luxury Car Background" 
          className="w-full h-full object-cover object-center opacity-40 scale-105"
        />
        {/* Glow effect */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/20 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-electricBlue/10 rounded-full blur-[120px] mix-blend-screen" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
            Discover the world on wheels with our <span className="luxury-gradient-text">car rental</span> service
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Experience the thrill of driving the world's most prestigious vehicles. Premium fleet, seamless booking, unforgettable journeys.
          </p>
        </div>

        {/* Booking Widget */}
        <div className="max-w-5xl mx-auto">
          <div className="glassmorphism rounded-2xl p-4 md:p-6 shadow-2xl">
            <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider pl-1">Pick-up Location</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MapPin size={18} className="text-gold" />
                  </div>
                  <input 
                    type="text" 
                    placeholder="City, Airport, or Address" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider pl-1">Drop-off Location</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MapPin size={18} className="text-gray-500" />
                  </div>
                  <input 
                    type="text" 
                    placeholder="Same as pick-up" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider pl-1">Pickup Date</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Calendar size={18} className="text-gold" />
                  </div>
                  <input 
                    type="date" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-10 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all [&::-webkit-calendar-picker-indicator]:invert"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider pl-1">Drop-off Date</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Calendar size={18} className="text-gray-500" />
                  </div>
                  <input 
                    type="date" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-10 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all [&::-webkit-calendar-picker-indicator]:invert"
                  />
                </div>
              </div>

              <button 
                type="button"
                className="w-full bg-gold hover:bg-yellow-400 text-deepBlack font-bold rounded-xl py-3.5 px-4 flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_4px_20px_rgba(212,175,55,0.4)] hover:shadow-[0_4px_25px_rgba(212,175,55,0.6)] hover:-translate-y-0.5"
              >
                <Search size={20} />
                <span>Find a Vehicle</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
