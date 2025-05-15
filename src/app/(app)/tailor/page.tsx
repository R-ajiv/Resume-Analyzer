
import { ResumeTailorClient } from '@/components/tailor/resume-tailor-client';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function TailorPage() {
  return (
    <div className="space-y-8">
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-primary">Resume Tailoring Studio</CardTitle>
          <CardDescription className="text-lg text-muted-foreground">
            Paste your resume and the job description below. Our AI will analyze them and provide tailored suggestions to enhance your application.
          </CardDescription>
        </CardHeader>
      </Card>
      <ResumeTailorClient />
    </div>
  );
}
