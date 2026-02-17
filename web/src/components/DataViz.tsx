import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';

interface DataVizProps {
    title: string;
    embedUrl?: string; // URL for Datawrapper or similar
    children?: React.ReactNode;
}

export function DataViz({ title, embedUrl, children }: DataVizProps) {
    return (
        <Card className="h-full">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                {embedUrl ? (
                    <div className="aspect-video w-full rounded-lg overflow-hidden bg-sage-50 border border-sage-100">
                        <iframe
                            src={embedUrl}
                            className="w-full h-full border-0"
                            title={title}
                            loading="lazy"
                        />
                    </div>
                ) : (
                    <div className="min-h-[200px] flex items-center justify-center bg-sage-50 rounded-lg text-sage-400">
                        {children || "Data visualization placeholder"}
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
