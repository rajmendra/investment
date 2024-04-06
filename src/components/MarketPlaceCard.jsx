import React, { useContext } from "react";
import RatingComponent from "./RatingComponent";
import { DarkModeContext } from "../context";

const MarketPlaceCard = ({ title, description, ratingLength }) => {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);

  return (
    <div
      className={`py-4 px-4 flex w-[380px] md:w-[290px] lg:w-[390px] flex-col justify-between rounded-md ${
        darkMode ? "bg-[#091B25]" : "bg-[#fff]"
      }`}
      style={{
        boxShadow: darkMode
          ? "0px 4px 12px 0px rgba(0, 0, 0, 0.25)"
          : "0px 4px 12px 0px rgba(0, 0, 0, 0.25)",
      }}
    >
      <h1
        className={`text-[16px] font-bold ${
          darkMode ? "text-[#fff]" : "text-[#968864]"
        }`}
      >
        {title}
      </h1>
      <p
        className={`my-4 text-[14px] font-normal ${
          darkMode ? "text-[#fff]" : "text-[#2C2C2C]"
        }`}
      >
        {description}
      </p>
      <RatingComponent value={ratingLength} />
    </div>
  );
};

export default MarketPlaceCard;
