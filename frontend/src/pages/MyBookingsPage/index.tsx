import Header from '../LandingPage/Header';
import Footer from '../LandingPage/Footer';
import CustomerSidebar from '@/components/layout/CustomerSidebar';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MOCK_BOOKINGS = [
  {
    id: 'RC-84729',
    car: 'Mercedes-Benz S-Class',
    image: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=300&auto=format&fit=crop',
    startDate: 'Oct 24, 2024',
    endDate: 'Oct 27, 2024',
    location: 'JFK Airport, New York',
    status: 'Upcoming',
    price: 585
  },
  {
    id: 'RC-49210',
    car: 'Tesla Model 3',
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=300&auto=format&fit=crop',
    startDate: 'Sep 10, 2024',
    endDate: 'Sep 12, 2024',
    location: 'Downtown LA, California',
    status: 'Completed',
    price: 320
  },
  {
    id: 'RC-10394',
    car: 'BMW X5',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=300&auto=format&fit=crop',
    startDate: 'Jul 05, 2024',
    endDate: 'Jul 08, 2024',
    location: 'Miami Beach, Florida',
    status: 'Cancelled',
    price: 450
  }
];

export default function MyBookingsPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col font-sans">
      <Header />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full flex-1 flex flex-col lg:flex-row gap-10">
        
        <CustomerSidebar />
        
        <div className="flex-1 space-y-8">
          <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-gray-100 min-h-full">
            <h2 className="text-2xl font-black text-gray-900 mb-8 border-b border-gray-100 pb-4">My Bookings</h2>
            
            <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
              <button className="px-6 py-2.5 rounded-full bg-[#212529] text-white font-bold text-sm shrink-0 shadow-md">All Bookings</button>
              <button className="px-6 py-2.5 rounded-full bg-[#f4f8f7] text-gray-600 hover:text-gray-900 font-bold text-sm shrink-0 transition-colors">Upcoming</button>
              <button className="px-6 py-2.5 rounded-full bg-[#f4f8f7] text-gray-600 hover:text-gray-900 font-bold text-sm shrink-0 transition-colors">Completed</button>
              <button className="px-6 py-2.5 rounded-full bg-[#f4f8f7] text-gray-600 hover:text-gray-900 font-bold text-sm shrink-0 transition-colors">Cancelled</button>
            </div>

            <div className="space-y-6">
              {MOCK_BOOKINGS.map(booking => (
                <div key={booking.id} className="border border-gray-100 rounded-[1.5rem] p-4 flex flex-col sm:flex-row gap-6 hover:shadow-lg transition-shadow bg-white">
                  <div className="w-full sm:w-48 h-32 shrink-0 rounded-xl overflow-hidden relative">
                    <img src={booking.image} alt={booking.car} className="w-full h-full object-cover" />
                    <div className={`absolute top-2 left-2 px-3 py-1 rounded-lg text-xs font-black uppercase tracking-wider ${booking.status === 'Upcoming' ? 'bg-[#78ad44] text-white' : booking.status === 'Completed' ? 'bg-gray-800 text-white' : 'bg-red-500 text-white'}`}>
                      {booking.status}
                    </div>
                  </div>
                  
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-black text-gray-900">{booking.car}</h3>
                        <span className="text-lg font-black text-[#78ad44]">${booking.price}</span>
                      </div>
                      <p className="text-xs font-bold text-gray-400 mb-3 uppercase tracking-wider">Booking ID: {booking.id}</p>
                      
                      <div className="flex flex-col sm:flex-row gap-x-6 gap-y-2 text-sm text-gray-600 font-medium">
                        <div className="flex items-center gap-2"><Calendar size={16} className="text-[#78ad44]" /> {booking.startDate} - {booking.endDate}</div>
                        <div className="flex items-center gap-2"><MapPin size={16} className="text-[#78ad44]" /> {booking.location}</div>
                      </div>
                    </div>
                    
                    <div className="mt-4 sm:mt-0 flex justify-end">
                      <button 
                        onClick={() => navigate(`/my-bookings/${booking.id}`)}
                        className="text-sm font-bold bg-[#f4f8f7] hover:bg-gray-100 text-gray-900 px-5 py-2.5 rounded-xl transition-colors flex items-center gap-1"
                      >
                        View Details <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
}
