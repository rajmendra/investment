import { useEffect, useState } from "react";
import { createContext } from "react";

export const ActiveTopicsContext = createContext();
export const ActiveTopicsProvider = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(1);
  
  useEffect(() => {
    
  }, [activeIndex])
  
  return (
    <ActiveTopicsContext.Provider value={[activeIndex, setActiveIndex]}>
      {children}
    </ActiveTopicsContext.Provider>
  );
};

