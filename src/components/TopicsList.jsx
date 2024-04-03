// TopicsList.js
import React, { useContext } from 'react';
import { DarkModeContext } from '../context';

const TopicsList = ({ activeIndex, onTopicIndexChange }) => {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);

  const navTopic = [
    { id: 1, name: "Wealth Management" },
    { id: 2, name: "ESG" },
    { id: 3, name: "Investment Management" },
    { id: 4, name: "Marketplace" },
    { id: 5, name: "Community" },
    { id: 6, name: "Insights" },
    { id: 7, name: "Initiatives" },
  ];

  return (
    <div className={`hidden py-4 px-8 justify-between md:hidden lg:flex`}>
      {navTopic.map((topic) => (
        <div
          onClick={() => onTopicIndexChange(topic.id)}
          className={`rounded-full py-2 px-4 cursor-pointer text-center  ${
            activeIndex === topic.id
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
  );
};

export default TopicsList;
