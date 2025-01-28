// import axios from "axios";
// import { createContext, useState, useEffect } from "react";
// import { useCookies } from "react-cookie";
// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [username, setUsername] = useState("");
//   const [cookies, removeCookie] = useCookies([]);

//   useEffect(() => {
    
//     const verifyCookie = async () => {
//       try {
//         const { data } = await axios.post("http://localhost:3002/userVerification", {}, { withCredentials: true });
//         if (data.status) {
//           setIsAuthenticated(true);
//           setUsername(data.user);
//         } else {
//           setIsAuthenticated(false);
//           removeCookie("token");
//         }
//       } catch (error) {
//         console.error(error);
//         setIsAuthenticated(false);
//       }
//     };

//     verifyCookie();
//   }, [cookies]);

//   const login = () => setIsAuthenticated(true);
//   const logout = () => {
//     setIsAuthenticated(false);
//     removeCookie("token");
//     setUsername("");
//   };

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, username, login, logout, cookies }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };


import axios from "axios";
import { createContext, useState, useEffect } from "react";
import { useCookies } from "react-cookie";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState("");
  const [cookies, removeCookie] = useCookies([]);

  useEffect(() => {
    
    const verifyCookie = async () => {
      if (!cookies.token) {
        setIsAuthenticated(false);
      }
      const { data } = await axios.post(
        `${import.meta.env.VITE_API}`,
        {},
        { withCredentials: true }
      );
      const { status, user, id } = data;
      setUsername(user);
      setUserId(id);
      return status
        ? setIsAuthenticated(true)
        : (removeCookie("token"), setIsAuthenticated(false));
    };

    verifyCookie();
  }, [cookies, removeCookie, userId]);

  const login = () => setIsAuthenticated(true);
  const logout = () => {
    setIsAuthenticated(false);
    removeCookie("token");
    setUsername("");
    setUserId("");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, username, login, logout, cookies, userId }}>
      {children}
    </AuthContext.Provider>
  );
};


