import { createContext, useState } from "react";

export let CounterContext = createContext();

const CounterContextProvider = ({ children }) => {
  const [couter, setCounter] = useState(0);
  return (
    <CounterContext.Provider value={{ couter, setCounter }}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterContextProvider;
