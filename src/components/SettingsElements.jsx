import React, { useContext } from "react";
import { DarkModeContext } from "../context";

const SettingsElements = ({ title, content }) => {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);

  return (
    <div className={`w-full md:w-[50%] py-4 md:py-8 px-4`}>
      <h1
        className={`text-[16px] md:w-[100%] lg:w-[70%]  font-bold ${
          darkMode ? "text-[#3F9CFF]" : "text-[#2C2C2C]"
        }`}
      >
        {title}
      </h1>
      {content.map((item) => (
        <p key={item.id} className={`text-[16px]  font-normal ${
            darkMode ? "text-[#fff]" : "text-[#2C2C2C]"
          }`}>
          {item.subtitle} : <span>{item.value === null ? 'null' : (typeof item.value === 'string' && item.value!=="" ? `"${item.value}"` : item.value)}</span>
        </p>
      ))}
    </div>
  );
};

export default SettingsElements;
