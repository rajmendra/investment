import React, { useContext } from 'react'
import { DarkModeContext } from '../context';
// import Profile from "../assets/images/profile.png";
import { Avatar } from '@mui/material';


const AvatarWithHeader = ({avatar, title, subtitle}) => {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);

  return (
    <div className="flex ml-4 md:ml-0 items-center gap-2 md:gap-4">
            <Avatar className="mr-4 lg:mr-0" alt="Remy Sharp" src={avatar} />
           { title && <h1
              className={`text-[16px] md:text-[18px] lg:text-[24px] ${
                darkMode ? "text-[#3F9CFF]" : "text-[#968864]"
              }`}
            >
              {title}
            </h1>}
            { subtitle && <h1
              className={`text-[14px] md:text-[16px] lg:text-[16px] ${
                darkMode ? "text-[#fff]" : "text-[#2C2C2C]"
              }`}
            >
              {subtitle}
            </h1>}

          </div>
  )
}

export default AvatarWithHeader