import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, { AxiosError } from 'axios';

// Define the interface for the authentication context properties
export interface AuthContextProps {
  isSignedIn: boolean;
  signIn: (data: { email: string; password: string }) => Promise<void>;
  signOut: () => Promise<void>;
  signUp: (data: { email: string; password: string; name: string }) => Promise<void>;
}

// Define the properties for the AuthProvider
interface AuthProviderProps {
  children: ReactNode;
}

// Define the interface for the error response
interface ErrorResponse {
  message: string;
}

// Create the context with undefined as default
const AuthContext = createContext<AuthContextProps | undefined>(undefined);

// Create the AuthProvider component
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  // Check if a token exists in AsyncStorage to determine if the user is signed in
  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('userToken');
      setIsSignedIn(!!token); // Update the signed-in state based on token presence
    };
    checkToken();
  }, []);

  // Sign in function
  const signIn = async (data: { email: string; password: string }) => {
    try {
      // Call your backend API for login
      const response = await axios.post('http://your-backend-url/api/login', data);
      await AsyncStorage.setItem('userToken', response.data.token);
      setIsSignedIn(true);
    } catch (error) {
      const axiosError = error as AxiosError; // Cast to AxiosError for better error handling
      console.error('Login error:', axiosError);
      const errorMessage = (axiosError.response?.data as ErrorResponse)?.message || 'Login failed. Please check your credentials.';
      throw new Error(errorMessage); // Throw a descriptive error
    }
  };

  // Sign out function
  const signOut = async () => {
    await AsyncStorage.removeItem('userToken');
    setIsSignedIn(false);
  };

  // Sign up function
  const signUp = async (data: { email: string; password: string; name: string }) => {
    try {
      // Call your backend API for registration
      await axios.post('http://your-backend-url/api/users', data);
      // Optionally, auto-login after registration
      await signIn({ email: data.email, password: data.password }); // Auto login after sign up
    } catch (error) {
      const axiosError = error as AxiosError; // Cast to AxiosError for better error handling
      console.error('Registration error:', axiosError);
      const errorMessage = (axiosError.response?.data as ErrorResponse)?.message || 'Registration failed. Please try again.';
      throw new Error(errorMessage); // Throw a descriptive error
    }
  };

  // Provide the context value
  return (
    <AuthContext.Provider value={{ isSignedIn, signIn, signOut, signUp }}>
      {children}
    </AuthContext.Provider>
  );
};

// Create a custom hook to use the AuthContext
export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;
