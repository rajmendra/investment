import React, { useContext } from 'react'
import LightLogo from "../assets/images/logo_light.png";
import LogoIcon from "../assets/images/logo_light_02.png";
import { DarkModeContext } from "../context";
import { Avatar } from "@mui/material";
import Profile from "../assets/images/profile.png";

const Header = () => {
    const [darkMode, setDarkMode] = useContext(DarkModeContext);
  return (
    <div className="px-0 flex justify-between items-center">
          <div className="flex items-center">
            <img
              src={darkMode ? LogoIcon : LightLogo}
              alt="logo"
              className=" h-10 w-10 md:h-12 md:w-12 lg:h-16 lg:w-16"
            />
            <p
              className={`logo-name text-[20px] md:text-[26px] lg:text-[30px]`}
              style={{ color: darkMode ? "#fff" : "#968864" }}
            >
              Investment . AI
            </p>
          </div>
          <div>
            <Avatar className="ml-6 lg:mr-0" alt="Remy Sharp" src={Profile} />
          </div>
        </div>
  )
}

export default Header