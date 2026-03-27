import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../LandingPage/Header';
import Footer from '../LandingPage/Footer';
import { Car, Users, Settings, Briefcase, MapPin, Calendar, Check, Star, ShieldCheck, ChevronRight } from 'lucide-react';

const MOCK_CAR = {
  id: '1',
  name: 'Mercedes-Benz S-Class',
  type: 'Luxury Sedan',
  price: 150,
  rating: 4.9,
  reviews: 128,
  description: 'Experience the ultimate in luxury and performance with the Mercedes-Benz S-Class. This flagship sedan offers an unparalleled ride with cutting-edge technology, premium leather interior, and advanced safety features, perfect for city commutes or long-distance travel.',
  images: [
    'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=800&auto=format&fit=crop',
  ],
  passengers: 4,
  doors: 4,
  transmission: 'Automatic',
  luggage: 3,
  features: [
    'Leather Seats', 'Bluetooth', 'Backup Camera', 'Navigation System', 'Apple CarPlay', 'Android Auto', 'Blind Spot Warning', 'Keyless Entry'
  ]
};

export default function VehicleDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col font-sans">
      <Header />

      {/* Breadcrumb & Title */}
      <div className="bg-[#212529] pt-28 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-6 font-medium">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <ChevronRight size={14} />
            <a href="/search" className="hover:text-white transition-colors">Fleet</a>
            <ChevronRight size={14} />
            <span className="text-[#78ad44]">{MOCK_CAR.name}</span>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div>
              <span className="inline-block px-3 py-1 bg-[#343A40] text-white text-xs font-bold rounded-lg uppercase tracking-wide mb-3">
                {MOCK_CAR.type}
              </span>
              <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">{MOCK_CAR.name}</h1>
              <div className="flex items-center gap-4 mt-4">
                <div className="flex items-center text-[#f99200]">
                  <Star size={16} className="fill-current" />
                  <span className="ml-1 font-bold text-white">{MOCK_CAR.rating}</span>
                  <span className="ml-1 text-gray-400 text-sm">({MOCK_CAR.reviews} reviews)</span>
                </div>
                <div className="flex items-center text-[#78ad44] text-sm font-semibold">
                  <ShieldCheck size={16} className="mr-1" /> Insured Vehicle
                </div>
              </div>
            </div>
            <div className="text-left md:text-right">
              <p className="text-gray-400 text-sm font-medium mb-1">Starting from</p>
              <div className="text-4xl font-black text-[#78ad44]">${MOCK_CAR.price}<span className="text-lg text-white font-medium">/day</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 pb-20 w-full flex flex-col lg:flex-row gap-10">
        
        {/* Left Column: Details & Details */}
        <div className="flex-1 w-full flex flex-col gap-10">
          
          {/* Gallery Widget */}
          <div className="bg-white rounded-[2rem] p-4 shadow-xl border border-gray-100 flex flex-col gap-4">
            <div className="w-full h-[300px] sm:h-[400px] md:h-[450px] rounded-[1.5rem] overflow-hidden relative">
              <img src={MOCK_CAR.images[activeImage]} alt={MOCK_CAR.name} className="w-full h-full object-cover transition-opacity duration-500" />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {MOCK_CAR.images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`relative h-20 sm:h-28 rounded-xl overflow-hidden ${activeImage === idx ? 'ring-2 ring-offset-2 ring-[#78ad44]' : 'opacity-70 hover:opacity-100'} transition-all`}
                >
                  <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Key Specs */}
          <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100">
            <h3 className="text-2xl font-black text-gray-900 mb-6">Key Specifications</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div className="flex items-center gap-4 bg-[#f4f8f7] p-4 rounded-2xl">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#78ad44] shadow-sm"><Users size={20} /></div>
                <div><p className="text-xs text-gray-500 font-medium">Passengers</p><p className="font-bold text-gray-900">{MOCK_CAR.passengers} Seats</p></div>
              </div>
              <div className="flex items-center gap-4 bg-[#f4f8f7] p-4 rounded-2xl">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#78ad44] shadow-sm"><Briefcase size={20} /></div>
                <div><p className="text-xs text-gray-500 font-medium">Luggage</p><p className="font-bold text-gray-900">{MOCK_CAR.luggage} Bags</p></div>
              </div>
              <div className="flex items-center gap-4 bg-[#f4f8f7] p-4 rounded-2xl">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#78ad44] shadow-sm"><Car size={20} /></div>
                <div><p className="text-xs text-gray-500 font-medium">Doors</p><p className="font-bold text-gray-900">{MOCK_CAR.doors} Doors</p></div>
              </div>
              <div className="flex items-center gap-4 bg-[#f4f8f7] p-4 rounded-2xl">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#78ad44] shadow-sm"><Settings size={20} /></div>
                <div><p className="text-xs text-gray-500 font-medium">Transmission</p><p className="font-bold text-gray-900">{MOCK_CAR.transmission}</p></div>
              </div>
            </div>
          </div>

          {/* Description & Features */}
          <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100">
             <div className="mb-10">
               <h3 className="text-2xl font-black text-gray-900 mb-6">Overview</h3>
               <p className="text-gray-600 leading-relaxed font-medium">
                 {MOCK_CAR.description}
               </p>
             </div>
             
             <div>
               <h3 className="text-2xl font-black text-gray-900 mb-6">Features Included</h3>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                 {MOCK_CAR.features.map(f => (
                   <div key={f} className="flex items-center gap-3">
                     <span className="w-6 h-6 rounded-full bg-[#e9f2eb] text-[#78ad44] flex items-center justify-center"><Check size={14} strokeWidth={3} /></span>
                     <span className="text-gray-700 font-bold text-sm tracking-wide">{f}</span>
                   </div>
                 ))}
               </div>
             </div>
          </div>

        </div>

        {/* Right Column: Sticky Booking Wrapper */}
        <aside className="w-full lg:w-[400px] shrink-0">
          <div className="sticky top-24 bg-white rounded-[2.5rem] p-8 shadow-2xl border border-gray-100 flex flex-col gap-6">
            <h3 className="text-2xl font-black text-gray-900 border-b border-gray-100 pb-4">Reservation</h3>
            
            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold text-gray-700 ml-2 mb-1.5 block">Pick-up Location</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input type="text" placeholder="Enter city or airport" className="w-full bg-[#f4f8f7] border-none rounded-2xl pl-12 pr-4 py-3.5 text-sm focus:ring-2 focus:ring-[#78ad44] outline-none text-gray-700 font-medium" />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-gray-700 ml-2 mb-1.5 block">Drop-off Location</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input type="text" placeholder="Enter city or airport" className="w-full bg-[#f4f8f7] border-none rounded-2xl pl-12 pr-4 py-3.5 text-sm focus:ring-2 focus:ring-[#78ad44] outline-none text-gray-700 font-medium" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                 <div>
                  <label className="text-xs font-bold text-gray-700 ml-2 mb-1.5 block">Pick-up Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input type="text" placeholder="Select date" className="w-full bg-[#f4f8f7] border-none rounded-2xl pl-12 pr-4 py-3.5 text-sm focus:ring-2 focus:ring-[#78ad44] outline-none text-gray-700 font-medium" />
                  </div>
                 </div>
                 <div>
                  <label className="text-xs font-bold text-gray-700 ml-2 mb-1.5 block">Drop-off Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input type="text" placeholder="Select date" className="w-full bg-[#f4f8f7] border-none rounded-2xl pl-12 pr-4 py-3.5 text-sm focus:ring-2 focus:ring-[#78ad44] outline-none text-gray-700 font-medium" />
                  </div>
                 </div>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-6 mt-2">
              <div className="flex justify-between items-center text-sm font-bold text-gray-600 mb-3">
                <span>Daily Rate</span>
                <span>${MOCK_CAR.price}</span>
              </div>
              <div className="flex justify-between items-center text-sm font-bold text-gray-600 mb-3">
                <span>Total Days</span>
                <span>3 days</span>
              </div>
              <div className="flex justify-between items-center text-lg font-black text-gray-900 mt-6 bg-[#f4f8f7] p-4 rounded-xl">
                <span>Estimated Total</span>
                <span className="text-[#78ad44]">${MOCK_CAR.price * 3}</span>
              </div>
            </div>

            <button 
              onClick={() => navigate(`/booking/${id || MOCK_CAR.id}`)}
              className="w-full bg-[#212529] hover:bg-[#111] text-white font-bold rounded-2xl py-4 transition-colors shadow-lg mt-2 flex justify-center items-center gap-2"
            >
              Continue to Book <ChevronRight size={18} />
            </button>
            <p className="text-xs text-center text-gray-400 font-medium">You won't be charged yet</p>
          </div>
        </aside>

      </div>

      <Footer />
    </div>
  );
}
