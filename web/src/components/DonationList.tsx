import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';
import { cn } from '../lib/utils';
import { DollarSign, User } from 'lucide-react';

interface Donation {
    id: string;
    contributor: string;
    amount: number;
    recipient: string;
    date: string;
}

interface DonationListProps {
    title: string;
    donations: Donation[];
    viewAllLink?: string;
    className?: string;
}

export function DonationList({ title, donations, className, viewAllLink }: DonationListProps) {
    return (
        <Card className={cn("h-full flex flex-col", className)}>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
                <div className="space-y-4 flex-1">
                    {donations.map((donation) => (
                        <div key={donation.id} className="flex items-start justify-between p-3 rounded-lg bg-sage-50 hover:bg-sage-100 transition-colors">
                            <div className="flex gap-3">
                                <div className="mt-1 bg-eucalyptus-100 p-2 rounded-full text-eucalyptus-700">
                                    <User size={16} />
                                </div>
                                <div>
                                    <p className="font-medium text-sage-900">{donation.contributor}</p>
                                    <p className="text-sm text-sage-600">to {donation.recipient}</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-end">
                                <div className="flex items-center font-bold text-eucalyptus-700">
                                    <DollarSign size={14} className="mr-0.5" />
                                    {donation.amount.toLocaleString()}
                                </div>
                                <span className="text-xs text-sage-500">{donation.date}</span>
                            </div>
                        </div>
                    ))}
                    {donations.length === 0 && (
                        <p className="text-center text-sage-500 py-4">No recent donations</p>
                    )}
                </div>
                {viewAllLink && (
                    <div className="mt-6 pt-4 border-t border-sage-100 flex justify-center">
                        <a
                            href={viewAllLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-eucalyptus-600 hover:text-eucalyptus-700 hover:underline"
                        >
                            Download CSV
                        </a>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
