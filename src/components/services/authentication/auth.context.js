import React, { useState, createContext } from "react";
import { getAuth } from "firebase/auth";

import { loginRequest, onSignUpRequest } from "./auth.service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState([]);

  const auth = getAuth();
  auth.onAuthStateChanged((usr) => {
    if (usr) {
      setUser(usr);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  });

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        let message;
        if (e && e.code === "auth/invalid-email") {
          message = "Please enter valid email";
        }
        if (e && e.code === "auth/wrong-password") {
          message = "Please enter valid password";
        }
        setError(message);
      });
  };

  const onSignUp = (email, password, repeatedPassword) => {
    setIsLoading(true);
    if (password !== repeatedPassword) {
      setError("Error: Password do not match");
      return;
    }
    onSignUpRequest(email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        // setError(e.toString().substring(25, 65));
        setError(e);
      });
  };

  const onSignOut = () => {
    const auth = getAuth();
    setUser(null);
    return auth.signOut();
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onSignUp,
        onSignOut,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
