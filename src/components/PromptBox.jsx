import React, { useContext } from 'react'
import { DarkModeContext } from '../context';
import LightThemeChatBot from '../assets/images/LightThemeChatBot.png'
import DarkThemeChatBot from '../assets/images/DarkThemeChatBot.png'
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import KeyboardVoiceOutlinedIcon from '@mui/icons-material/KeyboardVoiceOutlined';

const PromptBox = () => {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);

  return (
    <div className=' py-20 px-8 pr-[20px] md:py-28 md:px-2 lg:py-10 lg:px-16'>
        
        <form className="space-y-6" action="#" method="POST">
              <div>
                
                <div className="mt-2">
                  <input
                    id="prompt"
                    name="prompt"
                    type="text"
                    autocomplete="prompt"
                    placeholder="Enter a prompt here..."
                    required
                    className={`block w-full rounded-[16px] border-0 py-3.5 px-5 relative shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 ${
                      darkMode
                        ? "text-[#fff] bg-transparent placeholder:text-[#fff] focus:ring-[#3F9CFF] ring-[#3F9CFF]"
                        : "text-[#2C2C2C] placeholder:text-[#2C2C2C] focus:ring-[#968864] ring-[#968864]"
                    }`}
                  />
                </div>
              </div>

              <div className='absolute bottom-[16%] right-[6%] md:bottom-[20%] md:right-[6%] lg:bottom-[14%] lg:right-[6%]'>
                <img src={darkMode ? DarkThemeChatBot : LightThemeChatBot} alt="chatbot" className='w-12 h-16' />
              </div>
              <div className='absolute bottom-[10.5%] right-[4.5%]  md:bottom-[14.5%] md:right-[7%] lg:bottom-[7.5%] lg:right-[7.5%]'>
               <InsertPhotoIcon className={`${darkMode ? "text-[#3F9CFF]" : "text-[#968864]"}`} sx={{width:"2em", height:"1.5em", cursor:"pointer"}} />
               <KeyboardVoiceOutlinedIcon className={`${darkMode ? "text-[#3F9CFF]" : "text-[#968864]"}`}  sx={{width:"2em", height:"1.5em", cursor:"pointer"}} />     
               </div>
            </form>
    </div>
  )
}

export default PromptBox