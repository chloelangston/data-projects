import React from 'react';
import { Clock, Calendar, Headphones } from 'lucide-react';
import { timelineData } from '../data/timeline';
import type { TimelineEvent } from '../data/timeline';

const getMonthName = (month: number | null) => {
    if (!month) return '';
    return new Date(2000, month - 1).toLocaleString('default', { month: 'long' });
};

const formatDate = (date: TimelineEvent['date']) => {
    const parts = [];
    if (date.month) parts.push(getMonthName(date.month));
    if (date.day) parts.push(date.day);
    if (date.year) parts.push(date.year);
    return parts.join(' ');
};

interface TimelineCardProps {
    event: TimelineEvent;
}

interface PositionedEvent extends TimelineEvent {
    y: number;
    gap?: number;
    imageAsset?: { type: string; url: string; label: string };
    rotation?: number;
    hasBreak?: boolean;
}

function TimelineCard({ event }: TimelineCardProps) {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-sage-100 hover:shadow-md transition-shadow duration-300 relative overflow-hidden group">
            {/* Decorative top border */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-eucalyptus-400 to-sage-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Header: Date Left, Category Right */}
            <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-1.5 text-eucalyptus-700 font-medium">
                    <Calendar size={14} className="text-eucalyptus-500" />
                    <span className="text-sm tracking-wide uppercase">
                        {formatDate(event.date)}
                    </span>
                </div>
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-sage-100 text-sage-700 border border-sage-200">
                    {event.category}
                </span>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-sage-900 mb-2 leading-tight">
                {event.event_title}
            </h3>

            {/* Content (Description & Source) */}
            <div className="mt-2">
                <p className="text-sage-600 text-sm leading-relaxed mb-4">
                    {event.event_description}
                </p>

                {/* Footer: Source Timestamp */}
                <div className="flex items-center gap-2 pt-3 border-t border-sage-50 text-sage-400 text-xs font-mono">
                    <Headphones size={12} />
                    <a
                        href={event.source.deep_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-eucalyptus-600 transition-colors duration-200"
                    >
                        {event.source.podcast} ({event.source.timestamp})
                    </a>
                </div>
            </div>
        </div>
    );
}

const getEventDate = (date: TimelineEvent['date']) => {
    return new Date(date.year, date.month ? date.month - 1 : 0, date.day || 1);
};

// Scaling factor: How many pixels per "unit" of time difference
// Using square root scale to compress very long periods while keeping short ones visible
const TIME_SCALE_FACTOR = 10;
const MIN_GAP = 120; // Ensure cards don't overlap too much
const MAX_GAP = 400; // Cap large gaps to keep it readable

