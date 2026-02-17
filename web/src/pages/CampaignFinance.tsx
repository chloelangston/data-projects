import { useEffect, useState } from 'react';
import Papa from 'papaparse';
import { AggregatedDonationsTable } from '../components/AggregatedDonationsTable';
import { DonationList } from '../components/DonationList';
import { TransitTaxTable } from '../components/TransitTaxTable';
import { LayoutDashboard, Receipt, PieChart } from 'lucide-react';

interface LatestFiling {
    Date: string;
    Contributor: string;
    Amount: string;
    Recipient: string;
    Description: string;
}

export function CampaignFinance() {
    const [latestFilings, setLatestFilings] = useState<any[]>([]);

    useEffect(() => {
        // Fetch Latest Filings
        Papa.parse('/data/latest_filings.csv', {
            download: true,
            header: true,
            complete: (results) => {
                const data = (results.data as LatestFiling[])
                    .filter(row => row.Contributor && row.Amount)
                    .slice(0, 6)
                    .map((row, index) => ({
                        id: `lf-${index}`,
                        contributor: row.Contributor,
                        amount: parseFloat(row.Amount),
                        recipient: row.Recipient,
                        date: row.Date
                    }));
                setLatestFilings(data);
            },
            error: (err) => console.error("Error loading latest filings:", err)
        });
    }, []);

    return (
        <div className="min-h-screen bg-sage-50 text-sage-900 font-sans">
            <header className="bg-white border-b border-sage-200 sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="bg-eucalyptus-600 p-1.5 rounded-lg text-white">
                            <LayoutDashboard size={20} />
                        </div>
                        <h1 className="text-xl font-bold text-sage-900 tracking-tight">SF Campaign Finance <span className="text-sage-400 font-normal">2025</span></h1>
                    </div>
                    <nav className="hidden md:flex gap-6 text-sm font-medium text-sage-600">
                        <a href="/" className="hover:text-eucalyptus-600 transition-colors">Home</a>
                        <a href="#" className="text-eucalyptus-600 font-semibold cursor-default">Dashboard</a>
                    </nav>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">

                {/* Top Section: Aggregated Donations & Key Metrics */}
                <section className="space-y-6">
                    <div className="flex items-center gap-2 mb-2">
                        <h2 className="text-2xl font-semibold text-sage-800">High Value Contributions</h2>
                    </div>
                    <AggregatedDonationsTable />
                </section>

                {/* Middle Section: Recent Activity & Data Viz */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Left Column: Recent Transactions Feed */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="flex items-center gap-2">
                            <Receipt className="text-eucalyptus-600" size={20} />
                            <h2 className="text-lg font-semibold text-sage-800">Recent Transactions</h2>
                        </div>
                        <DonationList
                            title="Latest Filings"
                            donations={latestFilings}
                            viewAllLink="/data/latest_filings.csv"
                        />
                    </div>

                    {/* Right Column: Visualizations */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="flex items-center gap-2">
                            <PieChart className="text-eucalyptus-600" size={20} />
                            <h2 className="text-lg font-semibold text-sage-800">Special Focus</h2>
                        </div>
                        <div className="grid grid-cols-1 gap-6 h-[600px]">
                            {/* Transit Tax Table taking up full width of this column now */}
                            <TransitTaxTable />
                        </div>
                    </div>
                </div>

            </main>
        </div>
    );
}
