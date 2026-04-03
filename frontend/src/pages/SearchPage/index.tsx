import { useState, useMemo, useCallback } from 'react';
import { Search, MapPin, Calendar, Filter, ChevronDown } from 'lucide-react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import Header from '../LandingPage/Header';
import Footer from '../LandingPage/Footer';
import { MOCK_VEHICLES } from '@/data/mockVehicles';
import { VehicleCard } from '@/components/vehicle/VehicleCard';
import { useDebounce } from '@/hooks/useDebounce';

export default function SearchPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  
  const [priceRange, setPriceRange] = useState(300);
  // Debounce the price to avoid heavy re-filtering while sliding
  const debouncedPrice = useDebounce(priceRange, 300);

  // Auto-fill logic
  const now = new Date();
  const todayStr = now.toISOString().split('T')[0]; // yyyy-mm-dd
  const futureDate = new Date();
  futureDate.setDate(now.getDate() + 3);
  const futureStr = futureDate.toISOString().split('T')[0];

  // Round to nearest hour for default time
  const currentHour = now.getHours();
  const defaultTime = `${(currentHour + 1) % 12 || 12}:00 ${currentHour + 1 >= 12 ? 'PM' : 'AM'}`;

  const [pickupTime, setPickupTime] = useState(defaultTime);
  const [dropoffTime, setDropoffTime] = useState(defaultTime);

  const brandFilter = searchParams.get('brand');
  const categoryFilter = searchParams.get('category');

  // Filter with useMemo, depending on debounced price
  const filteredVehicles = useMemo(() => {
    return MOCK_VEHICLES.filter(car => {
      if (brandFilter && car.brand.toLowerCase() !== brandFilter.toLowerCase()) return false;
      if (categoryFilter && !car.type.toLowerCase().includes(categoryFilter.toLowerCase()) && !car.category?.toLowerCase().includes(categoryFilter.toLowerCase())) return false;
      if (car.price > debouncedPrice) return false;
      return true;
    });
  }, [brandFilter, categoryFilter, debouncedPrice]);

  // Memoize event handlers so Pure Components don't re-render
  const handleDetailsClick = useCallback((id: string) => {
    navigate(`/vehicles/${id}`);
  }, [navigate]);

  const handleBookClick = useCallback((id: string) => {
    navigate(`/booking/${id}`);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col font-sans">
      <Header />

      {/* Top Search Bar (Mini Hero) */}
      <div className="bg-[#212529] pt-28 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-black text-white mb-8 tracking-tight">
            {brandFilter ? `${brandFilter} Collection` : categoryFilter ? `${categoryFilter} Vehicles` : 'Find your perfect ride'}
          </h1>
          
          {(brandFilter || categoryFilter) && (
            <button 
              onClick={() => navigate('/search')}
              className="mb-6 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-2 w-fit"
            >
              Clear filters: <span className="text-[#78ad44]">{brandFilter || categoryFilter}</span> ✕
            </button>
          )}

          <div className="bg-white rounded-[2rem] p-4 flex flex-col lg:grid lg:grid-cols-12 gap-4 items-end shadow-2xl">
            <div className="lg:col-span-3 w-full relative group">
               <MapPin className="absolute left-6 top-1/2 -translate-y-1/2 text-[#78ad44]" size={20} />
               <input type="text" placeholder="Pick-up Location" className="w-full bg-[#f4f8f7] rounded-full py-4 pl-14 pr-6 focus:outline-none focus:ring-2 focus:ring-[#78ad44] text-gray-700 font-bold text-sm" />
            </div>
            
            <div className="lg:col-span-4 w-full flex bg-[#f4f8f7] rounded-full border border-transparent hover:border-gray-200 transition-all overflow-hidden relative">
              <div className="flex-1 relative flex items-center">
                 <input 
                  type="date" 
                  className="w-full bg-transparent py-4 pl-12 pr-2 focus:outline-none text-gray-700 text-sm font-bold cursor-pointer [color-scheme:light] caret-transparent select-none" 
                  defaultValue={todayStr} 
                  onClick={e => e.currentTarget.showPicker()}
                 />
                 <Calendar className="absolute left-5 top-1/2 -translate-y-1/2 text-[#78ad44] pointer-events-none" size={18} />
              </div>
              <div className="w-[1px] bg-gray-200 my-3"></div>
              <div className="w-32 relative">
                 <select 
                  value={pickupTime}
                  onChange={e => setPickupTime(e.target.value)}
                  className="w-full bg-transparent py-4 px-4 focus:outline-none text-gray-700 text-sm font-bold appearance-none cursor-pointer"
                 >
                   {['08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'].map(t => (
                     <option key={t} value={t}>{t}</option>
                   ))}
                 </select>
              </div>
            </div>

            <div className="lg:col-span-4 w-full flex bg-[#f4f8f7] rounded-full border border-transparent hover:border-gray-200 transition-all overflow-hidden relative">
              <div className="flex-1 relative flex items-center">
                 <input 
                  type="date" 
                  className="w-full bg-transparent py-4 pl-12 pr-2 focus:outline-none text-gray-700 text-sm font-bold cursor-pointer [color-scheme:light] caret-transparent select-none" 
                  defaultValue={futureStr} 
                  onClick={e => e.currentTarget.showPicker()}
                 />
                 <Calendar className="absolute left-5 top-1/2 -translate-y-1/2 text-[#78ad44] pointer-events-none" size={18} />
              </div>
              <div className="w-[1px] bg-gray-200 my-3"></div>
              <div className="w-32 relative">
                 <select 
                  value={dropoffTime}
                  onChange={e => setDropoffTime(e.target.value)}
                  className="w-full bg-transparent py-4 px-4 focus:outline-none text-gray-700 text-sm font-bold appearance-none cursor-pointer"
                 >
                   {['08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'].map(t => (
                     <option key={t} value={t}>{t}</option>
                   ))}
                 </select>
              </div>
            </div>

            <button className="lg:col-span-1 w-full bg-[#78ad44] hover:bg-[#689938] text-white p-4 rounded-full font-bold transition-all shadow-md flex items-center justify-center shrink-0">
              <Search size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content: Sidebar + Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col lg:flex-row gap-10 w-full flex-1">
        
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-72 shrink-0 space-y-8">
          
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-gray-900">Filters</h3>
              <Filter size={18} className="text-gray-400" />
            </div>

            {/* Price Filter */}
            <div className="mb-8">
              <label className="text-sm font-semibold text-gray-700 block mb-4 flex justify-between">
                <span>Max Price</span>
                <span className="text-[#78ad44]">${priceRange}/day</span>
              </label>
              <input 
                type="range" 
                min="50" 
                max="500" 
                step="10" 
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#78ad44]"
              />
            </div>

            {/* Category Filter */}
            <div className="mb-8">
              <h4 className="text-sm font-semibold text-gray-700 mb-4 block">Categories</h4>
              <div className="space-y-3">
                {['Luxury', 'SUV', 'Sports', 'Convertible', 'Electric'].map(c => (
                  <label key={c} className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-[#78ad44] focus:ring-[#78ad44] cursor-pointer" />
                    <span className="text-gray-600 group-hover:text-gray-900 text-sm font-medium">{c}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Transmission Filter */}
            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-4 block">Transmission</h4>
              <div className="space-y-3">
                {['Automatic', 'Manual'].map(c => (
                  <label key={c} className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-[#78ad44] focus:ring-[#78ad44] cursor-pointer" />
                    <span className="text-gray-600 group-hover:text-gray-900 text-sm font-medium">{c}</span>
                  </label>
                ))}
              </div>
            </div>
            
          </div>
        </aside>

        {/* Vehicle Grid */}
        <div className="flex-1 overflow-hidden">
          <div className="flex justify-between items-center mb-8">
            <p className="text-gray-500 font-medium">Showing <span className="text-gray-900 font-bold">{filteredVehicles.length}</span> vehicles</p>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Sort by:</span>
              <button className="flex items-center gap-1 font-bold text-gray-900 bg-white px-4 py-2 rounded-xl shadow-sm border border-gray-100 hover:bg-gray-50">
                Recommended <ChevronDown size={16} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredVehicles.map((car) => (
                <motion.div
                  key={car.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <VehicleCard 
                    car={car} 
                    onDetailsClick={handleDetailsClick} 
                    onBookClick={handleBookClick} 
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <AnimatePresence>
            {filteredVehicles.length === 0 && (
               <motion.div 
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 exit={{ opacity: 0, scale: 0.9 }}
                 className="bg-white rounded-[2rem] p-12 text-center shadow-sm border border-gray-100 mt-8"
               >
                  <div className="w-20 h-20 bg-[#f4f8f7] rounded-full flex items-center justify-center mx-auto mb-6 text-[#78ad44]">
                    <Search size={40} />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-2">No vehicles found</h3>
                  <p className="text-gray-500 mb-8 max-w-sm mx-auto">We couldn't find any vehicles matching your current filters. Try adjusting your search or clearing filters.</p>
                  <button 
                    onClick={() => {
                      setPriceRange(500);
                      navigate('/search');
                    }}
                    className="bg-[#78ad44] text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-[#78ad44]/20"
                  >
                    Clear All Filters
                  </button>
               </motion.div>
            )}
          </AnimatePresence>

          {/* Pagination (Dummy) */}
          {filteredVehicles.length > 0 && (
            <div className="flex justify-center mt-12 gap-2">
              <button className="w-10 h-10 rounded-full bg-[#78ad44] text-white font-bold shadow-md">1</button>
              <button className="w-10 h-10 rounded-full bg-white text-gray-600 font-bold hover:bg-gray-100 shadow-sm border border-gray-100">2</button>
              <button className="w-10 h-10 rounded-full bg-white text-gray-600 font-bold hover:bg-gray-100 shadow-sm border border-gray-100">3</button>
            </div>
          )}
        </div>

      </div>

      <Footer />
    </div>
  );
}
