"use client";
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const access = localStorage.getItem("access");
      const refresh = localStorage.getItem("refresh");
      const role = localStorage.getItem("role");
    }
    if (access) {
      setUser({ 
        "access": access, 
        "refresh": refresh,
         "role": role });
    }
  }, []);

  const login = (token) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("token", token);
    }
    setUser({ token });
  };

  const logout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      localStorage.removeItem("role");
    }
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
