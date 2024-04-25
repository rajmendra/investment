import React, { useContext } from "react";
import LightThemeChatBot from "../assets/images/LightThemeChatBot.png";
import DarkThemeChatBot from "../assets/images/DarkThemeChatBot.png";
import { DarkModeContext } from "../context";
import { Avatar } from "@mui/material";
import Profile from "../assets/images/profile.png";
import SendSharpIcon from '@mui/icons-material/SendSharp';

const PopupChatbot = ({ openChatbot, setOpenChatbot, handleCloseChatbot }) => {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);
  return (
    <div
      className={`py-8 px-4 z-10 ${darkMode ? "bg-[#091B25]": "bg-[#fff]"}  w-full absolute chatbot-shadow rounded-[24px]`}
    >
      <div className={`flex gap-4`}>
        <img
          src={darkMode ? DarkThemeChatBot : LightThemeChatBot}
          alt="chatbot"
          className="w-8 h-12 md:w-10 md:h-14"
        />
        <div className={`flex flex-col w-full`}>
          <h1 className={` text-[16px] font-normal ${darkMode ? "text-[#fff]" : "text-[#2C2C2C]"}`}>
            Hi I'm IRIS friendly neighbor hood chatbot. How can I help you?
          </h1>
          <p className={`inline md:hidden lg:text-[14px] ${darkMode ? "text-[#fff]" : "text-[#5D5D5D]"}`}>2 minutes ago</p>

          <div className="py-2 w-full md:w-[80%]">
            <div className="flex flex-col md:flex-row gap-2 w-full">
              <button
                className={`lg:text-[14px]  flex items-center w-full justify-center font-semibold rounded-md px-3 py-1.5 text-xs leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
                  darkMode
                    ? "bg-transparent text-[#3F9CFF] border  border-[#3F9CFF] "
                    : "bg-transparent text-[#968864] border border-[#968864]"
                }`}
              >
                OSDS running Slow
              </button>
              <button
                className={`lg:text-[14px] flex items-center w-full justify-center font-semibold rounded-md px-3 py-1.5 text-xs leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
                  darkMode
                    ? "bg-transparent text-[#3F9CFF] border  border-[#3F9CFF] "
                    : "bg-transparent text-[#968864] border border-[#968864]"
                }`}
              >
                OSDS running Slow
              </button>
              <button
                className={`lg:text-[14px] flex items-center w-full justify-center font-semibold rounded-md px-3 py-1.5 text-xs leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
                  darkMode
                    ? "bg-transparent text-[#3F9CFF] border  border-[#3F9CFF] "
                    : "bg-transparent text-[#968864] border border-[#968864]"
                }`}
              >
                OSDS running Slow
              </button>
            </div>
          </div>
          <p className={`hidden md:block lg:text-[14px] ${darkMode ? "text-[#fff]" : "text-[#5D5D5D]"}`}>2 minutes ago</p>
        </div>
      </div>
      <div className="py-4 w-full md:w-[80%] ">
        <div className="flex flex-col">
          <div className="float-right justify-end flex items-center gap-4 py-2">
            <Avatar src={Profile} sx={{ width: "40px", height: "40px" }} />
            <div className="flex flex-col">
              <p className={`lg:text-[16px] ${darkMode ? "text-[#fff]" : "text-[#2C2C2C]"}`}>I am looking for customer Data?</p>
              <p className={`lg:text-[14px] ${darkMode ? "text-[#fff]" : "text-[#5D5D5D]"}`}>Just Now</p>
            </div>
          </div>
          <div className="float-left justify-start flex items-center gap-4 py-2">
            <img
              src={darkMode ? DarkThemeChatBot : LightThemeChatBot}
              alt="chatbot"
              className="w-8 h-12 md:w-10 md:h-14"
            />
            <div className="flex flex-col">
              <p className={`lg:text-[14px] ${darkMode ? "text-[#fff]" : "text-[#5D5D5D]"}`}>Typing....</p>
              
            </div>
          </div>
        </div>
       
      </div>
      <div className="md:px-12 lg:px-32 relative hidden md:block">
        <form className="space-y-6" action="#" method="POST">
        <div>
          <div className="mt-2">
            <input
              id="prompt"
              name="prompt"
              type="text"
              autoComplete="prompt"
              placeholder="Enter your question..."
              required
              className={`lg:text-[18px] block w-full rounded-[16px] ${darkMode ? "" :"chatbot-shadow"}   border-0 py-3.5 px-5 relative shadow-sm ring-1 ring-inset  focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 ${
                darkMode
                  ? "text-[#fff] bg-[#091B25] placeholder:text-[#fff] focus:ring-[#3F9CFF] ring-[#3F9CFF]"
                  : "text-[#2C2C2C] placeholder:text-[#2C2C2C] focus:ring-[#968864]  ring-[#968864]"
              }`}
            />
          </div>
        </div>

        <div className='absolute bottom-[39.5%] right-[4.5%]  md:bottom-[16.5%] md:right-[8%] lg:bottom-[14.5%] lg:right-[10.5%]'>
          <SendSharpIcon className={`${darkMode ? "text-[#3F9CFF]" : "text-[#968864]"}`} sx={{width:"2em", height:"1.5em", cursor:"pointer"}} />
        </div>
       
      </form>
        </div>
    </div>
  );
};

export default PopupChatbot;
