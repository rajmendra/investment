import React, { useContext } from 'react'
import BotAvatarLight from '../assets/images/BotAvatarLight.png'
import BotAvatarDark from '../assets/images/BotAvatarDark.png'
import AvatarWithHeader from '../components/AvatarWithHeader'
import { DarkModeContext } from '../context'

const InvestmentManagement = () => {
    const [darkMode, setDarkMode] = useContext(DarkModeContext);
  return (
    <div className=" py-6 mb-32 px-0 md:py-6 md:px-8 relative ">
         <AvatarWithHeader avatar={ darkMode ? BotAvatarDark : BotAvatarLight} title="Investment Mangement" />
          
        </div>
  )
}

export default InvestmentManagement