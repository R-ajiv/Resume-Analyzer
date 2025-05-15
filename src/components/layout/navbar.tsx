
"use client";

import Link from 'next/link';
import { UserNav } from './user-nav';
import { Button } from '@/components/ui/button';
import { Briefcase } from 'lucide-react'; // Using Briefcase as a generic professional icon

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Briefcase className="h-6 w-6 text-primary" />
          <span className="font-bold sm:inline-block">
            ResumeCraft AI
          </span>
        </Link>
        <nav className="flex flex-1 items-center space-x-4">
          <Button variant="ghost" asChild>
            <Link href="/tailor">Tailor Resume</Link>
          </Button>
        </nav>
        <div className="flex items-center space-x-2">
          <UserNav />
        </div>
      </div>
    </header>
  );
}
