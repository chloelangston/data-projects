import { useEffect, useState } from 'react';
import Papa from 'papaparse';
import { Card, CardHeader, CardTitle } from './ui/Card';
import { Loader2 } from 'lucide-react';

interface TransitTaxDonation {
    Date: string;
    Contributor: string;
    Amount: string;
    Recipient: string;
    Description: string;
}

const CSV_URL = import.meta.env.BASE_URL + 'data/transit_tax_filings.csv';

export function TransitTaxTable() {
    const [data, setData] = useState<TransitTaxDonation[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        Papa.parse(CSV_URL, {
            download: true,
            header: true,
            complete: (results) => {
                const validData = (results.data as TransitTaxDonation[])
                    .filter(row => row.Contributor && row.Amount)
                    .slice(0, 50); // Limit to top 50 for performance if list is long

                setData(validData);
                setLoading(false);
            },
            error: (err) => {
                console.error("Error fetching CSV:", err);
                setError("Failed to load transit tax data.");
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
        <Card className="w-full h-full overflow-hidden flex flex-col">
            <CardHeader className="bg-sage-50 border-b border-sage-100 flex-shrink-0">
                <CardTitle>Transit Tax Related Filings</CardTitle>
                <div className="flex justify-between items-center mt-1">
                    <p className="text-sm text-sage-500">
                        Recent filings mentioning transit/muni/bart/parcel.
                    </p>
                    <a
                        href={CSV_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-medium text-eucalyptus-600 hover:text-eucalyptus-700 hover:underline"
                    >
                        Download CSV
                    </a>
                </div>
            </CardHeader>
            <div className="overflow-x-auto flex-1">
                <table className="w-full text-left text-sm text-sage-800">
                    <thead className="bg-sage-100 text-xs uppercase text-sage-600 font-medium sticky top-0">
                        <tr>
                            <th className="px-4 py-3">Date</th>
                            <th className="px-4 py-3">Contributor</th>
                            <th className="px-4 py-3">Recipient</th>
                            <th className="px-4 py-3">Description</th>
                            <th className="px-4 py-3 text-right">Amount</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-sage-100 bg-white">
                        {data.map((row, index) => (
                            <tr key={index} className="hover:bg-sage-50 transition-colors">
                                <td className="px-4 py-3 text-sage-500 whitespace-nowrap">
                                    {row.Date}
                                </td>
                                <td className="px-4 py-3 font-medium text-sage-900">
                                    {row.Contributor}
                                </td>
                                <td className="px-4 py-3 text-sage-600">
                                    {row.Recipient}
                                </td>
                                <td className="px-4 py-3 text-sage-500 max-w-xs truncate" title={row.Description}>
                                    {row.Description}
                                </td>
                                <td className="px-4 py-3 text-right font-bold text-eucalyptus-700">
                                    {parseFloat(row.Amount).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {data.length === 0 && (
                    <div className="p-8 text-center text-sage-500">No matching records found.</div>
                )}
            </div>
        </Card>
    );
}