function MethodologyCard() {
    return (
        <div className="mt-24 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl border border-sage-200 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-eucalyptus-400 to-sage-400" />
                <h2 className="text-2xl font-bold text-sage-900 mb-8 flex items-center gap-3">
                    <div className="p-2 bg-sage-100 rounded-lg text-sage-600">
                        <Calendar size={20} />
                    </div>
                    Methodology
                </h2>
                <div className="grid md:grid-cols-3 gap-8 text-sm">
                    <div className="space-y-4">
                        <h3 className="font-bold text-eucalyptus-700 uppercase tracking-wider text-xs border-b border-sage-100 pb-2">1. Data Acquisition</h3>
                        <p className="text-sage-700 leading-relaxed">
                            The primary data for this project was extracted from the <em>We Can Do Hard Things</em> podcast series hosted by Amanda Doyle, Glennon Doyle, and Abby Wambach.
                        </p>
                        <ul className="space-y-3 text-xs text-sage-500 bg-sage-50 p-3 rounded-lg border border-sage-100">
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-eucalyptus-400 rounded-full mt-1.5 shrink-0" />
                                <span><strong className="text-sage-700">Source A:</strong> THE EPSTEIN FILES, EXPLAINED (Feb 10, 2026)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-eucalyptus-400 rounded-full mt-1.5 shrink-0" />
                                <span><strong className="text-sage-700">Source B:</strong> Brad Edwards Interview (Feb 12, 2026)</span>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="font-bold text-eucalyptus-700 uppercase tracking-wider text-xs border-b border-sage-100 pb-2">2. Processing & Verification</h3>
                        <div className="space-y-4">
                            <div>
                                <span className="flex items-center gap-2 font-medium text-sage-900 mb-1">
                                    <Headphones size={14} className="text-eucalyptus-500" />
                                    Transcription & Deep-Linking
                                </span>
                                <p className="text-sage-600 leading-relaxed pl-5 border-l-2 border-sage-100">
                                    Full podcast transcripts were parsed to identify specific chronological events. Every event is "deep-linked" to the exact timestamp in the source audio.
                                </p>
                            </div>
                            <div>
                                <span className="flex items-center gap-2 font-medium text-sage-900 mb-1">
                                    <Calendar size={14} className="text-eucalyptus-500" />
                                    Cross-Referencing
                                </span>
                                <p className="text-sage-600 leading-relaxed pl-5 border-l-2 border-sage-100">
                                    Events were cross-referenced against historical news archives (Miami Herald, NYT) and official government documents.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="font-bold text-eucalyptus-700 uppercase tracking-wider text-xs border-b border-sage-100 pb-2">3. Technical Implementation</h3>
                        <p className="text-sage-700 leading-relaxed">
                            The timeline is built using a custom JSON schema designed for interoperability. The visualization uses a custom React implementation to render data point by point, prioritizing the legal and institutional milestones of the case.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function FutureCard({ top }: { top: number }) {
    return (
        <div className="absolute left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center w-full max-w-lg px-4" style={{ top: top }}>
            <div className="w-6 h-6 bg-sage-200 rounded-full border-4 border-white shadow-sm mb-6" />

            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl border-2 border-dashed border-sage-300 text-center shadow-sm max-w-md">
                <h3 className="text-xl font-bold text-sage-800 mb-3 flex items-center justify-center gap-2">
                    What Comes Next?
                </h3>
                <p className="text-sage-600 leading-relaxed">
                    The files are open, but the story isn't over. Public scrutiny and demands for accountability continue to shape what happens next.
                </p>
            </div>
        </div>
    );
}

function Footer() {
    return (
        <footer className="bg-white border-t border-sage-200 py-12 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2 text-sage-400">
                    <Clock size={16} />
                    <span className="font-mono text-sm">© 2026 SF Data Project</span>
                </div>
                <div className="flex items-center gap-8 text-sm text-sage-500 font-medium">
                    <a href="#" className="hover:text-eucalyptus-600 transition-colors">About</a>
                    <a href="#" className="hover:text-eucalyptus-600 transition-colors">Data Methodology</a>
                    <a href="#" className="hover:text-eucalyptus-600 transition-colors">Contact</a>
                </div>
            </div>
        </footer>
    );
}

export function Timeline() {
    // 1. Calculate positions
    const positions = React.useMemo(() => {
        let currentY = 0;
        return timelineData.map((event, index): PositionedEvent => {
            if (index === 0) {
                return { ...event, y: 0, gap: 0 };
            }

            const prevDate = getEventDate(timelineData[index - 1].date);
            const currDate = getEventDate(event.date);

            // Calculate difference in days
            const diffTime = Math.abs(currDate.getTime() - prevDate.getTime());
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

            // Apply non-linear scaling (square root) + simpler linear factor
            // The logic: small gaps (days) -> small layout gap
            // large gaps (years) -> large layout gap, but not linear (would be too big)
            let gap = Math.sqrt(diffDays) * TIME_SCALE_FACTOR;

            // Apply constraints
            gap = Math.max(gap, MIN_GAP);

            let hasBreak = false;
            if (gap > MAX_GAP) {
                gap = MAX_GAP;
                hasBreak = true;
            }

            currentY += gap;

            // Check for image asset
            const imageAsset = event.external_assets?.find(a => a.type === 'image');
            const rotation = (index % 2 === 0 ? 1 : -1) * ((index % 5) + 2); // Deterministic rotation between +/- 2-6 degrees

            return { ...event, y: currentY, gap, imageAsset, rotation, hasBreak };
        });
    }, []);

    const lastEventY = positions[positions.length - 1].y;
    const futureCardTop = lastEventY + 200;
    const totalHeight = futureCardTop + 300; // Add padding at bottom for content

    return (
        <div className="min-h-screen bg-sage-50 text-sage-900 font-sans">
            <header className="bg-white border-b border-sage-200 z-10 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="bg-eucalyptus-600 p-1.5 rounded-lg text-white">
                            <Clock size={20} />
                        </div>
                        <h1 className="text-xl font-bold text-sage-900 tracking-tight">SF Data Project <span className="text-sage-400 font-normal">Epstein Timeline</span></h1>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Intro Section */}
                <div className="mb-20 max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-sage-900 mb-6 tracking-tight leading-tight">
                            The Epstein Timeline
                            <span className="block text-2xl md:text-3xl mt-3 font-serif italic text-eucalyptus-700 font-medium opacity-90">
                                A Documented Record of Power, Accountability, and Justice
                            </span>
                        </h1>
                        <p className="text-lg text-sage-700 leading-relaxed mb-8 max-w-2xl mx-auto">
                            This project is a visual representation of the decades-long timeline of the Jeffrey Epstein case, as organized and synthesized by Amanda Doyle in the We Can Do Hard Things special series. Moving beyond conspiracy theories and salacious details, this timeline presents a documented record of how the justice system was deployed to protect a powerful predator while survivors, advocates, and journalists fought for the truth.
                        </p>
                    </div>

                    {/* Sources Card */}
                    <div className="bg-white p-6 md:p-8 rounded-2xl border border-sage-200 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-eucalyptus-400 to-sage-400" />
                        <h3 className="text-xs uppercase tracking-wider text-sage-500 font-bold mb-6 flex items-center gap-2">
                            <div className="p-1 bg-sage-100 rounded text-sage-600">
                                <Headphones size={14} />
                            </div>
                            Primary Data Sources
                        </h3>
                        <div className="grid gap-4">
                            <a
                                href="https://open.spotify.com/episode/0u0ghFiqNY4rE7uahRiTd1?si=t3xn69r1SByYZcDtq5-JQA"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block p-4 rounded-xl border border-sage-100 hover:border-eucalyptus-200 hover:bg-sage-50/50 transition-all duration-300"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="bg-eucalyptus-100 text-eucalyptus-700 p-3 rounded-lg group-hover:bg-eucalyptus-200 group-hover:scale-105 transition-all duration-300">
                                        <Headphones size={20} />
                                    </div>
                                    <div>
                                        <div className="font-bold text-sage-900 group-hover:text-eucalyptus-800 transition-colors mb-1">
                                            THE EPSTEIN FILES, EXPLAINED: Everything You Need to Know
                                        </div>
                                        <div className="text-sm text-sage-500 font-medium">
                                            Amanda's You're Not Gonna Believe This B.S. • <span className="text-sage-400">Feb 10, 2026</span>
                                        </div>
                                    </div>
                                </div>
                            </a>

                            <a
                                href="https://open.spotify.com/episode/4TIYwyYM8BwfVwe5CSnPf7?si=5TymA2qwRWOnRsDCqp7nXw"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block p-4 rounded-xl border border-sage-100 hover:border-eucalyptus-200 hover:bg-sage-50/50 transition-all duration-300"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="bg-eucalyptus-100 text-eucalyptus-700 p-3 rounded-lg group-hover:bg-eucalyptus-200 group-hover:scale-105 transition-all duration-300">
                                        <Headphones size={20} />
                                    </div>
                                    <div>
                                        <div className="font-bold text-sage-900 group-hover:text-eucalyptus-800 transition-colors mb-1">
                                            EPSTEIN SURVIVORS’ ATTORNEY WHO EXPOSED GOVERNMENT CONSPIRACY: Brad Edwards
                                        </div>
                                        <div className="text-sm text-sage-500 font-medium">
                                            We Can Do Hard Things • <span className="text-sage-400">Feb 12, 2026</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                {/* --- PHONE VIEW --- */}
                <div className="relative flex flex-col items-center pb-24 md:hidden">
                    {/* Central Vertical Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-sage-200 h-full top-0" />

                    {positions.map((event, index) => (
                        <div
                            key={index}
                            className="relative z-10 w-full max-w-lg px-4 flex flex-col items-center"
                            style={{ marginTop: index === 0 ? 0 : Math.max(event.gap || 0, 48) }}
                        >
                            {/* Time Break Indicator */}
                            {event.hasBreak && (
                                <div className="flex flex-col items-center justify-center gap-1 bg-sage-50 py-4 -mt-12 mb-4 relative z-20">
                                    <div className="w-1 h-3 bg-sage-300 rounded-full opacity-50" />
                                    <div className="w-1 h-3 bg-sage-300 rounded-full opacity-50" />
                                    <div className="w-1 h-3 bg-sage-300 rounded-full opacity-50" />
                                </div>
                            )}

                            {/* Center Dot */}
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-eucalyptus-500 rounded-full border-2 border-white shadow-sm z-20" />

                            <div className="w-full">
                                <TimelineCard event={event} />
                            </div>

                            {/* Image Below Card */}
                            {event.imageAsset && (
                                <div className="mt-4 transform rotate-1 w-full max-w-sm bg-white p-2 pb-8 shadow-md border border-gray-200">
                                    <img
                                        src={event.imageAsset.url}
                                        alt={event.imageAsset.label}
                                        className="w-full h-auto object-cover filter sepia-[.15] contrast-105 aspect-square"
                                    />
                                    <p className="text-xs font-handwriting text-center text-gray-600 font-light mt-2 leading-tight">
                                        {event.imageAsset.label}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}

                    <div className="relative z-10 mt-16 w-full max-w-lg px-4 flex flex-col items-center">
                        <div className="w-6 h-6 bg-sage-200 rounded-full border-4 border-white shadow-sm mb-6 relative z-20" />
                        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl border-2 border-dashed border-sage-300 text-center shadow-sm w-full">
                            <h3 className="text-xl font-bold text-sage-800 mb-3 flex items-center justify-center gap-2">
                                What Comes Next?
                            </h3>
                            <p className="text-sage-600 leading-relaxed">
                                The files are open, but the story isn't over. Public scrutiny and demands for accountability continue to shape what happens next.
                            </p>
                        </div>
                    </div>
                </div>

                {/* --- DESKTOP VIEW --- */}
                <div className="relative hidden md:block" style={{ height: totalHeight }}>
                    {/* Vertical Line */}
                    <div
                        className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-sage-200 rounded-full"
                        style={{ height: futureCardTop }}
                    />

                    {positions.map((event, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <div
                                key={index}
                                className={`absolute left-0 right-0 flex items-start justify-between ${isEven ? 'flex-row-reverse' : ''} ${event.imageAsset ? 'z-30' : 'z-10'}`}
                                style={{ top: event.y }}
                            >
                                {/* Connector Line */}
                                <div
                                    className={`absolute top-8 h-0.5 bg-sage-200 w-1/12 -translate-y-1/2 ${isEven ? 'right-1/2' : 'left-1/2'
                                        }`}
                                />

                                {/* Time Break Indicator */}
                                {event.hasBreak && (
                                    <div className="absolute left-1/2 transform -translate-x-1/2 -top-32 z-0 flex flex-col items-center justify-center gap-1 bg-sage-50 py-4">
                                        <div className="w-1 h-3 bg-sage-300 rounded-full opacity-50" />
                                        <div className="w-1 h-3 bg-sage-300 rounded-full opacity-50" />
                                        <div className="w-1 h-3 bg-sage-300 rounded-full opacity-50" />
                                    </div>
                                )}

                                {/* Empty Side */}
                                <div className="w-5/12" />

                                {/* Center Dot and Polaroid */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center">
                                    <div className="w-4 h-4 bg-eucalyptus-500 rounded-full border-4 border-white shadow-sm mt-6 mb-4" />

                                    {event.imageAsset && (
                                        <div
                                            className="absolute top-2 z-[100] bg-white p-2 pb-8 shadow-xl transform hover:scale-110 hover:z-[110] transition-all duration-300 border border-gray-200 origin-top"
                                            style={{
                                                transform: `rotate(${event.rotation}deg)`,
                                                width: '200px'
                                            }}
                                        >
                                            <div className="aspect-square bg-gray-100 overflow-hidden mb-2">
                                                <img
                                                    src={event.imageAsset.url}
                                                    alt={event.imageAsset.label}
                                                    className="w-full h-full object-cover filter sepia-[.15] contrast-105"
                                                />
                                            </div>
                                            <p className="text-xs font-handwriting text-center text-gray-600 font-light leading-tight">
                                                {event.imageAsset.label}
                                            </p>
                                        </div>
                                    )}
                                </div>

                                {/* Content Side */}
                                <div className="w-5/12">
                                    <TimelineCard event={event} />
                                </div>
                            </div>
                        );
                    })}

                    <FutureCard top={futureCardTop} />
                </div>

                <MethodologyCard />
            </main>
            <Footer />
        </div>
    );
}
