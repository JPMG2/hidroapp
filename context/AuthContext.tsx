import React, { createContext, useContext, useEffect, useState } from 'react';
import * as SecureStore from 'expo-secure-store';

type AuthContext = {
  isAuthenticated: boolean;
  isChecking: boolean;
  login: (email: string, password: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContext>({
  isAuthenticated: false,
  isChecking: true,
  login: () => {},
  logout: () => {},
});

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsChecking(false); // después de 500ms, ya no estamos chequeando
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  const login = async (email: string, password: string) => {
    if (email === 'juanpmg2@gmail.com' && password === '123456789') {
      setIsAuthenticated(true);
      await SecureStore.setItemAsync('user', 'Juan');
    } else {
      setIsAuthenticated(false);
      await SecureStore.deleteItemAsync('user');
    }
  };
  const logout = async () => {
    setIsAuthenticated(false);
    await SecureStore.deleteItemAsync('user');
  };

  const loadSession = async () => {
    const user = await SecureStore.getItemAsync('user');
    if (user) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  };

  useEffect(() => {
    loadSession();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, isChecking, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
