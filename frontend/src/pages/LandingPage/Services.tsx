
import { Award, CreditCard, Smartphone } from 'lucide-react';

const services = [
  {
    icon: <Award className="w-10 h-10 text-gold" />,
    title: 'Quality Choice',
    description: 'Our fleet is meticulously maintained and features only the highest trim levels of luxury and sports cars from top brands worldwide.'
  },
  {
    icon: <CreditCard className="w-10 h-10 text-gold" />,
    title: 'Affordable Prices',
    description: 'We offer competitive and transparent pricing with no hidden fees, ensuring you get the best value for your luxury experience.'
  },
  {
    icon: <Smartphone className="w-10 h-10 text-gold" />,
    title: 'Convenient Online Booking',
    description: 'Our digital platform allows you to book your dream car in minutes, with instant confirmation and seamless digital verification.'
  }
];

const Services = () => {
  return (
    <section className="py-24 bg-deepBlack border-t border-white/5" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative group">
            <div className="absolute inset-0 bg-gold/20 rounded-3xl -rotate-3 transition-transform duration-500 group-hover:-rotate-6" />
            <img 
              src="https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&q=80&w=1000" 
              alt="Services and Benefits" 
              className="relative w-full h-[500px] object-cover rounded-3xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="absolute bottom-8 -right-8 bg-graphite p-6 rounded-2xl border border-white/10 shadow-2xl hidden md:flex items-center gap-4">
              <div className="w-14 h-14 bg-white/[0.03] rounded-full flex items-center justify-center border border-white/10">
                <span className="text-2xl font-black text-gold">10+</span>
              </div>
              <div>
                <p className="text-white font-bold leading-tight">Years of<br/>Experience</p>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2 space-y-12">
            <div>
              <span className="text-gold font-semibold tracking-wider uppercase text-sm mb-3 block">Why Choose Us</span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Premium <span className="luxury-gradient-text">Services</span> & Benefits
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                We go above and beyond to provide an exceptional car rental experience, combining premium vehicles with unparalleled customer service.
              </p>
            </div>

            <div className="space-y-8">
              {services.map((service, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:bg-gold/10 group-hover:border-gold/30">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-gold transition-colors">{service.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
