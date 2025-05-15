
import type React from 'react';
import { AuthProvider } from '@/contexts/auth-context'; // Import AuthProvider

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // AuthProvider is used here to make auth state (like isLoading) available
  // to login/signup pages if needed, but primary auth enforcement is in (app) layout.
  return (
    <AuthProvider> 
      {children}
    </AuthProvider>
  );
}
