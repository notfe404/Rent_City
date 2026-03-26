import { useState } from 'react';
import CarCard from './CarCard';

const tabs = ['Popular', 'Luxury', 'Vintage', 'Family', 'Off-Road'];

const cars = [
  {
    id: 1,
    name: 'Audi A8 L 2022',
    price: 78.90,
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0b1f?auto=format&fit=crop&q=80&w=800',
    type: 'Luxury',
    passengers: 4,
    transmission: 'Auto',
    fuel: 'Petrol'
  },
  {
    id: 2,
    name: 'Porsche Cayenne GTS 2022',
    price: 95.50,
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800',
    type: 'Popular',
    passengers: 5,
    transmission: 'Auto',
    fuel: 'Petrol'
  },
  {
    id: 3,
    name: 'Mercedes-Benz S-Class',
    price: 120.00,
    image: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&q=80&w=800',
    type: 'Luxury',
    passengers: 4,
    transmission: 'Auto',
    fuel: 'Hybrid'
  },
  {
    id: 4,
    name: 'BMW X7 M50i',
    price: 110.50,
    image: 'https://images.unsplash.com/photo-1607853202273-797f1c22a38e?auto=format&fit=crop&q=80&w=800',
    type: 'Popular',
    passengers: 7,
    transmission: 'Auto',
    fuel: 'Diesel'
  },
  {
    id: 5,
    name: 'Ford Mustang 1967',
    price: 85.00,
    image: 'https://images.unsplash.com/photo-1584345604476-8cb591bf2d43?auto=format&fit=crop&q=80&w=800',
    type: 'Vintage',
    passengers: 2,
    transmission: 'Manual',
    fuel: 'Petrol'
  },
  {
    id: 6,
    name: 'Land Rover Defender',
    price: 90.00,
    image: 'https://images.unsplash.com/photo-1605896434444-23ed835cfca3?auto=format&fit=crop&q=80&w=800',
    type: 'Off-Road',
    passengers: 5,
    transmission: 'Auto',
    fuel: 'Diesel'
  }
];

const CarCollection = () => {
  const [activeTab, setActiveTab] = useState('Popular');

  const filteredCars = cars.filter(car => 
    activeTab === 'Popular' ? ['Popular', 'Luxury'].includes(car.type) : car.type === activeTab
  );

  return (
    <section className="py-24 bg-deepBlack border-t border-white/5" id="collection">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Our Impressive <span className="luxury-gradient-text">Collection</span> of Cars
            </h2>
            <p className="text-gray-400 text-lg">
              Choose from our diverse fleet of premium vehicles designed to meet your specific needs and elevate your driving experience.
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex overflow-x-auto hide-scrollbar gap-2 mb-10 pb-2 border-b border-white/10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300 ${
                activeTab === tab 
                  ? 'bg-white text-deepBlack shadow-[0_0_15px_rgba(255,255,255,0.2)]' 
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.length > 0 ? (
            filteredCars.map((car) => (
              <CarCard key={car.id} {...car} />
            ))
          ) : (
            <div className="col-span-full py-12 text-center text-gray-500">
              No cars currently available in this category.
            </div>
          )}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-transparent border border-white/20 text-white hover:border-gold hover:text-gold px-8 py-3.5 rounded-full font-bold transition-all duration-300">
            View All Vehicles
          </button>
        </div>

      </div>
    </section>
  );
};

export default CarCollection;
