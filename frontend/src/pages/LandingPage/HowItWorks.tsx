
import { Search, CheckCircle, Car } from 'lucide-react';

const steps = [
  {
    icon: <Search className="w-8 h-8 text-gold" />,
    title: 'Browse and Select',
    description: 'Choose premium cars and dates that fit your schedule perfectly from our extensive collection.',
    number: '01'
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-gold" />,
    title: 'Book and Confirm',
    description: 'Instant confirmation via email/SMS with detailed instructions and booking reference.',
    number: '02'
  },
  {
    icon: <Car className="w-8 h-8 text-gold" />,
    title: 'Enjoy Your Ride',
    description: 'Pick up your vehicle at the designated location and embark on your unforgettable journey.',
    number: '03'
  }
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-graphite relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/5 blur-[150px] mix-blend-screen rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-gold font-semibold tracking-wider uppercase text-sm mb-3 block">Simple Process</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="luxury-gradient-text">How It Works</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Rent your luxury vehicle in three simple steps. We've streamlined the process to get you on the road faster.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line for desktop */}
          <div className="hidden md:block absolute top-[4.5rem] left-[15%] right-[15%] h-px bg-white/10 z-0"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-full bg-deepBlack border-2 border-white/10 flex items-center justify-center mb-8 relative transition-all duration-500 group-hover:border-gold group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(212,175,55,0.2)]">
                {step.icon}
                <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-gold text-deepBlack font-black text-sm flex items-center justify-center border-4 border-graphite">
                  {step.number}
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed max-w-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
