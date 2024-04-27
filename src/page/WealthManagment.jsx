import React, { useContext, useState } from "react";
import BotAvatarLight from "../assets/images/BotAvatarLight.png";
import BotAvatarDark from "../assets/images/BotAvatarDark.png";
import AvatarWithHeader from "../components/AvatarWithHeader";
import { DarkModeContext } from "../context";
import PieChart from "../components/PiaChart";

import Profile from "../assets/images/profile.png";
import ActionsIcons from "../components/ActionsIcons";
import CompossedLineBarArea from "../components/CompossedLineBarArea";
import PromptBox from "../components/PromptBox";
import PopupComponent from "../components/PopupComponent";
import PopupChatbot from "../components/PopupChatbot";
import ExcelImg from '../assets/images/excel.png'
import PdfImg from '../assets/images/pdf_icon.png'
import DocsImg from '../assets/images/word_icon.png'

const WealthManagment = () => {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);
  const [popupActive, setPopupActive] = useState(false);
  const [popupActiveChatbot, setPopupActiveChatbot] = useState(false);
  const [open, setOpen] = useState(false);
  const [openChatbot, setOpenChatbot] = useState(false);

  const data = [
    {
      id: 1,
      name: "Conservative",
      values: [
        { x: "75%", y: 75 },
        { x: "20%", y: 20 },
        { x: "5%", y: 5 },
      ],
      colors: darkMode
        ? ["#D93F3F", "#04C6E7", "#F8B200"]
        : ["#BBBBA4", "#F2CA63", " #9E6D58"],
    },
    {
      id: 2,
      name: "Moderate",
      values: [
        { x: "55%", y: 55 },
        { x: "40%", y: 40 },
        { x: "5%", y: 5 },
      ],
      colors: darkMode
        ? ["#D93F3F", "#04C6E7", "#F8B200"]
        : ["#BBBBA4", "#F2CA63", " #9E6D58"],
    },
    {
      id: 3,
      name: "Balanced",
      values: [
        { x: "35%", y: 35 },
        { x: "60%", y: 60 },
        { x: "5%", y: 5 },
      ],
      colors: darkMode
        ? ["#D93F3F", "#04C6E7", "#F8B200"]
        : ["#BBBBA4", "#F2CA63", " #9E6D58"],
    },
    {
      id: 4,
      name: "Growth",
      values: [
        { x: "15%", y: 15 },
        { x: "80%", y: 80 },
        { x: "5%", y: 5 },
      ],
      colors: darkMode
        ? ["#D93F3F", "#04C6E7", "#F8B200"]
        : ["#BBBBA4", "#F2CA63", " #9E6D58"],
    },
    {
      id: 5,
      name: "Aggressive Growth",
      values: [
        { x: null, y: 0 },
        { x: "95%", y: 95 },
        { x: "5%", y: 5 },
      ],
      colors: darkMode
        ? ["#D93F3F", "#04C6E7", "#F8B200"]
        : ["#BBBBA4", "#F2CA63", " #9E6D58"],
    },
  ];

  const colorIndication = [
    {
      id: 1,
      name: "Cash",
      color: "#BBBBA4",
    },
    {
      id: 2,
      name: "Real Estate",
      color: "#9E6D58",
    },
    {
      id: 3,
      name: "Stock",
      color: "#F2CA63",
    },
  ];

  const articleData = [
    {
      id:1,
      topic:"https://www.investopedia.com/articles/basics/11/3-s-simple-investing.asp is a great introduction to investing, covering the basics of asset classes, diversification, and portfolio management. "
    },
    {
      id:2,
      topic:"https://www.investopedia.com/articles/basics/11/3-s-simple-investing.asp is a great introduction to investing, covering the basics of asset classes, diversification, and portfolio management. "
    },

  ]


  const handleClickOpen = () => {
    setOpen(true);
    setPopupActive(true)

  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickChatbot = () =>{
    setOpenChatbot(true);
    setPopupActiveChatbot(true)
  }
  const handleCloseChatbot = () => {
    setOpenChatbot(false);
  };
  return (
    <div className=" py-0 px-0 md:py-6 md:px-2 relative h-[60vh] overflow-scroll">
      {popupActive && 
         <PopupComponent open={open} setOpen={setOpen} handleClose={handleClose} handleClickOpen={handleClickOpen} />
        }
      <AvatarWithHeader
        avatar={darkMode ? BotAvatarDark : BotAvatarLight}
        title="Wealth Management"
      />
      
      <div className="py-8 px-2 md:px-4">
        <div className="flex justify-between items-center">
          <div>
            <p
              className={`font-normal md:font-semibold text-[15px] md:text-[20px] ${
                darkMode ? "text-[#fff]" : "text-[#525252]"
              }`}
            >
              Risk Spectrum
            </p>
          </div>
          <div className="flex items-center gap-2 md:gap-8">
            {colorIndication.map((type) => (
              <div key={type.id} className="flex items-center gap-2 md:gap-4">
                <div
                  className={`rounded-full w-4 h-4 ${
                    type.id === 1
                      ? darkMode
                        ? "bg-[#D93F3F]"
                        : "bg-[#BBBBA4]"
                      : type.id === 2
                      ? darkMode
                        ? " bg-[#04C6E7]"
                        : " bg-[#9E6D58]"
                      : darkMode
                      ? "bg-[#F8B200]"
                      : "bg-[#F2CA63]"
                  }`}
                ></div>
                <p
                  className={`font-normal text-[14px] md:text-[16px] ${
                    darkMode ? "text-[#fff]" : "text-[#525252]"
                  }`}
                >
                  {type.name}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="py-8 px-0 block md:flex justify-between overflow-y-scroll md:overflow-x-scroll relative">
            {data.map((chartData) => (
              <div className="px-2 " key={chartData.id}>
                <PieChart
                  name={chartData.name}
                  colors={chartData.colors}
                  values={chartData.values}
                />
              </div>
            ))}
          </div>
          <div
            className="inline md:hidden"
            style={{
              position: "absolute",
              top: "14%",
              right: "25%",
              transform: "translateX(-50%)",
              width: 0,
              height: "80%",
              borderLeft: `${
                darkMode ? "2px solid #c4bebe" : "2px solid #DEDEDE"
              } `,
            }}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="128"
            viewBox="0 0 24 24"
            fill={darkMode ? "#c4bebe" : " #DEDEDE"}
            style={{
              position: "absolute",
              top: "10%",
              right: "22%",
              transform: "rotate(180deg)",
            }}
            className="inline md:hidden opacity-[0.7]"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M12 15V3h2v12h7l-8 8-8-8h7z" strokeWidth="1" />
          </svg>
          <p
        style={{
          position: "absolute",
          top: "16%",
          right: "0",
          width: "80px",
          fontSize: "14px",
        }}
        className={`inline md:hidden ${
          darkMode ? "text-[#fff]" : "text-[#525252]"
        }`}
      >
        Decreasing investment risk and increasing inflation risk
      </p>
        </div>
      </div>
     
      <AvatarWithHeader
        avatar={Profile}
        title="Analyse my Investment and show my investment profile"
        botAvatar={false}
        optionMenu={true}
      />
      <div className="py-6 px-1">
        <AvatarWithHeader
          avatar={darkMode ? BotAvatarDark : BotAvatarLight}
          subtitle="Wealth management is like having a personal financial coach for your money. It goes beyond investing, encompassing financial planning, tax reduction, and legacy planning. It's ideal for those with complex finances, ambitious goals, or who lack the time/expertise to manage it themselves. While traditionally for the wealthy, it's becoming more accessible to others. Fees can vary, so research before choosing a manager."
          botAvatar={true}
          optionMenu={false}
       />
        <div className="py-4 px-16 md:px-12 lg:px-8 flex gap-4 items-center">
          <ActionsIcons />
        </div>
      </div>
      <div className="flex w-full flex-col md:overflow-visible md:flex-row md:gap-2 lg:gap-0">
        <div className="w-full md:w-[50%] lg:w-[48%]">
          <AvatarWithHeader
            avatar={Profile}
            subtitle="Analyse and compare uploaded Sheets"
            botAvatar={false}
          />
          <div className="py-6 px-1">
            <AvatarWithHeader
              avatar={darkMode ? BotAvatarDark : BotAvatarLight}
              subtitle="Wealth management is like having a personal financial coach for your money. It goes beyond investing, encompassing financial planning, tax reduction, and legacy planning. It's ideal for those with complex finances, ambitious goals, or who lack the time/expertise to manage it themselves. While traditionally for the wealthy, it's becoming more accessible to others. Fees can vary, so research before choosing a manager."
              botAvatar={true}
            />
          </div>
          <CompossedLineBarArea colors={["#FF715B","#6665DD"]} />
          <div className="py-6 px-10">
          <p className={`text-[14px] md:text-[16px] lg:text-[16px]   ${
                darkMode ? "text-[#fff]" : "text-[#2C2C2C]"
              }`}>Lorem ipsum dolor sit amet consectetur. Adipiscing pulvinar aliquet commodo feugiat elit dolor ut. Pretium in arcu ultrices bibendum neque nulla. </p>
          </div>
          <div>
          <PromptBox />
          </div>
          
        </div>
        <div className="hidden md:w-[0%] md:inline lg:w-[4%]"></div>
        <div className="w-full md:w-[50%] lg:w-[48%]">
          <AvatarWithHeader
            avatar={Profile}
            subtitle="Analyse and compare uploaded Sheets"
            botAvatar={false}
          />
          <div className="py-6 px-1">
            <AvatarWithHeader
              avatar={darkMode ? BotAvatarDark : BotAvatarLight}
              subtitle="It goes beyond investing, encompassing financial planning, tax reduction, and legacy planning. It's ideal for those with complex finances, ambitious goals, or who lack the time/expertise to manage it themselves. While traditionally for the wealthy, it's becoming more accessible to others."
              botAvatar={true}
            />
          </div>
          <CompossedLineBarArea colors={["#FCFF5B","#19AA87"]} />
          <div className="py-6 px-10">
          <p className={`text-[14px] md:text-[16px] lg:text-[16px]   ${
                darkMode ? "text-[#fff]" : "text-[#2C2C2C]"
              }`}>Porttitor auctor ultricies commodo aenean sit magna arcu. Purus amet non suspendisse nec nulla purus ut. Eget arcu faucibus enim faucibus mauris et.  </p>
          </div>
          <div>
          <PromptBox />
          </div>
          
        </div>
      </div>
      <div className="flex w-full flex-col md:overflow-visible md:flex-row md:gap-2 lg:gap-0">
        <div className="w-full md:w-[50%] lg:w-[48%]">
          
          <div className="py-6 px-1">
            <AvatarWithHeader
              avatar={darkMode ? BotAvatarDark : BotAvatarLight}
              subtitle="Jan24-Statement.pdf"
              botAvatar={true}
            />
          </div>
          <AvatarWithHeader
            avatar={Profile}
            subtitle="Analyse uploaded Sheetss"
            botAvatar={false}
          />
          <div className="py-6 px-1">
            <AvatarWithHeader
              avatar={darkMode ? BotAvatarDark : BotAvatarLight}
              subtitle="Wealth management is like having a personal financial coach for your money. It goes beyond investing, encompassing financial planning, tax reduction, and legacy planning. "
              botAvatar={true}
            />
          </div>
          <CompossedLineBarArea colors={["#FF715B","#6665DD"]} />
          <AvatarWithHeader
            avatar={Profile}
            subtitle="Odio sit at a dictum vestibulum et vitae. Interdum enim arcu tincidunt iaculis egestas at. "
            botAvatar={false}
          />
          <div className="py-6 px-1">
            <AvatarWithHeader
              avatar={darkMode ? BotAvatarDark : BotAvatarLight}
              subtitle="Consequat pulvinar maecenas pretium bibendum lorem posuere nibh pellentesque. Ac id dignissim non diam viverra cursus ut vitae. "
              botAvatar={true}
            />
          </div>
          <AvatarWithHeader
            avatar={Profile}
            subtitle="Odio sit at a dictum vestibulum et vitae. Interdum enim arcu tincidunt iaculis egestas at. "
            botAvatar={false}
          />
          <div className="flex px-12 gap-4">
              <div className="flex flex-col items-center justify-center">
                  <img src={ExcelImg} alt="excel icon"  className="w-12 h-12"/>
                  <p className={`font-bold text-[14px] ${darkMode ? "text-[#fff]" :"text-[#2C2C2C]"}`}>Jan’24.exl</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                  <img src={PdfImg} alt="pdf icon"  className="w-10 h-12"/>
                  <p className={`font-bold text-[14px] ${darkMode ? "text-[#fff]" :"text-[#2C2C2C]"}`}>Lorem.pdf</p>
              </div>
          </div>
          <div className="py-6 px-1">
            <AvatarWithHeader
              avatar={darkMode ? BotAvatarDark : BotAvatarLight}
              botAvatar={true}
              articleData={articleData}
            />
          </div>
          <div>
          
          <PromptBox />
          </div>
          
        </div>
        <div className="hidden md:w-[0%] md:inline lg:w-[4%]"></div>
        <div className="w-full md:w-[50%] lg:w-[48%]">
          
          <div className="py-6 px-1">
            <AvatarWithHeader
              avatar={darkMode ? BotAvatarDark : BotAvatarLight}
              subtitle="Feb24-Statement.pdf "
              botAvatar={true}
            />
          </div>
          <AvatarWithHeader
            avatar={Profile}
            subtitle="Show  Investment options"
            botAvatar={false}
          />
          <div className="py-6 px-1">
            <AvatarWithHeader
              avatar={darkMode ? BotAvatarDark : BotAvatarLight}
              botAvatar={true}
              graph={true}
            />
          </div>

          <AvatarWithHeader
            avatar={Profile}
            subtitle="Suggest Articles "
            botAvatar={false}
          />
          <div className="py-6 px-1">
            <AvatarWithHeader
              avatar={darkMode ? BotAvatarDark : BotAvatarLight}
              botAvatar={true}
              articleData={articleData}
            />
          </div>
          <AvatarWithHeader
            avatar={Profile}
            subtitle="Ac id dignissim non diam viverra cursus ut vitae. "
            botAvatar={false}
          />
          <div className="flex px-12 gap-4">
              <div className="flex flex-col items-center justify-center">
                  <img src={PdfImg} alt="excel icon"  className="w-10 h-12"/>
                  <p className={`font-bold text-[14px] ${darkMode ? "text-[#fff]" :"text-[#2C2C2C]"}`}>Jan’24.pdf</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                  <img src={DocsImg} alt="pdf icon"  className="w-12 h-12"/>
                  <p className={`font-bold text-[14px] ${darkMode ? "text-[#fff]" :"text-[#2C2C2C]"}`}>Analysis.docx</p>
              </div>
          </div>
          <div className="py-6 px-1">
            <AvatarWithHeader
              avatar={darkMode ? BotAvatarDark : BotAvatarLight}
              botAvatar={true}
              articleData={articleData}
            />
          </div>
          <div>
            
          <PromptBox />
          </div>
          
        </div>
      </div>

      <div className="relative ">
      {popupActiveChatbot && 
          <PopupChatbot openChatbot={openChatbot} setOpenChatbot={setOpenChatbot} handleCloseChatbot={handleCloseChatbot} />
        }
      </div>
     
      <div className="py-10">
      <button onClick={handleClickOpen} className={` text-white py-2 px-4 rounded-md ${
          darkMode ? "bg-[#3F9CFF]" : "bg-[#968864]"
        }`}>Open Popup</button>
      </div>
      <div className="py-40">
      <button onClick={handleClickChatbot} className={` text-white py-2 px-4 rounded-md ${
          darkMode ? "bg-[#3F9CFF]" : "bg-[#968864]"
        }`}>Open Chatbot</button>
      </div>

      
        
        <div className=" ">
        <PromptBox />

        </div>
    </div>
  );
};

export default WealthManagment;
