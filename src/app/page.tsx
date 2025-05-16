
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Rocket, Target } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-background to-secondary">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
            <path d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10 9H9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-2xl font-bold text-foreground">ResumeCraft AI</span>
        </Link>
        <nav className="space-x-2">
          <Button variant="ghost" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild>
            <Link href="/signup">Sign Up</Link>
          </Button>
        </nav>
      </header>

      <main className="flex-grow container mx-auto px-4 py-16 flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-primary mb-6">
          Land Your Dream Job Faster
        </h1>
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl">
          ResumeCraft AI helps you tailor your resume to any job description in minutes. Optimize for ATS, highlight your key skills, and get noticed by recruiters.
        </p>
        <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-shadow duration-300">
          <Link href="/tailor">
            <Rocket className="mr-2 h-5 w-5" />
            Tailor Your Resume Now
          </Link>
        </Button>
        <div className="relative mt-12 w-full max-w-3xl">
           <Image
            src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
            alt="ResumeCraft AI interface preview - professionals collaborating"
            width={800}
            height={450}
            className="rounded-lg shadow-2xl border-4 border-background object-cover"
            data-ai-hint="career success"
            priority
          />
        </div>
      </main>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">Why Choose ResumeCraft AI?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card/80 backdrop-blur-sm">
              <CardHeader className="items-center text-center">
                <div className="p-3 rounded-full bg-accent/20 text-accent mb-3">
                  <Target className="h-8 w-8" />
                </div>
                <CardTitle className="text-primary">AI-Powered Precision</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                Our advanced AI analyzes job descriptions and your resume to find the perfect match, suggesting impactful edits.
              </CardContent>
            </Card>
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card/80 backdrop-blur-sm">
              <CardHeader className="items-center text-center">
                <div className="p-3 rounded-full bg-accent/20 text-accent mb-3">
                  <Rocket className="h-8 w-8" />
                </div>
                <CardTitle className="text-primary">Boost ATS Visibility</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                Craft resumes that sail through Applicant Tracking Systems with optimized keywords and formatting.
              </CardContent>
            </Card>
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card/80 backdrop-blur-sm">
              <CardHeader className="items-center text-center">
                <div className="p-3 rounded-full bg-accent/20 text-accent mb-3">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <CardTitle className="text-primary">Save Time & Effort</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                Stop spending hours on manual tailoring. Get a polished, job-specific resume in minutes.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="text-center py-8 text-muted-foreground border-t">
        <p>&copy; {new Date().getFullYear()} ResumeCraft AI. All rights reserved.</p>
      </footer>
    </div>
  );
}
