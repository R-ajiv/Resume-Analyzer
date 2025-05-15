
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { handleTailorResumeAction } from "@/lib/actions";
import type { AnalyzeResumeOutput } from "@/ai/flows/resume-analyzer";
import { useState } from "react";
import { AnalysisDisplay } from "./analysis-display";
import { Loader2, AlertTriangle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  resumeText: z.string().min(50, { message: "Resume text must be at least 50 characters." }).max(10000, {message: "Resume text cannot exceed 10,000 characters."}),
  jobDescriptionText: z.string().min(50, { message: "Job description text must be at least 50 characters." }).max(10000, {message: "Job description cannot exceed 10,000 characters."}),
});

type FormValues = z.infer<typeof formSchema>;

export function ResumeTailorClient() {
  const [analysisResult, setAnalysisResult] = useState<AnalyzeResumeOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      resumeText: "",
      jobDescriptionText: "",
    },
  });

  const { control, handleSubmit, formState: { errors } } = form;

  async function onSubmit(values: FormValues) {
    setIsLoading(true);
    setError(null);
    setAnalysisResult(null);

    const result = await handleTailorResumeAction(values);

    setIsLoading(false);
    if (result.success && result.data) {
      setAnalysisResult(result.data);
      toast({
        title: "Analysis Complete!",
        description: "Your resume has been analyzed successfully.",
        variant: "default",
      });
    } else {
      const errorMessage = result.error || "An unexpected error occurred.";
      setError(errorMessage);
      if (result.fieldErrors) {
        result.fieldErrors.forEach(fieldError => {
          form.setError(fieldError.path[0] as keyof FormValues, { message: fieldError.message });
        });
      }
      toast({
        title: "Analysis Failed",
        description: errorMessage,
        variant: "destructive",
      });
    }
  }

  return (
    <div className="space-y-6">
      <Card className="shadow-lg">
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardHeader>
            <CardTitle>Input Details</CardTitle>
            <CardDescription>
              Provide your resume content and the job description you&apos;re targeting.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-3">
              <Label htmlFor="resumeText">Your Resume</Label>
              <Controller
                name="resumeText"
                control={control}
                render={({ field }) => (
                  <Textarea
                    id="resumeText"
                    placeholder="Paste your full resume text here..."
                    className="min-h-[200px] text-sm"
                    {...field}
                  />
                )}
              />
              {errors.resumeText && (
                <p className="text-sm font-medium text-destructive">{errors.resumeText.message}</p>
              )}
            </div>
            <div className="grid gap-3">
              <Label htmlFor="jobDescriptionText">Job Description</Label>
              <Controller
                name="jobDescriptionText"
                control={control}
                render={({ field }) => (
                  <Textarea
                    id="jobDescriptionText"
                    placeholder="Paste the full job description here..."
                    className="min-h-[200px] text-sm"
                    {...field}
                  />
                )}
              />
              {errors.jobDescriptionText && (
                <p className="text-sm font-medium text-destructive">{errors.jobDescriptionText.message}</p>
              )}
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full md:w-auto" disabled={isLoading}>
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {isLoading ? "Analyzing..." : "Tailor My Resume"}
            </Button>
          </CardFooter>
        </form>
      </Card>

      {isLoading && (
        <Card className="shadow-lg">
          <CardContent className="p-6 flex flex-col items-center justify-center min-h-[200px]">
            <Loader2 className="h-12 w-12 animate-spin text-primary mb-4" />
            <p className="text-muted-foreground">AI is working its magic... Please wait.</p>
          </CardContent>
        </Card>
      )}

      {error && !isLoading && (
         <Alert variant="destructive" className="shadow-md">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {analysisResult && !isLoading && (
        <AnalysisDisplay analysis={analysisResult} />
      )}
    </div>
  );
}
