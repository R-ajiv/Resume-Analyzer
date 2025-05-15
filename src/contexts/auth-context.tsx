
"use client";

import type React from 'react';
import { createContext, useState, useEffect, useCallback } from 'react';
import { useRouter, usePathname } from 'next/navigation';

interface User {
  id: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string) => void;
  logout: () => void;
  signup: (email: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Simulate checking auth status from localStorage or an API
    const storedUser = localStorage.getItem('resumeCraftUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = useCallback((email: string) => {
    const mockUser = { id: '1', email };
    setUser(mockUser);
    localStorage.setItem('resumeCraftUser', JSON.stringify(mockUser));
    setIsLoading(false);
    router.push('/tailor');
  }, [router]);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem('resumeCraftUser');
    setIsLoading(false);
    if (pathname.startsWith('/tailor')) { // Only redirect if on a protected route
        router.push('/login');
    }
  }, [router, pathname]);

  const signup = useCallback((email: string) => {
    // In a real app, this would hit an API. For mock, same as login.
    const mockUser = { id: '1', email };
    setUser(mockUser);
    localStorage.setItem('resumeCraftUser', JSON.stringify(mockUser));
    setIsLoading(false);
    router.push('/tailor');
  }, [router]);

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, isLoading, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
