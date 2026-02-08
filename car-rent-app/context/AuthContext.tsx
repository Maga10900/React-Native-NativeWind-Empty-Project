import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type AuthContextType = {
  token: string | null;
  isLoading: boolean;
  login: (token: string) => Promise<void>;
  register: (token: string) => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // use effectin icinde tokeni async storageden cekip state e atiriq
  useEffect(() => {
    const LoadToken = async () => {
      try {
        const storedToken = await AsyncStorage.getItem('token');
        if (storedToken) {
          setToken(storedToken);
          setIsLoading(false);
        }
      }
      catch (error) {
        console.error('Error loading token:', error);
      }
      LoadToken();
    }
  }, []);

  const login = async (token: string) => {
    try {
      await AsyncStorage.setItem('token', token);
      setToken(token);
    }
    catch (error) {
      console.error('Error while setting token(LOGIN):', error);
    }
  }
  
  const register = async (token: string) => {
    try {
      await AsyncStorage.setItem('token', token);
      setToken(token);
    }
    catch (error) {
      console.error('Error while setting token(REGISTER):', error);
    }
  }

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('token');
      setToken(null);
    }
    catch (error) {
      console.error('Error while removing token(LOG OUT):', error);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        token,
        isLoading,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
  return ctx;
};
