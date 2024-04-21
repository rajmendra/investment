import React, { useContext } from 'react'
import { DarkModeContext } from '../context';
// import Profile from "../assets/images/profile.png";
import { Avatar } from '@mui/material';
import OptionMenu from './OptionMenu';


const AvatarWithHeader = ({avatar, title, subtitle, botAvatar, optionMenu}) => {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);

  return (
    <div className={`flex ml-4 md:ml-0 ${!botAvatar ? "items-center" : "items-start"}  gap-2 md:gap-2`}>
            <Avatar sx={{width: !botAvatar ? "40px" : "25px", height:!botAvatar ? "40px" : "25px"}} className="mr-4 w-14 h-14 lg:mr-0"  alt="Remy Sharp" src={avatar} />
           { title && <h1
              className={`text-[16px] md:text-[18px] lg:text-[24px] ${
                darkMode ? "text-[#3F9CFF]" : "text-[#968864]"
              }`}
            >
              {title}
            </h1>}
            { !botAvatar && <h1
              className={` font-bold text-[16px] md:text-[18px] lg:text-[18px] ${
                darkMode ? "text-[#3F9CFF]" : "text-[#968864]"
              }`}
            >
              {subtitle}
            </h1>}
            { botAvatar && <h1
              className={`text-[14px] md:text-[16px] lg:text-[16px]   ${
                darkMode ? "text-[#fff]" : "text-[#2C2C2C]"
              }`}
            >
              {subtitle}
            </h1>}
            {title  && optionMenu && <OptionMenu />}

          </div>
  )
}

export default AvatarWithHeader