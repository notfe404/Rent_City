import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../LandingPage/Header';
import Footer from '../LandingPage/Footer';
import { ChevronRight, Check, CreditCard, Shield } from 'lucide-react';

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
        <div className={`flex flex-col items-center relative z-10 ${step >= 1 ? 'text-[#78ad44]' : 'text-gray-400'}`}>
          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold mb-2 transition-colors ${step >= 1 ? 'bg-[#78ad44] text-white shadow-lg shadow-[#78ad44]/30' : 'bg-gray-200 text-gray-500'}`}>
            {step > 1 ? <Check size={18} /> : '1'}
          </div>
          <span className="text-xs font-bold uppercase tracking-wider">Details</span>
        </div>
        
        <div className={`flex-1 h-1 mx-4 rounded-full transition-colors ${step >= 2 ? 'bg-[#78ad44]' : 'bg-gray-200'}`}></div>
        
        <div className={`flex flex-col items-center relative z-10 ${step >= 2 ? 'text-[#78ad44]' : 'text-gray-400'}`}>
          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold mb-2 transition-colors ${step >= 2 ? 'bg-[#78ad44] text-white shadow-lg shadow-[#78ad44]/30' : 'bg-gray-200 text-gray-500'}`}>
             {step > 2 ? <Check size={18} /> : '2'}
          </div>
          <span className="text-xs font-bold uppercase tracking-wider">Confirm</span>
        </div>

        <div className={`flex-1 h-1 mx-4 rounded-full transition-colors ${step >= 3 ? 'bg-[#78ad44]' : 'bg-gray-200'}`}></div>

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

