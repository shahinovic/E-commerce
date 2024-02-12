import { jwtDecode } from "jwt-decode";
import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProviderContext = ({ children }) => {
  const token = localStorage.getItem("token");

  const [user, setUser] = useState(token ? jwtDecode(token) : null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProviderContext;
