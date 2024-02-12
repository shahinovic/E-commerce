import { createContext, useState } from "react";

export let TokenContext = createContext();

const TokenContextProvider = ({ children }) => {
  const [token, setToken] = useState();
  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
};

export default TokenContextProvider;