export default function PaymentPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [method, setMethod] = useState<'card'|'paypal'>('card');
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      navigate(`/booking/${id || MOCK_CAR.id}/result`);
    }, 2000); // fake processing time
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col font-sans">
      <Header />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full flex-1">
        
        <Stepper step={3} />
        
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Main Content */}
          <div className="flex-1 w-full space-y-8">
            
            <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100">
              <h2 className="text-3xl font-black text-gray-900 mb-6">Payment Method</h2>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <button 
                  onClick={() => setMethod('card')}
                  className={`p-4 rounded-2xl border-2 font-bold flex flex-col items-center justify-center gap-2 transition-all ${method === 'card' ? 'border-[#78ad44] bg-[#f4f8f7] text-[#78ad44]' : 'border-gray-100 hover:border-gray-200 text-gray-400 hover:text-gray-600'}`}
                >
                  <CreditCard size={28} />
                  Credit Card
                </button>
                <button 
                  onClick={() => setMethod('paypal')}
                  className={`p-4 rounded-2xl border-2 font-bold flex flex-col items-center justify-center gap-2 transition-all ${method === 'paypal' ? 'border-[#78ad44] bg-[#f4f8f7] text-[#78ad44]' : 'border-gray-100 hover:border-gray-200 text-gray-400 hover:text-gray-600'}`}
                >
                  <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M7 11.5V6a2 2 0 0 1 2-2h6.5l-2.5 11h-4l-1-4h-2m5.5-5H17l-2.5 11h-4" /></svg>
                  PayPal
                </button>
              </div>

              {method === 'card' && (
                <div className="space-y-4 animate-in fade-in duration-500">
                  <div>
                    <label className="text-sm font-bold text-gray-700 ml-2 mb-2 block">Card Number</label>
                    <div className="relative">
                      <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                      <input type="text" placeholder="0000 0000 0000 0000" className="w-full bg-[#f4f8f7] border-none rounded-2xl pl-12 pr-4 py-3.5 text-sm focus:ring-2 focus:ring-[#78ad44] outline-none text-gray-700 font-medium font-mono" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-bold text-gray-700 ml-2 mb-2 block">Expiry Date</label>
                      <input type="text" placeholder="MM/YY" className="w-full bg-[#f4f8f7] border-none rounded-2xl px-5 py-3.5 text-sm focus:ring-2 focus:ring-[#78ad44] outline-none text-gray-700 font-medium font-mono" />
                    </div>
                    <div>
                      <label className="text-sm font-bold text-gray-700 ml-2 mb-2 block">CVC</label>
                      <input type="text" placeholder="123" className="w-full bg-[#f4f8f7] border-none rounded-2xl px-5 py-3.5 text-sm focus:ring-2 focus:ring-[#78ad44] outline-none text-gray-700 font-medium font-mono" />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-bold text-gray-700 ml-2 mb-2 block">Cardholder Name</label>
                    <input type="text" placeholder="JOHN DOE" className="w-full bg-[#f4f8f7] border-none rounded-2xl px-5 py-3.5 text-sm focus:ring-2 focus:ring-[#78ad44] outline-none text-gray-700 font-medium uppercase" />
                  </div>
                </div>
              )}

              {method === 'paypal' && (
                <div className="space-y-6 animate-in fade-in slide-in-from-top-4 duration-500">
                  <div className="p-6 bg-[#f4f8f7] rounded-[2rem] border border-gray-100">
                    <div className="flex items-center justify-center mb-6">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-8" />
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-bold text-gray-700 ml-2 mb-2 block">PayPal Email</label>
                        <input type="email" placeholder="email@example.com" className="w-full bg-white border-none rounded-2xl px-5 py-3.5 text-sm focus:ring-2 focus:ring-[#78ad44] outline-none text-gray-700 font-medium shadow-sm" />
                      </div>
                      
                      <div>
                        <label className="text-sm font-bold text-gray-700 ml-2 mb-2 block">Password</label>
                        <input type="password" placeholder="••••••••" className="w-full bg-white border-none rounded-2xl px-5 py-3.5 text-sm focus:ring-2 focus:ring-[#78ad44] outline-none text-gray-700 font-medium shadow-sm" />
                      </div>
                    </div>

                    <div className="mt-6 text-center">
                      <p className="text-xs text-gray-400 font-bold">You will be redirected to PayPal's secure gateway after clicking the pay button to authorize this transaction.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>

          {/* Sidebar Summary */}
          <aside className="w-full lg:w-[400px] shrink-0">
            <div className="sticky top-24 bg-white rounded-[2.5rem] p-6 shadow-xl border border-gray-100 flex flex-col gap-6">
              <h3 className="text-xl font-black text-gray-900 border-b border-gray-100 pb-4 px-2">Final Summary</h3>
              
              <div className="flex gap-4 items-center bg-[#f4f8f7] p-3 rounded-2xl">
                <img src={MOCK_CAR.image} alt="car" className="w-24 h-16 object-cover rounded-xl shadow-sm" />
                <div>
                  <h4 className="font-black text-gray-900">{MOCK_CAR.name}</h4>
                  <p className="text-xs text-gray-500 font-bold mt-1">Luxury Sedan</p>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-5 px-2">
                <div className="flex justify-between items-center text-lg font-black text-gray-900 mt-2 bg-[#212529] text-white p-4 rounded-xl">
                  <span>Pay Now</span>
                  <span className="text-[#78ad44]">$585</span>
                </div>
              </div>

              <button 
                onClick={handlePayment}
                disabled={isProcessing}
                className={`w-full text-white font-bold rounded-2xl py-4 transition-colors shadow-lg mt-2 flex justify-center items-center gap-2 ${isProcessing ? 'bg-gray-400 cursor-wait shadow-none' : 'bg-[#78ad44] hover:bg-[#689938] shadow-[#78ad44]/30'}`}
              >
                {isProcessing ? 'Processing Securely...' : `Pay $585`} {!isProcessing && <ChevronRight size={18} />}
              </button>
              
              <div className="flex items-center justify-center gap-2 text-xs font-bold text-gray-400">
                <Shield size={14} /> Secure AES-256 Encryption
              </div>
            </div>
          </aside>

        </div>
      </div>

      <Footer />
    </div>
  );
}
