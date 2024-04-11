import React, { useContext } from 'react'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { DarkModeContext } from '../context';

const ActionsIcons = () => {
    const [darkMode, setDarkMode] = useContext(DarkModeContext);
  return (
    <>
    <ThumbUpOutlinedIcon className={`cursor-pointer ${darkMode ? "text-[#fff]" :"text-[#968864]"}`} />
            <ThumbDownOffAltOutlinedIcon className={`cursor-pointer ${darkMode ? "text-[#fff]" :"text-[#968864]"}`} />
            <VolumeUpOutlinedIcon className={`cursor-pointer ${darkMode ? "text-[#fff]" :"text-[#968864]"}`} />
            <ContentCopyRoundedIcon className={`cursor-pointer ${darkMode ? "text-[#fff]" :"text-[#968864]"}`} />
            <TuneOutlinedIcon className={`cursor-pointer ${darkMode ? "text-[#fff]" :"text-[#968864]"}`} />
            <FileDownloadOutlinedIcon className={`cursor-pointer ${darkMode ? "text-[#fff]" :"text-[#968864]"}`} />
    </>
  )
}

export default ActionsIcons