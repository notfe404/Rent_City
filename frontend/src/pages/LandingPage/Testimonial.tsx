
import { Star, Quote } from 'lucide-react';

const Testimonial = () => {
  return (
    <section className="py-24 bg-graphite relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-electricBlue/5 blur-[100px] rounded-full pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold font-semibold tracking-wider uppercase text-sm mb-3 block">Testimonials</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            What Our <span className="luxury-gradient-text">Clients Say</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-deepBlack border border-white/10 rounded-3xl p-8 md:p-12 relative shadow-2xl overflow-hidden group hover:border-gold/30 transition-all duration-500">
            <Quote className="absolute -top-6 -left-6 w-32 h-32 text-white/[0.02] -rotate-12 group-hover:-rotate-0 transition-transform duration-700" />
            
            <div className="relative z-10">
              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-gold text-gold" />
                ))}
              </div>
              
              <blockquote className="text-xl md:text-3xl text-gray-300 font-medium leading-relaxed mb-10 italic">
                "The experience with LUXEDRIVE was absolutely phenomenal. The Mercedes-Benz S-Class was in pristine condition, the booking process took just a few minutes, and the customer service made me feel like VIP from start to finish. Highly recommended!"
              </blockquote>
              
              <div className="flex items-center gap-5">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150" 
                  alt="Lokman Hossain" 
                  className="w-16 h-16 rounded-full object-cover border-2 border-gold"
                />
                <div>
                  <div className="font-bold text-lg text-white">Lokman Hossain</div>
                  <div className="text-gray-400 text-sm">Texas, United States</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonial;
