
"use server";

import { analyzeResume, type AnalyzeResumeInput, type AnalyzeResumeOutput } from '@/ai/flows/resume-analyzer';
import { z } from 'zod';

const TailorResumeInputSchema = z.object({
  resumeText: z.string().min(50, { message: "Resume text must be at least 50 characters." }),
  jobDescriptionText: z.string().min(50, { message: "Job description text must be at least 50 characters." }),
});

export async function handleTailorResumeAction(
  formData: unknown // Accept unknown initially for robust parsing
): Promise<{ success: boolean; data?: AnalyzeResumeOutput; error?: string; fieldErrors?: z.ZodIssue[] }> {
  const validationResult = TailorResumeInputSchema.safeParse(formData);

  if (!validationResult.success) {
    return { 
      success: false, 
      error: "Invalid input.",
      fieldErrors: validationResult.error.issues,
    };
  }
  
  const { resumeText, jobDescriptionText } = validationResult.data;

  try {
    // Simulate network delay for AI processing
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const result = await analyzeResume({ resumeText, jobDescriptionText });
    return { success: true, data: result };
  } catch (e) {
    console.error("Error tailoring resume:", e);
    const errorMessage = e instanceof Error ? e.message : "An unknown error occurred during AI analysis.";
    // Check for specific Genkit errors if possible, e.g., API errors
    if (typeof e === 'object' && e !== null && 'details' in e) {
        // This is a basic check, you might need more specific error handling for Genkit
        return { success: false, error: `AI Service Error: ${(e as any).details || errorMessage}` };
    }
    return { success: false, error: errorMessage };
  }
}
