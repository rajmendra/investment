import React, { useContext, useState } from "react";
import ESGPage from "./ESGPage";
import { DarkModeContext } from "../context";
import DrawerComponent from "../components/Drawer";
import Header from "../components/Header";
import TopicsList from "../components/TopicsList";
import PromptBox from "../components/PromptBox";
import WealthManagment from "./WealthManagment";
import InvestmentManagement from "./InvestmentManagement";
import MobileDrawer from "../components/MobileDrawer";
import MarketPlace from "./MarketPlace";
import { ActiveTopicsContext } from "../context/topics";

const LandingTopics = () => {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);
  const [activeIndex, setActiveIndex] = useContext(ActiveTopicsContext);

  const handleTopicIndexChange = (index, e) => {
    setActiveIndex(index);
  };

  return (
    <div
      className={`flex ${darkMode ? "dark-background" : "light-background"}`}
    >
      <DrawerComponent />
      <MobileDrawer />
      <div
        className={`py-2 px-1 flex flex-col w-full h-[100vh]  overflow-y-scroll relative md:py-4  md:px-6 overflow-hidden max-w-auto  ${
          darkMode ? "dark-background" : "light-background"
        }`}
      >
        <Header />
        <div className="py-4">
          <TopicsList
            activeIndex={activeIndex}
            onTopicIndexChange={handleTopicIndexChange}
          />
        </div>

        {activeIndex === 1 && <WealthManagment />}
        {activeIndex === 2 && <ESGPage />}
        {activeIndex === 3 && <InvestmentManagement />}
        {activeIndex === 4 && <MarketPlace />}
        
      </div>
    </div>
  );
};

export default LandingTopics;
