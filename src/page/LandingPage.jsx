import React, { useContext, useState } from "react";
import DrawerComponent from "../components/Drawer";
import LightLogo from "../assets/images/logo_light.png";
import LogoIcon from "../assets/images/logo_light_02.png";
import { DarkModeContext } from "../context";
import { Avatar } from "@mui/material";
import Profile from "../assets/images/profile.png";
import SliderCard from "../components/SliderCard";
import PromptBox from "../components/PromptBox";
import MobileDrawer from "../components/MobileDrawer";

const LandingPage = () => {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);
  

  

  return (
    <>
     <div className={`max-w-auto flex ${darkMode ? "dark-background" : "light-background"}`}>
      
      <DrawerComponent className="hidden md:inline" />
      <MobileDrawer className="inline md:hidden" />
      <div
        className={`py-2 px-1 flex flex-col w-full h-full relative mb-[50%] lg:mb-[10%] md:py-8 md:px-6  overflow-hidden ${
          darkMode ? "dark-background" : "light-background"
        }`}
      >
        <div className="px-4 md:px-0 flex justify-between items-center">
          <div className="flex items-center">
            <img
              src={darkMode ? LogoIcon : LightLogo}
              alt="logo"
              className=" h-10 w-10 md:h-12 md:w-12 lg:h-16 lg:w-16"
            />
            <p
              className={`logo-name text-[22px] md:text-[26px] lg:text-[30px]`}
              style={{ color: darkMode ? "#fff" : "#968864" }}
            >
              Investment . AI
            </p>
          </div>
          <div>
            <Avatar className="mr-4 lg:mr-0" alt="Remy Sharp" src={Profile} />
          </div>
        </div>
        <div className="py-4 px-4  lg:py-16 lg:px-16">
          <h1
            className={`text-[32px] font-bold ${
              darkMode ? "text-[#fff]" : "text-[#424241]"
            }`}
          >
            Hello{" "}
            <span
              className={` ${darkMode ? "text-[#3F9CFF]" : "text-[#968864]"}`}
            >
              Sid,
            </span>
          </h1>
          <h1
            className={` text-[18px] md:text-[26px] lg:text-[32px] font-bold ${
              darkMode ? "text-[#fff]" : "text-[#424241]"
            }`}
          >
            How can I help you today? Please select a Template to Start
          </h1>
        </div>
        <SliderCard  />
        <PromptBox />
      </div>
    </div>
    </>
   
  );
};

export default LandingPage;
