import { jwtDecode } from "jwt-decode";
import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProviderContext = ({ children }) => {
  const token = localStorage.getItem("token");

  const [user, setUser] = useState(token ? jwtDecode(token) : null);
  const baseUrl = `https://ecommerce.routemisr.com`;
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishListOpen, setIsWishListOpen] = useState(false);
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        baseUrl,
        isCartOpen,
        setIsCartOpen,
        isWishListOpen,
        setIsWishListOpen,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProviderContext;
