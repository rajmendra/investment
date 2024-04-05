import React, { useContext } from 'react'
import AvatarWithHeader from '../components/AvatarWithHeader'
import { DarkModeContext } from '../context';
import BotAvatarLight from "../assets/images/BotAvatarLight.png";
import BotAvatarDark from "../assets/images/BotAvatarDark.png";
import Profile from "../assets/images/profile.png";
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';


const MarketPlace = () => {
    const [darkMode, setDarkMode] = useContext(DarkModeContext);
  return (
    <div className=" py-0 mb-32 px-0 md:py-6 md:px-8 relative ">
        <AvatarWithHeader
        avatar={Profile}
        title="Analyse my Investment and show my investment profile"
      />
      <div className='py-6 px-1'>
      <AvatarWithHeader
        avatar={darkMode ? BotAvatarDark : BotAvatarLight}
        subtitle="Wealth management is like having a personal financial coach for your money. It goes beyond investing, encompassing financial planning, tax reduction, and legacy planning. It's ideal for those with complex finances, ambitious goals, or who lack the time/expertise to manage it themselves. While traditionally for the wealthy, it's becoming more accessible to others. Fees can vary, so research before choosing a manager."
      />
      <div className='py-4 px-16 md:px-12 lg:px-8 flex gap-4 items-center'>
            <ThumbUpOutlinedIcon className={`cursor-pointer ${darkMode ? "text-[#fff]" :"text-[#968864]"}`} />
            <ThumbDownOffAltOutlinedIcon className={`cursor-pointer ${darkMode ? "text-[#fff]" :"text-[#968864]"}`} />
            <VolumeUpOutlinedIcon className={`cursor-pointer ${darkMode ? "text-[#fff]" :"text-[#968864]"}`} />
            <ContentCopyRoundedIcon className={`cursor-pointer ${darkMode ? "text-[#fff]" :"text-[#968864]"}`} />
            <TuneOutlinedIcon className={`cursor-pointer ${darkMode ? "text-[#fff]" :"text-[#968864]"}`} />
            <FileDownloadOutlinedIcon className={`cursor-pointer ${darkMode ? "text-[#fff]" :"text-[#968864]"}`} />

      </div>
      </div>

    </div>
  )
}

export default MarketPlace