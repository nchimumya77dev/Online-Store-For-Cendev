import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

export type UserRole = 'buyer' | 'seller';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
  company?: string;
  phone?: string;
  address?: string;
  createdAt: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string, role: UserRole, company?: string) => Promise<void>;
  logout: () => void;
  updateProfile: (updates: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('cendev-user');
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('cendev-user', JSON.stringify(user));
    } else {
      localStorage.removeItem('cendev-user');
    }
  }, [user]);

  const login = async (email: string, password: string) => {
    // Mock login - In production, this would call your backend API
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Check if user exists in mock database
    const users = JSON.parse(localStorage.getItem('cendev-users') || '[]');
    const foundUser = users.find((u: any) => u.email === email && u.password === password);

    if (foundUser) {
      const { password: _, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword);
    } else {
      throw new Error('Invalid email or password');
    }
  };

  const register = async (
    email: string,
    password: string,
    name: string,
    role: UserRole,
    company?: string
  ) => {
    // Mock registration - In production, this would call your backend API
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Check if user already exists
    const users = JSON.parse(localStorage.getItem('cendev-users') || '[]');
    if (users.find((u: any) => u.email === email)) {
      throw new Error('User with this email already exists');
    }

    // Create new user
    const newUser: User & { password: string } = {
      id: `user-${Date.now()}`,
      email,
      name,
      role,
      company,
      password,
      createdAt: new Date().toISOString(),
    };

    users.push(newUser);
    localStorage.setItem('cendev-users', JSON.stringify(users));

    const { password: _, ...userWithoutPassword } = newUser;
    setUser(userWithoutPassword);
  };

  const logout = () => {
    setUser(null);
  };

  const updateProfile = (updates: Partial<User>) => {
    if (!user) return;

    const updatedUser = { ...user, ...updates };
    setUser(updatedUser);

    // Update in mock database
    const users = JSON.parse(localStorage.getItem('cendev-users') || '[]');
    const userIndex = users.findIndex((u: any) => u.id === user.id);
    if (userIndex !== -1) {
      users[userIndex] = { ...users[userIndex], ...updates };
      localStorage.setItem('cendev-users', JSON.stringify(users));
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        register,
        logout,
        updateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
