import { useState } from "react";
import { createContext } from "react";

export const DarkModeContext = createContext();
export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <DarkModeContext.Provider value={[darkMode, setDarkMode]}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const ActiveTopicContext = createContext();
export const ActiveTopicProvider = ({ children }) => {
  const [activeTopicIndex, setActiveTopicIndex] = useState(2); // Default index is 2
  return (
    <ActiveTopicContext.Provider value={{ activeTopicIndex, setActiveTopicIndex }}>
      {children}
    </ActiveTopicContext.Provider>
  );
};