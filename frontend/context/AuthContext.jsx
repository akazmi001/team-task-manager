"use client";
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  let access, refresh, role;

  useEffect(() => {
    role = localStorage.getItem("role");
    if (role) {
      setUser(role);
    }
  }, []);

  const login = (role) => {
    setUser(role);
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
