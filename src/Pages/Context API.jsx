import React, { createContext, useEffect, useState } from "react";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [service, setService] = useState([]);
  const authorizationToken = `Bearer ${token}`;
  const storetokenInLS = (serverToken) => {
    localStorage.setItem("token", serverToken);
    setToken(serverToken); //This is the line that causes error OF Logout
  };

  // Logout functionality
  const LogoutUser = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser({});
  };

  const isLoggedIn = !!token;

  // JWT Authentication
  const userAuthentication = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://novo-backend-server-1qds.onrender.com/api/auth/user",
        {
          method: "GET",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setUser(data.userData);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Service Data Fetching
  const getServices = async () => {
    try {
      const response = await fetch(
        "https://novo-backend-server-1qds.onrender.com/api/data/service",
        {
          method: "GET",
        }
      );
      if (response.ok) {
        const data = await response.json();

        setService(data);
      } else {
        console.error("Failed to fetch service data");
        setService("");
      }
    } catch (error) {
      console.error("Error:", error);
      setService("");
    }
  };

  useEffect(() => {
    getServices();
    if (token) {
      userAuthentication();
    } else {
      setUser({});
      setService("");
    }
  }, [token]);

  return (
    <AuthContext.Provider
      value={{
        storetokenInLS,
        LogoutUser,
        isLoggedIn,
        user,
        service,
        authorizationToken,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
