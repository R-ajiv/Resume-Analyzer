
"use client";

import Link from 'next/link';
import { UserNav } from './user-nav';
import { Button } from '@/components/ui/button';
import { Briefcase } from 'lucide-react';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container flex h-16 items-center px-4 md:px-6">
        <Link href="/" className="mr-6 flex items-center space-x-2 group">
          <Briefcase className="h-7 w-7 text-primary group-hover:text-primary/80 transition-colors duration-200" />
          <span className="text-lg font-semibold sm:inline-block text-foreground group-hover:text-primary/90 transition-colors duration-200">
            ResumeCraft AI
          </span>
        </Link>
        <nav className="flex items-center space-x-3"> {/* Removed flex-1 */}
          <Button
            variant="ghost"
            asChild
            className="text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 px-3 py-2 rounded-md transition-all duration-200"
          >
            <Link href="/tailor">Tailor Resume</Link>
          </Button>
          {/* Example for another link if needed:
          <Button
            variant="ghost"
            asChild
            className="text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 px-3 py-2 rounded-md transition-all duration-200"
          >
            <Link href="/features">Features</Link>
          </Button>
          */}
        </nav>
        <div className="ml-auto flex items-center space-x-3"> {/* Added ml-auto */}
          <UserNav />
        </div>
      </div>
    </header>
  );
}
