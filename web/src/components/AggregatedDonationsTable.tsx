import { useEffect, useState } from 'react';
import Papa from 'papaparse';
import { Card, CardHeader, CardTitle } from './ui/Card';
import { Loader2 } from 'lucide-react';

interface AggregatedDonation {
    Contributor: string;
    "Total Amount": string;
    Recipient: string;
}

interface ProcessedDonation extends AggregatedDonation {
    amountValue: number;
}

const SHEET_CSV_URL = import.meta.env.BASE_URL + 'data/aggregated_large_donations.csv';

export function AggregatedDonationsTable() {
    const [data, setData] = useState<ProcessedDonation[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        Papa.parse(SHEET_CSV_URL, {
            download: true,
            header: true,
            complete: (results) => {
                // Filter for valid rows and high value
                const validData = (results.data as AggregatedDonation[]).filter(row =>
                    row.Contributor && row["Total Amount"]
                ).map(row => ({
                    ...row,
                    // Clean amount string just in case it has $ or ,
                    amountValue: parseFloat(row["Total Amount"].replace(/[$,]/g, ''))
                })).sort((a, b) => b.amountValue - a.amountValue);

                setData(validData);
                setLoading(false);
            },
            error: (err) => {
                console.error("Error fetching CSV:", err);
                setError("Failed to load donation data.");
                setLoading(false);
            }
        });
    }, []);

    if (loading) {
        return (
            <Card className="h-full min-h-[300px] flex items-center justify-center">
                <Loader2 className="animate-spin text-sage-500" size={32} />
            </Card>
        );
    }

    if (error) {
        return (
            <Card className="h-full flex items-center justify-center p-6">
                <p className="text-red-500">{error}</p>
            </Card>
        );
    }

    return (
        <Card className="w-full overflow-hidden">
            <CardHeader className="bg-sage-50 border-b border-sage-100">
                <CardTitle>Top Aggregated Donations ({'>'} $1M)</CardTitle>
                <p className="text-sm text-sage-500 mt-1">
                    Aggregated contributions from the last year.
                </p>
            </CardHeader>
            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-sage-800">
                    <thead className="bg-sage-100 text-xs uppercase text-sage-600 font-medium">
                        <tr>
                            <th className="px-6 py-3">Contributor</th>
                            <th className="px-6 py-3">Recipient</th>
                            <th className="px-6 py-3 text-right">Total Amount</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-sage-100 bg-white">
                        {data.map((row, index) => (
                            <tr key={index} className="hover:bg-sage-50 transition-colors">
                                <td className="px-6 py-4 font-medium text-sage-900 whitespace-nowrap">
                                    {row.Contributor}
                                </td>
                                <td className="px-6 py-4 text-sage-600">
                                    {row.Recipient}
                                </td>
                                <td className="px-6 py-4 text-right font-bold text-eucalyptus-700">
                                    {/* Format purely for display, reusing the string if valid or formatting the number */}
                                    {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(row.amountValue)}
                                </td>
                            </tr>
                        ))}
                        {data.length === 0 && (
                            <tr>
                                <td colSpan={3} className="px-6 py-4 text-center text-sage-500">
                                    No data found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </Card>
    );
}
