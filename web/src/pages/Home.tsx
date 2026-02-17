import { useNavigate } from 'react-router-dom';
import { LayoutDashboard, Clock } from 'lucide-react';

export function Home() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
            <h1 className="text-4xl font-bold text-gray-900 mb-8 tracking-tight">Project Portal</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
                {/* Campaign Finance Card */}
                <button
                    onClick={() => navigate('/finance')}
                    className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-200 text-left group"
                >
                    <div className="bg-eucalyptus-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-eucalyptus-200 transition-colors">
                        <LayoutDashboard className="text-eucalyptus-700" size={24} />
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-2">Campaign Finance</h2>
                    <p className="text-gray-500">
                        San Francisco 2025 election data dashboard tracking donations and expenditures.
                    </p>
                </button>

                {/* Timeline Project Card */}
                <button
                    onClick={() => navigate('/epstein-timeline')}
                    className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-200 text-left group"
                >
                    <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-200 transition-colors">
                        <Clock className="text-indigo-700" size={24} />
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-2">Timeline Project</h2>
                    <p className="text-gray-500">
                        Interactive timeline visualization of events and activities.
                    </p>
                </button>
            </div>
        </div>
    );
}
