"use client";
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  let access, refresh, role;

  useEffect(() => {
    if (typeof window !== "undefined") {
       access = localStorage.getItem("access");
       refresh = localStorage.getItem("refresh");
       role = localStorage.getItem("role");
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
