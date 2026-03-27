import AdminLayout from '@/components/layout/AdminLayout';
import { Plus, Search, Filter, MoreHorizontal, Edit, Trash2 } from 'lucide-react';

const MOCK_VEHICLES = [
  { id: '1', name: 'Mercedes-Benz S-Class', category: 'Luxury Sedan', price: 150, status: 'Available', trips: 45, rating: 4.9 },
  { id: '2', name: 'Tesla Model 3', category: 'Electric', price: 80, status: 'Rented', trips: 128, rating: 4.8 },
  { id: '3', name: 'Range Rover Sport', category: 'SUV', price: 120, status: 'Maintenance', trips: 32, rating: 4.7 },
  { id: '4', name: 'Porsche 911', category: 'Sports', price: 200, status: 'Available', trips: 18, rating: 5.0 },
  { id: '5', name: 'Toyota Camry', category: 'Sedan', price: 40, status: 'Rented', trips: 310, rating: 4.5 },
];

export default function AdminVehiclesPage() {
  return (
    <AdminLayout title="Vehicles Management">
      
      {/* Toolbar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="relative flex-1 md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search vehicles..." 
              className="w-full pl-12 pr-4 py-3 bg-white border border-gray-100 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#78ad44]"
            />
          </div>
          <button className="flex items-center gap-2 bg-white border border-gray-100 text-gray-600 px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors font-bold text-sm shadow-sm">
            <Filter size={16} /> Filters
          </button>
        </div>
        <button className="w-full md:w-auto flex items-center justify-center gap-2 bg-[#78ad44] hover:bg-[#689938] text-white px-6 py-3 rounded-xl font-bold transition-all shadow-md shadow-[#78ad44]/20">
          <Plus size={18} /> Add New Vehicle
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-[1.5rem] border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#f4f8f7] border-b border-gray-100">
                <th className="p-5 text-xs font-black text-gray-400 uppercase tracking-wider">Vehicle</th>
                <th className="p-5 text-xs font-black text-gray-400 uppercase tracking-wider">Category</th>
                <th className="p-5 text-xs font-black text-gray-400 uppercase tracking-wider">Price/Day</th>
                <th className="p-5 text-xs font-black text-gray-400 uppercase tracking-wider">Status</th>
                <th className="p-5 text-xs font-black text-gray-400 uppercase tracking-wider">Stats</th>
                <th className="p-5 text-xs font-black text-gray-400 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {MOCK_VEHICLES.map(v => (
                <tr key={v.id} className="hover:bg-gray-50/50 transition-colors group">
                  <td className="p-5">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gray-100 flex-shrink-0"></div>
                      <div>
                        <p className="font-black text-gray-900 text-sm">{v.name}</p>
                        <p className="font-bold text-gray-400 text-xs">ID: #{v.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-5">
                    <span className="bg-[#f4f8f7] text-gray-600 px-3 py-1 text-xs font-bold rounded-lg border border-gray-200">{v.category}</span>
                  </td>
                  <td className="p-5 font-black text-gray-900">${v.price}</td>
                  <td className="p-5">
                    <span className={`px-3 py-1 text-xs font-bold rounded-lg ${
                      v.status === 'Available' ? 'bg-[#e9f2eb] text-[#78ad44]' :
                      v.status === 'Rented' ? 'bg-blue-50 text-blue-600' :
                      'bg-orange-50 text-orange-600'
                    }`}>
                      {v.status}
                    </span>
                  </td>
                  <td className="p-5">
                    <p className="text-xs font-bold text-gray-900">{v.trips} Trips</p>
                    <p className="text-xs font-bold text-[#f99200]">★ {v.rating}</p>
                  </td>
                  <td className="p-5 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 text-gray-400 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-colors"><Edit size={16} /></button>
                      <button className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"><Trash2 size={16} /></button>
                      <button className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"><MoreHorizontal size={16} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination mock */}
        <div className="p-5 border-t border-gray-100 flex items-center justify-between">
          <p className="text-xs font-bold text-gray-400">Showing 1 to 5 of 45 entries</p>
          <div className="flex gap-1">
            <button className="px-3 py-1 border border-gray-200 rounded-md text-xs font-bold text-gray-400 hover:bg-gray-50">Prev</button>
            <button className="px-3 py-1 bg-[#78ad44] text-white rounded-md text-xs font-bold">1</button>
            <button className="px-3 py-1 border border-gray-200 rounded-md text-xs font-bold text-gray-600 hover:bg-gray-50">2</button>
            <button className="px-3 py-1 border border-gray-200 rounded-md text-xs font-bold text-gray-600 hover:bg-gray-50">3</button>
            <button className="px-3 py-1 border border-gray-200 rounded-md text-xs font-bold text-gray-600 hover:bg-gray-50">Next</button>
          </div>
        </div>

      </div>

    </AdminLayout>
  );
}
