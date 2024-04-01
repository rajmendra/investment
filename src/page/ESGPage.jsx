import React, { useContext, useState } from "react";
import DrawerComponent from "../components/Drawer";
import LightLogo from "../assets/images/logo_light.png";
import LogoIcon from "../assets/images/logo_light_02.png";
import { DarkModeContext } from "../context";
import { Avatar } from "@mui/material";
import Profile from "../assets/images/profile.png";
import SliderCard from "../components/SliderCard";
import PromptBox from "../components/PromptBox";
import NewsCard from "../components/NewsCard";
import CompanyName from "../assets/images/company_02.png";
import CompanyBgImage from "../assets/images/company_bg_02.png";

const ESGPage = () => {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);
  const [topicActiveIndex, setTopicActiveIndex] = useState(2);

  const navTopic = [
    {
      id: 1,
      name: "Wealth Management",
    },
    {
      id: 2,
      name: "ESG",
    },
    {
      id: 3,
      name: "Investment Management",
    },
    {
      id: 4,
      name: "Marketplace",
    },
    {
      id: 5,
      name: "Community",
    },
    {
      id: 6,
      name: "Insights",
    },
    {
      id: 7,
      name: "Initiatives",
    },
  ];

  return (
    <div
      className={`flex ${darkMode ? "dark-background" : "light-background"}`}
    >
      <DrawerComponent />
      <div
        className={`py-2 px-1 flex flex-col w-full h-full relative md:py-4 md:px-6 overflow-hidden ${
          darkMode ? "dark-background" : "light-background"
        }`}
      >
        <div className="px-4 md:px-0 flex justify-between items-center">
          <div className="flex items-center">
            <img
              src={darkMode ? LogoIcon : LightLogo}
              alt="logo"
              className=" h-10 w-10 md:h-12 md:w-12 lg:h-16 lg:w-16"
            />
            <p
              className={`logo-name text-[22px] md:text-[26px] lg:text-[30px]`}
              style={{ color: darkMode ? "#fff" : "#968864" }}
            >
              Investment . AI
            </p>
          </div>
          <div>
            <Avatar className="mr-4 lg:mr-0" alt="Remy Sharp" src={Profile} />
          </div>
        </div>
        <div className={`hidden py-4 px-8 justify-between md:hidden lg:flex`}>
          {navTopic.map((topic) => (
            <div
              onClick={() => setTopicActiveIndex(topic.id)}
              className={`rounded-full py-2 px-4 cursor-pointer text-center  ${
                topicActiveIndex === topic.id
                  ? darkMode
                    ? "bg-[#3F9CFF] text-[#fff]"
                    : "bg-[#968864] text-[#fff]"
                  : darkMode
                  ? " text-[#fff]"
                  : " text-[#2C2C2C]"
              }  `}
              key={topic.id}
            >
              <button>{topic.name}</button>
            </div>
          ))}
        </div>
        <div className=" py-6 px-0 md:py-6 md:px-8 relative">
          <div className="flex items-center gap-4">
            <Avatar className="mr-4 lg:mr-0" alt="Remy Sharp" src={Profile} />
            <h1
              className={`text-[24px] ${
                darkMode ? "text-[#3F9CFF]" : "text-[#968864]"
              }`}
            >
              Environmental, social and governance (ESG)
            </h1>
          </div>
          <div className="pl-14 py-2 lg:px-14">
            <p
              className={`font-semibold text-[18px] ${
                darkMode ? "text-[#fff]" : "text-[#2C2C2C]"
              }`}
            >
              Most Read News Articles
            </p>
            <div className="flex mt-2 justify-between flex-nowrap overflow-x-auto  lg:flex-wrap gap-5">
              <div
                className="flex-none w-[270px] md:w-[260px] lg:w-[300px]  "
                
              >
                <NewsCard
                  CompanyName={CompanyName}
                  CompanyBgImage={CompanyBgImage}
                  text="BlackRock to purchase Portland Natural Gas Transmission ..."
                />
              </div>
              <div
               className="flex-none w-[270px] md:w-[260px]  lg:w-[300px]"
              >
                <NewsCard
                  CompanyName={CompanyName}
                  CompanyBgImage={CompanyBgImage}
                  text="BlackRock to purchase Portland Natural Gas Transmission ..."
                />
              </div>
              <div
                className="flex-none w-[270px] md:w-[260px]  lg:w-[300px]"
              >
                <NewsCard
                  CompanyName={CompanyName}
                  CompanyBgImage={CompanyBgImage}
                  text="BlackRock to purchase Portland Natural Gas Transmission ..."
                />
              </div>
            </div>
            <div className="flex mt-2 justify-between flex-nowrap overflow-x-auto md:overflow-x-none lg:flex-wrap gap-5">
              <div
                className="flex-none w-[270px] md:w-[260px]  lg:w-[300px]"
              >
                <NewsCard
                  CompanyName={CompanyName}
                  CompanyBgImage={CompanyBgImage}
                  text="BlackRock to purchase Portland Natural Gas Transmission ..."
                />
              </div>
              <div
                className="flex-none w-[270px] md:w-[260px]  lg:w-[300px]"
              >
                <NewsCard
                  CompanyName={CompanyName}
                  CompanyBgImage={CompanyBgImage}
                  text="BlackRock to purchase Portland Natural Gas Transmission ..."
                />
              </div>
              <div
                className="flex-none w-[270px] md:w-[260px]  lg:w-[300px]"
              >
                <NewsCard
                  CompanyName={CompanyName}
                  CompanyBgImage={CompanyBgImage}
                  text="BlackRock to purchase Portland Natural Gas Transmission ..."
                />
              </div>
            </div>
          </div>
          <div className="pl-14 py-2 lg:px-14">
            <p
              className={`font-semibold text-[18px] ${
                darkMode ? "text-[#DEDEDE]" : "text-[#525252]"
              }`}
            >
              Most Relevant Articles
            </p>
            <div className="flex mt-2 justify-between flex-nowrap overflow-x-auto  lg:flex-wrap gap-5">
              <div
                className="flex-none md:w-[260px]  lg:w-[300px]"
              >
                <NewsCard
                  CompanyName={CompanyName}
                  CompanyBgImage={false}
                  text="BlackRock to purchase Portland Natural Gas Transmission ..."
                />
              </div>
              <div
                className="flex-none w-[270px] md:w-[260px]  lg:w-[300px]"
              >
                <NewsCard
                  CompanyName={CompanyName}
                  CompanyBgImage={false}
                  text="BlackRock to purchase Portland Natural Gas Transmission ..."
                />
              </div>
              <div
                className="flex-none w-[270px] md:w-[260px]  lg:w-[300px]"
              >
                <NewsCard
                  CompanyName={CompanyName}
                  CompanyBgImage={false}
                  text="BlackRock to purchase Portland Natural Gas Transmission ..."
                />
              </div>
            </div>
            <div className="flex mt-2 justify-between flex-nowrap overflow-x-auto lg:flex-wrap gap-5">
              <div
                className="flex-none w-[270px] md:w-[260px]  lg:w-[300px]"
              >
                <NewsCard
                  CompanyName={CompanyName}
                  CompanyBgImage={false}
                  text="BlackRock to purchase Portland Natural Gas Transmission ..."
                />
              </div>
              <div
                className="flex-none w-[270px] md:w-[260px]  lg:w-[300px]"
              >
                <NewsCard
                  CompanyName={CompanyName}
                  CompanyBgImage={false}
                  text="BlackRock to purchase Portland Natural Gas Transmission ..."
                />
              </div>
              <div
                className="flex-none w-[270px] md:w-[260px]  lg:w-[300px]"
              >
                <NewsCard
                  CompanyName={CompanyName}
                  CompanyBgImage={false}
                  text="BlackRock to purchase Portland Natural Gas Transmission ..."
                />
              </div>
            </div>
          </div>
        </div>

        {/* <PromptBox /> */}
      </div>
    </div>
  );
};

export default ESGPage;
