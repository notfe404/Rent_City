import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../LandingPage/Header';
import Footer from '../LandingPage/Footer';
import { ChevronRight, Check, MapPin, Calendar, Shield } from 'lucide-react';

const MOCK_CAR = {
  id: '1',
  name: 'Mercedes-Benz S-Class',
  price: 150,
  image: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=600&auto=format&fit=crop',
};

function Stepper({ step }: { step: number }) {
  return (
    <div className="flex items-center justify-center max-w-2xl mx-auto mb-12">
      <div className="flex items-center w-full">
        {/* Step 1 */}
        <div className={`flex flex-col items-center relative z-10 ${step >= 1 ? 'text-[#78ad44]' : 'text-gray-400'}`}>
          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold mb-2 transition-colors ${step >= 1 ? 'bg-[#78ad44] text-white shadow-lg shadow-[#78ad44]/30' : 'bg-gray-200 text-gray-500'}`}>
            {step > 1 ? <Check size={18} /> : '1'}
          </div>
          <span className="text-xs font-bold uppercase tracking-wider">Details</span>
        </div>
        
        <div className={`flex-1 h-1 mx-4 rounded-full transition-colors ${step >= 2 ? 'bg-[#78ad44]' : 'bg-gray-200'}`}></div>
        
        {/* Step 2 */}
        <div className={`flex flex-col items-center relative z-10 ${step >= 2 ? 'text-[#78ad44]' : 'text-gray-400'}`}>
          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold mb-2 transition-colors ${step >= 2 ? 'bg-[#78ad44] text-white shadow-lg shadow-[#78ad44]/30' : 'bg-gray-200 text-gray-500'}`}>
             {step > 2 ? <Check size={18} /> : '2'}
          </div>
          <span className="text-xs font-bold uppercase tracking-wider">Confirm</span>
        </div>

        <div className={`flex-1 h-1 mx-4 rounded-full transition-colors ${step >= 3 ? 'bg-[#78ad44]' : 'bg-gray-200'}`}></div>

        {/* Step 3 */}
        <div className={`flex flex-col items-center relative z-10 ${step >= 3 ? 'text-[#78ad44]' : 'text-gray-400'}`}>
          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold mb-2 transition-colors ${step >= 3 ? 'bg-[#78ad44] text-white shadow-lg shadow-[#78ad44]/30' : 'bg-gray-200 text-gray-500'}`}>
            3
          </div>
          <span className="text-xs font-bold uppercase tracking-wider">Payment</span>
        </div>
      </div>
    </div>
  );
}

export default function BookingPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [extras, setExtras] = useState({
    insurance: true,
    childSeat: false,
    gps: false
  });

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col font-sans">
      <Header />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full flex-1">
        
        <Stepper step={1} />
        
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Main Form */}
          <div className="flex-1 w-full space-y-8">
            
            {/* Driver Details */}
            <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-black text-gray-900 mb-6">Driver Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-bold text-gray-700 ml-2 mb-2 block">First Name</label>
                  <input type="text" defaultValue="John" className="w-full bg-[#f4f8f7] border-none rounded-2xl px-5 py-3.5 text-sm focus:ring-2 focus:ring-[#78ad44] outline-none text-gray-700 font-medium" />
                </div>
                <div>
                  <label className="text-sm font-bold text-gray-700 ml-2 mb-2 block">Last Name</label>
                  <input type="text" defaultValue="Doe" className="w-full bg-[#f4f8f7] border-none rounded-2xl px-5 py-3.5 text-sm focus:ring-2 focus:ring-[#78ad44] outline-none text-gray-700 font-medium" />
                </div>
                <div>
                  <label className="text-sm font-bold text-gray-700 ml-2 mb-2 block">Email Address</label>
                  <input type="email" defaultValue="johndoe@example.com" className="w-full bg-[#f4f8f7] border-none rounded-2xl px-5 py-3.5 text-sm focus:ring-2 focus:ring-[#78ad44] outline-none text-gray-700 font-medium" />
                </div>
                <div>
                  <label className="text-sm font-bold text-gray-700 ml-2 mb-2 block">Phone Number</label>
                  <input type="text" defaultValue="+1 234 567 890" className="w-full bg-[#f4f8f7] border-none rounded-2xl px-5 py-3.5 text-sm focus:ring-2 focus:ring-[#78ad44] outline-none text-gray-700 font-medium" />
                </div>
              </div>
            </div>

            {/* Extras */}
            <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-black text-gray-900 mb-6">Extras & Add-ons</h2>
              <div className="space-y-4">
                
                <label className={`flex items-start p-5 rounded-2xl border-2 cursor-pointer transition-all ${extras.insurance ? 'border-[#78ad44] bg-[#f4f8f7]' : 'border-gray-100 hover:border-gray-200'}`}>
                  <input type="checkbox" checked={extras.insurance} onChange={(e) => setExtras({...extras, insurance: e.target.checked})} className="mt-1 w-5 h-5 rounded border-gray-300 text-[#78ad44] focus:ring-[#78ad44] accent-[#78ad44] cursor-pointer" />
                  <div className="ml-4 flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-gray-900 flex items-center gap-2"><Shield size={18} className="text-[#78ad44]"/> Full Protection Insurance</span>
                      <span className="font-black text-[#78ad44]">$30 / day</span>
                    </div>
                    <p className="text-sm text-gray-500 font-medium">Cover all damages and theft with 0 excess. Travel with peace of mind.</p>
                  </div>
                </label>

                <label className={`flex items-start p-5 rounded-2xl border-2 cursor-pointer transition-all ${extras.childSeat ? 'border-[#78ad44] bg-[#f4f8f7]' : 'border-gray-100 hover:border-gray-200'}`}>
                  <input type="checkbox" checked={extras.childSeat} onChange={(e) => setExtras({...extras, childSeat: e.target.checked})} className="mt-1 w-5 h-5 rounded border-gray-300 text-[#78ad44] focus:ring-[#78ad44] accent-[#78ad44] cursor-pointer" />
                  <div className="ml-4 flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-gray-900">Child Seat (Infant/Toddler)</span>
                      <span className="font-black text-[#78ad44]">$15 / day</span>
                    </div>
                    <p className="text-sm text-gray-500 font-medium">Safe and comfortable seating for children up to 4 years old.</p>
                  </div>
                </label>

              </div>
            </div>

          </div>

          {/* Sidebar Summary */}
          <aside className="w-full lg:w-[400px] shrink-0">
            <div className="sticky top-24 bg-white rounded-[2.5rem] p-6 shadow-xl border border-gray-100 flex flex-col gap-6">
              <h3 className="text-xl font-black text-gray-900 border-b border-gray-100 pb-4 px-2">Order Summary</h3>
              
              <div className="flex gap-4 items-center bg-[#f4f8f7] p-3 rounded-2xl">
                <img src={MOCK_CAR.image} alt="car" className="w-24 h-16 object-cover rounded-xl shadow-sm" />
                <div>
                  <h4 className="font-black text-gray-900">{MOCK_CAR.name}</h4>
                  <p className="text-xs text-gray-500 font-bold mt-1">Luxury Sedan</p>
                </div>
              </div>

              <div className="space-y-4 px-2">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#f4f8f7] flex items-center justify-center shrink-0 mt-0.5"><MapPin size={14} className="text-[#78ad44]" /></div>
                  <div>
                    <p className="text-xs font-bold text-gray-400">Pick-up</p>
                    <p className="text-sm font-bold text-gray-900">JFK Airport, New York</p>
                    <p className="text-xs text-gray-500 mt-0.5">Oct 24, 2024 - 10:00 AM</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#f4f8f7] flex items-center justify-center shrink-0 mt-0.5"><Calendar size={14} className="text-[#78ad44]" /></div>
                  <div>
                    <p className="text-xs font-bold text-gray-400">Drop-off</p>
                    <p className="text-sm font-bold text-gray-900">JFK Airport, New York</p>
                    <p className="text-xs text-gray-500 mt-0.5">Oct 27, 2024 - 10:00 AM</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-5 px-2">
                <div className="flex justify-between items-center text-sm font-bold text-gray-600 mb-3">
                  <span>Car Rental (3 days)</span>
                  <span>${MOCK_CAR.price * 3}</span>
                </div>
                {extras.insurance && (
                  <div className="flex justify-between items-center text-sm font-bold text-gray-600 mb-3">
                    <span>Full Insurance</span>
                    <span>$90</span>
                  </div>
                )}
                {extras.childSeat && (
                  <div className="flex justify-between items-center text-sm font-bold text-gray-600 mb-3">
                    <span>Child Seat</span>
                    <span>$45</span>
                  </div>
                )}
                <div className="flex justify-between items-center text-sm font-bold text-gray-600 mb-3">
                  <span>Taxes & Fees</span>
                  <span>$45</span>
                </div>
                
                <div className="flex justify-between items-center text-lg font-black text-gray-900 mt-6 bg-[#212529] text-white p-4 rounded-xl">
                  <span>Total</span>
                  <span className="text-[#78ad44]">${(MOCK_CAR.price * 3) + 45 + (extras.insurance ? 90 : 0) + (extras.childSeat ? 45 : 0)}</span>
                </div>
              </div>

              <button 
                onClick={() => navigate(`/booking/${id || MOCK_CAR.id}/confirm`)}
                className="w-full bg-[#78ad44] hover:bg-[#689938] text-white font-bold rounded-2xl py-4 transition-colors shadow-lg shadow-[#78ad44]/30 mt-2 flex justify-center items-center gap-2"
              >
                Proceed to Confirm <ChevronRight size={18} />
              </button>
            </div>
          </aside>

        </div>
      </div>

      <Footer />
    </div>
  );
}
