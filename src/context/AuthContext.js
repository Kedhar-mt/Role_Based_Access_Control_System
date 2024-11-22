import React, { createContext, useState, useEffect } from "react";
import CryptoJS from "crypto-js";

const SECRET_KEY = "your-secret-key";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState("");

  const decryptData = (encryptedData) => {
    try {
      const bytes = CryptoJS.AES.decrypt(encryptedData, SECRET_KEY);
      return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    } catch (e) {
      return null;
    }
  };

  const encryptData = (data) => {
    return CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
  };

  useEffect(() => {
    const authStatus = sessionStorage.getItem("isAuthenticated") === "true";
    const encryptedRole = sessionStorage.getItem("role");

    if (authStatus && encryptedRole) {
      const decryptedRole = decryptData(encryptedRole);
      if (decryptedRole) {
        setIsAuthenticated(true);
        setRole(decryptedRole);
      }
    }
  }, []);

  const login = (role) => {
    setIsAuthenticated(true);
    setRole(role);
    sessionStorage.setItem("isAuthenticated", "true");
    sessionStorage.setItem("role", encryptData(role));
  };

  const logout = () => {
    setIsAuthenticated(false);
    setRole("");
    sessionStorage.clear();
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
