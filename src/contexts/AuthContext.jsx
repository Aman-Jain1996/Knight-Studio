import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginService, SignUpService } from "../Services";
import { ToastHandler } from "../Utlis/toastUtils";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const browserToken = localStorage.getItem("userToken");
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(browserToken?.token || null);
  const navigate = useNavigate();

  const loginHandler = async (email, password, path) => {
    try {
      const {
        status,
        data: { foundUser, encodedToken },
      } = await LoginService(email, password);
      if (status === 200 || status === 201) {
        ToastHandler("success", "Logged in Successfully.....");
        localStorage.setItem(
          "userToken",
          JSON.stringify({ token: encodedToken })
        );
        setUser(foundUser);
        setToken(encodedToken);
        navigate(path);
      }
    } catch (err) {
      ToastHandler("error", "Something went Wrong.....");
      console.error(err);
    }
  };

  const logoutHandler = async () => {
    localStorage.removeItem("userToken");
    setUser(null);
    setToken(null);
    navigate("/");
    ToastHandler("success", "Logged out Successfully.....");
  };

  const signUpHandler = async (firstName, lastName, email, password) => {
    try {
      const {
        data: { createdUser, encodedToken },
        status,
      } = await SignUpService(firstName, lastName, email, password);
      if (status === 200 || status === 201) {
        ToastHandler("success", "Logged in Successfully.....");
        localStorage.setItem(
          "userToken",
          JSON.stringify({ token: encodedToken })
        );
        setUser(createdUser);
        setToken(encodedToken);
        navigate("/explore");
      }
    } catch (err) {
      ToastHandler("error", "Something went Wrong.....");
      console.error(err);
    }
  };

  return (
    <>
      <AuthContext.Provider
        value={{ loginHandler, logoutHandler, signUpHandler, user, token }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
}

export const useAuth = () => useContext(AuthContext);
