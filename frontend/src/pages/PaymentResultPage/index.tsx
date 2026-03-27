import { useNavigate } from 'react-router-dom';
import Header from '../LandingPage/Header';
import Footer from '../LandingPage/Footer';
import { CheckCircle2, Copy, FileText } from 'lucide-react';
import { toast } from 'sonner';

export default function PaymentResultPage() {
  const navigate = useNavigate();
  const bookingCode = '#RC-' + Math.floor(10000 + Math.random() * 90000);

  const copyCode = () => {
    navigator.clipboard.writeText(bookingCode);
    toast.success('Booking code copied to clipboard!');
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col font-sans">
      <Header />

      <div className="flex-1 flex items-center justify-center py-32 px-4">
        <div className="max-w-xl w-full bg-white rounded-[2.5rem] p-10 md:p-12 shadow-xl border border-gray-100 text-center relative overflow-hidden">
          
          {/* Confetti BG effect */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#B4D581] opacity-20 blur-3xl rounded-full"></div>
          <div className="absolute top-1/2 -left-24 w-48 h-48 bg-[#49B096] opacity-10 blur-3xl rounded-full"></div>

          <div className="relative z-10">
            <div className="w-24 h-24 bg-[#e9f2eb] rounded-full mx-auto flex items-center justify-center mb-8 border-4 border-white shadow-lg">
              <CheckCircle2 size={48} className="text-[#78ad44]" />
            </div>
            
            <h1 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight mb-4">Payment Successful!</h1>
            <p className="text-gray-500 font-medium mb-8 leading-relaxed max-w-sm mx-auto">
              Your reservation has been confirmed. A confirmation email has been sent to <span className="text-gray-900 font-bold">johndoe@example.com</span>.
            </p>

            <div className="bg-[#f4f8f7] p-6 rounded-3xl mb-10 flex flex-col md:flex-row items-center justify-between gap-4 border border-gray-100">
              <div className="text-left">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Booking Reference</p>
                <p className="text-2xl font-black text-[#78ad44] tracking-wider">{bookingCode}</p>
              </div>
              <button 
                onClick={copyCode}
                className="w-full md:w-auto flex items-center justify-center gap-2 bg-white text-gray-600 hover:text-gray-900 font-bold px-4 py-2.5 rounded-xl shadow-sm border border-gray-200 transition-colors"
              >
                <Copy size={16} /> Copy
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/my-bookings')}
                className="flex-1 shrink-0 px-8 py-4 bg-[#212529] hover:bg-[#111] text-white font-bold rounded-2xl transition-colors shadow-lg flex items-center justify-center gap-2"
              >
                <FileText size={18} /> View My Bookings
              </button>
              <button 
                onClick={() => navigate('/')}
                className="flex-1 shrink-0 px-8 py-4 bg-white hover:bg-gray-50 text-gray-700 font-bold rounded-2xl transition-colors border-2 border-gray-200 flex items-center justify-center gap-2"
              >
                Back to Home
              </button>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
