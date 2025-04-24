import React, { createContext, useContext, useState } from 'react';

type AuthContext = {
  isAuthenticated: boolean;
  login: (email: string, password: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContext>({
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (email: string, password: string) => {
    if (email === 'juanpmg2@gmail.com' && password === '123456789') {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  };
  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
