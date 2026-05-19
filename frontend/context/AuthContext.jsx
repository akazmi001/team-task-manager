"use client";
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  let access, refresh, role;

  // useEffect(() => {
  //   role = localStorage.getItem("role");
  //   if (role) {
  //     setUser(role);
  //   }
  // }, []);
  useEffect(() => {
  if (typeof window !== "undefined") {
    const storedRole = localStorage.getItem("role");
    if (storedRole) {
      setUser(storedRole);
    }
  }
}, []);

  const login = (role) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("role", role);
  }
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
