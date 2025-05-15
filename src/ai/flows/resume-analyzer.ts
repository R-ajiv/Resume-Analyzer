// This is a server-side file.
'use server';

/**
 * @fileOverview Analyzes a resume against a job description, highlighting matching skills and suggesting improvements.
 *
 * - analyzeResume - Analyzes the resume and job description to provide tailored suggestions.
 * - AnalyzeResumeInput - The input type for the analyzeResume function.
 * - AnalyzeResumeOutput - The return type for the analyzeResume function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';


const AnalyzeResumeInputSchema = z.object({
  resumeText: z.string().describe('The text content of the resume.'),
  jobDescriptionText: z.string().describe('The text content of the job description.'),
});
export type AnalyzeResumeInput = z.infer<typeof AnalyzeResumeInputSchema>;

const AnalyzeResumeOutputSchema = z.object({
  matchingSkills: z.array(z.string()).describe('Skills from the resume that match the job description.'),
  suggestedImprovements: z.string().describe('AI-generated suggestions to improve the resume based on the job description.'),
});
export type AnalyzeResumeOutput = z.infer<typeof AnalyzeResumeOutputSchema>;

export async function analyzeResume(input: AnalyzeResumeInput): Promise<AnalyzeResumeOutput> {
  return analyzeResumeFlow(input);
}

const analyzeResumePrompt = ai.definePrompt({
  name: 'analyzeResumePrompt',
  input: {schema: AnalyzeResumeInputSchema},
  output: {schema: AnalyzeResumeOutputSchema},
  prompt: `You are an expert resume writer. Analyze the following resume and job description to identify matching skills and suggest improvements to tailor the resume to the job description.

Resume:
{{resumeText}}

Job Description:
{{jobDescriptionText}}

Highlight the matching skills between the resume and the job description and provide suggestions for improvements.  Make sure the suggestions are concrete and actionable.

Output matching skills as a JSON array of strings. Output suggested improvements as a single string.

{{outputFormatInstructions}}`,
});

const analyzeResumeFlow = ai.defineFlow(
  {
    name: 'analyzeResumeFlow',
    inputSchema: AnalyzeResumeInputSchema,
    outputSchema: AnalyzeResumeOutputSchema,
  },
  async input => {
    const {output} = await analyzeResumePrompt(input);
    return output!;
  }
);
