
import type { AnalyzeResumeOutput } from '@/ai/flows/resume-analyzer';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CheckCircle2, Lightbulb } from 'lucide-react';

interface AnalysisDisplayProps {
  analysis: AnalyzeResumeOutput;
}

export function AnalysisDisplay({ analysis }: AnalysisDisplayProps) {
  return (
    <Card className="w-full shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl text-primary flex items-center">
          <Lightbulb className="mr-2 h-6 w-6" />
          AI Analysis & Suggestions
        </CardTitle>
        <CardDescription className="text-md text-muted-foreground pt-1">
          Here&apos;s how your resume aligns with the job description and areas for improvement.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-8 p-6">
        <div>
          <h3 className="text-xl font-semibold mb-3 text-foreground flex items-center">
            <CheckCircle2 className="mr-2 h-5 w-5 text-accent" />
            Matching Skills & Keywords
          </h3>
          {analysis.matchingSkills.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {analysis.matchingSkills.map((skill, index) => (
                <Badge
                  key={index}
                  variant="default"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 text-sm px-3 py-1 shadow-sm"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">
              No direct skill or keyword matches identified by the AI. Focus on the suggested improvements to better align your resume.
            </p>
          )}
        </div>

        <div className="border-t pt-8">
          <h3 className="text-xl font-semibold mb-4 text-foreground">
            Suggested Improvements
          </h3>
          <div className="bg-muted p-8 rounded-lg border border-primary/40 shadow-inner">
            <p className="text-base text-foreground whitespace-pre-wrap leading-loose">
              {analysis.suggestedImprovements}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
