import React, { useContext, useState } from "react";
import { DarkModeContext } from "../context";
import NewsCard from "../components/NewsCard";
import CompanyName from "../assets/images/company_02.png";
import CompanyBgImage from "../assets/images/company_bg_02.png";
import AvatarWithHeader from "../components/AvatarWithHeader";
import Profile from "../assets/images/profile.png";


const ESGPage = () => {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);
  

  return (
    <div className=" py-6 mb-32 px-0 md:py-6 md:px-8 relative ">
         <AvatarWithHeader avatar={Profile} title="Environmental, social and governance (ESG)" />
          <div className="pl-14 py-2 lg:px-14">
            <p
              className={`font-semibold text-[18px] ${
                darkMode ? "text-[#fff]" : "text-[#2C2C2C]"
              }`}
            >
              Most Read News Articles
            </p>
            <div className="flex mt-2 justify-between flex-nowrap  gap-5 overflow-auto lg:overflow-visible ">
              <div
                className="flex-none w-[270px] md:w-[260px] lg:w-[350px]  "
                
              >
                <NewsCard
                  CompanyName={CompanyName}
                  CompanyBgImage={CompanyBgImage}
                  text="BlackRock to purchase Portland Natural Gas Transmission ..."
                />
              </div>
              <div
               className="flex-none w-[270px] md:w-[260px]  lg:w-[350px]"
              >
                <NewsCard
                  CompanyName={CompanyName}
                  CompanyBgImage={CompanyBgImage}
                  text="BlackRock to purchase Portland Natural Gas Transmission ..."
                />
              </div>
              <div
                className="flex-none w-[270px] md:w-[260px]  lg:w-[350px]"
              >
                <NewsCard
                  CompanyName={CompanyName}
                  CompanyBgImage={CompanyBgImage}
                  text="BlackRock to purchase Portland Natural Gas Transmission ..."
                />
              </div>
            </div>
            <div className="flex mt-2 justify-between flex-nowrap  gap-5 overflow-auto lg:overflow-visible">
              <div
                className="flex-none w-[270px] md:w-[260px]  lg:w-[350px]"
              >
                <NewsCard
                  CompanyName={CompanyName}
                  CompanyBgImage={CompanyBgImage}
                  text="BlackRock to purchase Portland Natural Gas Transmission ..."
                />
              </div>
              <div
                className="flex-none w-[270px] md:w-[260px]  lg:w-[350px]"
              >
                <NewsCard
                  CompanyName={CompanyName}
                  CompanyBgImage={CompanyBgImage}
                  text="BlackRock to purchase Portland Natural Gas Transmission ..."
                />
              </div>
              <div
                className="flex-none w-[270px] md:w-[260px]  lg:w-[350px]"
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
            <div className="flex mt-2 justify-between flex-nowrap  gap-5 overflow-auto lg:overflow-visible">
              <div
                className="flex-none md:w-[260px]  lg:w-[350px]"
              >
                <NewsCard
                  CompanyName={CompanyName}
                  CompanyBgImage={false}
                  text="BlackRock to purchase Portland Natural Gas Transmission ..."
                />
              </div>
              <div
                className="flex-none w-[270px] md:w-[260px]  lg:w-[350px]"
              >
                <NewsCard
                  CompanyName={CompanyName}
                  CompanyBgImage={false}
                  text="BlackRock to purchase Portland Natural Gas Transmission ..."
                />
              </div>
              <div
                className="flex-none w-[270px] md:w-[260px]  lg:w-[350px]"
              >
                <NewsCard
                  CompanyName={CompanyName}
                  CompanyBgImage={false}
                  text="BlackRock to purchase Portland Natural Gas Transmission ..."
                />
              </div>
            </div>
            <div className="flex mt-2 justify-between flex-nowrap  gap-5 overflow-auto lg:overflow-visible">
              <div
                className="flex-none w-[270px] md:w-[260px]  lg:w-[350px]"
              >
                <NewsCard
                  CompanyName={CompanyName}
                  CompanyBgImage={false}
                  text="BlackRock to purchase Portland Natural Gas Transmission ..."
                />
              </div>
              <div
                className="flex-none w-[270px] md:w-[260px]  lg:w-[350px]"
              >
                <NewsCard
                  CompanyName={CompanyName}
                  CompanyBgImage={false}
                  text="BlackRock to purchase Portland Natural Gas Transmission ..."
                />
              </div>
              <div
                className="flex-none w-[270px] md:w-[260px]  lg:w-[350px]"
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
  );
};

export default ESGPage;
