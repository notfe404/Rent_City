import { useParams, useNavigate } from 'react-router-dom';
import Header from '../LandingPage/Header';
import Footer from '../LandingPage/Footer';
import { ChevronLeft, Calendar, MapPin, Download, CheckCircle2, Ticket } from 'lucide-react';

const MOCK_BOOKING = {
  id: 'RC-84729',
  car: 'Mercedes-Benz S-Class',
  image: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=600&auto=format&fit=crop',
  status: 'Upcoming',
  paymentStatus: 'Paid',
  startDate: 'Oct 24, 2024 - 10:00 AM',
  endDate: 'Oct 27, 2024 - 10:00 AM',
  pickup: 'JFK Airport, New York',
  dropoff: 'JFK Airport, New York',
  price: 585,
  customer: {
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '+1 234 567 890'
  },
  extras: ['Full Protection Insurance']
};

export default function BookingDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col font-sans">
      <Header />

      <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full flex-1">
        
        <button 
          onClick={() => navigate('/my-bookings')}
          className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-gray-900 mb-8 transition-colors"
        >
          <ChevronLeft size={16} /> Back to My Bookings
        </button>

        <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden">
          
          {/* Header Section */}
          <div className="bg-[#212529] p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 bg-[#78ad44] text-white text-xs font-black uppercase tracking-wider rounded-lg">
                  {MOCK_BOOKING.status}
                </span>
                <span className="text-gray-400 font-bold text-sm">Booking ID: <span className="text-white">{id || MOCK_BOOKING.id}</span></span>
              </div>
              <h1 className="text-3xl font-black text-white">{MOCK_BOOKING.car}</h1>
            </div>
            <button className="flex items-center gap-2 bg-[#343A40] hover:bg-[#495057] text-white px-5 py-3 rounded-xl font-bold transition-colors text-sm">
              <Download size={16} /> Download Invoice
            </button>
          </div>

          <div className="p-8 md:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              
              {/* Left Col - Details */}
              <div className="lg:col-span-2 space-y-8">
                
                <section>
                  <h3 className="text-lg font-black text-gray-900 mb-6 border-b border-gray-100 pb-2">Rental Period & Location</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-[#f4f8f7] p-6 rounded-2xl">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm"><MapPin size={14} className="text-[#78ad44]" /></div>
                        <div>
                          <p className="text-xs font-bold text-gray-400">Pick-up Location</p>
                          <p className="text-sm font-bold text-gray-900">{MOCK_BOOKING.pickup}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm"><Calendar size={14} className="text-[#78ad44]" /></div>
                        <div>
                          <p className="text-xs font-bold text-gray-400">Pick-up Time</p>
                          <p className="text-sm font-bold text-gray-900">{MOCK_BOOKING.startDate}</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm"><MapPin size={14} className="text-gray-400" /></div>
                        <div>
                          <p className="text-xs font-bold text-gray-400">Drop-off Location</p>
                          <p className="text-sm font-bold text-gray-900">{MOCK_BOOKING.dropoff}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm"><Calendar size={14} className="text-gray-400" /></div>
                        <div>
                          <p className="text-xs font-bold text-gray-400">Drop-off Time</p>
                          <p className="text-sm font-bold text-gray-900">{MOCK_BOOKING.endDate}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-lg font-black text-gray-900 mb-6 border-b border-gray-100 pb-2">Customer Details</h3>
                  <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm">
                    <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                      <div><p className="text-xs font-bold text-gray-400 mb-1">Full Name</p><p className="text-sm font-black text-gray-900">{MOCK_BOOKING.customer.name}</p></div>
                      <div><p className="text-xs font-bold text-gray-400 mb-1">Email Address</p><p className="text-sm font-black text-gray-900">{MOCK_BOOKING.customer.email}</p></div>
                      <div><p className="text-xs font-bold text-gray-400 mb-1">Phone Number</p><p className="text-sm font-black text-gray-900">{MOCK_BOOKING.customer.phone}</p></div>
                      <div><p className="text-xs font-bold text-gray-400 mb-1">Payment Status</p><p className="text-sm font-black text-[#78ad44] flex items-center gap-1"><CheckCircle2 size={16} /> {MOCK_BOOKING.paymentStatus}</p></div>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-lg font-black text-gray-900 mb-6 border-b border-gray-100 pb-2">Selected Extras</h3>
                  <div className="space-y-3">
                    {MOCK_BOOKING.extras.map(e => (
                      <div key={e} className="flex items-center gap-3 bg-[#f4f8f7] p-4 rounded-xl">
                        <CheckCircle2 size={18} className="text-[#78ad44]" />
                        <span className="text-sm font-bold text-gray-900">{e}</span>
                      </div>
                    ))}
                  </div>
                </section>

              </div>

              {/* Right Col - Receipt & Actions */}
              <div className="space-y-6">
                <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                  <img src={MOCK_BOOKING.image} alt={MOCK_BOOKING.car} className="w-full h-48 object-cover" />
                  <div className="p-6 bg-[#f4f8f7]">
                    <h4 className="text-sm font-black text-gray-900 mb-4 border-b border-gray-200 pb-2 flex items-center gap-2"><Ticket size={16} /> Receipt Breakdown</h4>
                    <div className="space-y-3 text-sm font-medium text-gray-600 mb-6">
                      <div className="flex justify-between"><span>Rental Rate (3 days)</span><span className="font-bold text-gray-900">$450</span></div>
                      <div className="flex justify-between"><span>Insurance</span><span className="font-bold text-gray-900">$90</span></div>
                      <div className="flex justify-between"><span>Taxes</span><span className="font-bold text-gray-900">$45</span></div>
                    </div>
                    <div className="pt-4 border-t border-gray-200 flex justify-between items-center bg-white p-4 rounded-xl shadow-sm">
                      <span className="font-bold text-gray-500 text-sm">Total Paid</span>
                      <span className="font-black text-2xl text-[#78ad44]">${MOCK_BOOKING.price}</span>
                    </div>
                  </div>
                </div>

                {MOCK_BOOKING.status === 'Upcoming' && (
                  <button className="w-full text-red-500 font-bold border-2 border-red-100 hover:bg-red-50 py-4 rounded-xl transition-colors">
                    Cancel Booking
                  </button>
                )}
              </div>

            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
