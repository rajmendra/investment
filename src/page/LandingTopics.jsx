import React, { useContext, useState } from "react";
import ESGPage from "./ESGPage";
import { ActiveTopicContext, DarkModeContext } from "../context";
import DrawerComponent from "../components/Drawer";
import Header from "../components/Header";
import TopicsList from "../components/TopicsList";
import PromptBox from "../components/PromptBox";
import WealthManagment from "./WealthManagment";
import InvestmentManagement from "./InvestmentManagement";
import MobileDrawer from "../components/MobileDrawer";
import MarketPlace from "./MarketPlace";

const LandingTopics = () => {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);
  const [activeTopicIndex, setActiveTopicIndex] = useState(1); 

  const handleTopicIndexChange = (index, e) => {
    setActiveTopicIndex(index); 
  };
  return (
    <div
      className={`flex ${darkMode ? "dark-background" : "light-background"}`}
    >
      <DrawerComponent  />
      <MobileDrawer />
      <div
        className={`py-2 px-1 flex flex-col w-full h-[100vh]  overflow-y-scroll relative md:py-4 md:px-6 overflow-hidden max-w-auto  ${
          darkMode ? "dark-background" : "light-background"
        }`}
      >
        <Header />
        <div className="py-4">
        <TopicsList activeIndex={activeTopicIndex} onTopicIndexChange={handleTopicIndexChange} />
        </div>
        
        {activeTopicIndex === 1 && <WealthManagment />} 
        {activeTopicIndex === 2 && <ESGPage />} 
        {activeTopicIndex === 3 && <InvestmentManagement />} 
        {activeTopicIndex === 4 && <MarketPlace />} 

        <PromptBox />
      </div>
    </div>
  );
};

export default LandingTopics;
