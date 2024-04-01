import React, { useContext } from "react";
import DrawerComponent from "../components/Drawer";
import LightLogo from "../assets/images/logo_light.png";
import LogoIcon from "../assets/images/logo_light_02.png";
import { DarkModeContext } from "../context";
import { Avatar } from "@mui/material";
import Profile from "../assets/images/profile.png";
import SliderCard from "../components/SliderCard";

const LandingPage = () => {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);

  

  return (
    <div className="flex">
      <DrawerComponent />
      <div
        className={`flex flex-col w-full h-full relative py-8 px-6 overflow-hidden ${
          darkMode ? "dark-background" : "light-background"
        }`}
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              src={darkMode ? LogoIcon : LightLogo}
              alt="logo"
              className="h-16 w-16"
            />
            <p
              className={`logo-name `}
              style={{ color: darkMode ? "#fff" : "#968864" }}
            >
              Investment . AI
            </p>
          </div>
          <div>
            <Avatar alt="Remy Sharp" src={Profile} />
          </div>
        </div>
        <div className="py-16 px-16">
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
            className={`text-[32px] font-bold ${
              darkMode ? "text-[#fff]" : "text-[#424241]"
            }`}
          >
            How can I help you today? Please select a Template to Start
          </h1>
        </div>
        <SliderCard />
      </div>
    </div>
  );
};

export default LandingPage;
