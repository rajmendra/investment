import React, { useContext, useEffect, useState } from "react";
import BotAvatarLight from "../assets/images/BotAvatarLight.png";
import BotAvatarDark from "../assets/images/BotAvatarDark.png";
import AvatarWithHeader from "../components/AvatarWithHeader";
import { DarkModeContext } from "../context";
import { PieChart, Pie, Legend, Tooltip } from "recharts";
import { AgChartsReact } from "ag-charts-react";
import LineChart from "../components/LineChart";
import Slider from "react-slick";
import PromptBox from "../components/PromptBox";

const PieChartData = [
  { asset: "Stocks", amount: 48, yield: 2.7 },
  { asset: "Real Estate", amount: 14, yield: 2.1 },
  { asset: "Bonds", amount: 10, yield: 2.3 },
  { asset: "Mutual Funds", amount: 28, yield: 2.5 },
];

const InvestmentManagement = () => {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);

  // const colors = darkMode ? ["#04C6E7","#D4D405","#D93F3F","#F8B200"] : ["#E8E8E8","#ABAB55","#424241","#968864"]
  const lightBgColors = ["#E8E8E8", "#ABAB55", "#424241", "#968864"];
  const darkBgColors = ["#04C6E7", "#D4D405", "#D93F3F", "#F8B200"];
  const [options, setOptions] = useState({
    data: PieChartData,
    background: {
      fill: "transparent",
    },

    series: [
      {
        type: "pie",
        angleKey: "amount",
        radiusKey: "yield",
        calloutLabelKey: "asset",
        sectorLabelKey: "amount",
        tooltip: {
          enabled: false,
        },
        fills: darkMode ? darkBgColors : lightBgColors,
        sectorLabel: {
          color: "white",
          fontWeight: "bold",
          formatter: ({ value }) => `${(value)}%`,
          // formatter: ({ value }) => `${value}%`,
        },
      },
    ],
  });

  useEffect(() => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      series: [
        {
          ...prevOptions.series[0],
          fills: darkMode ? darkBgColors : lightBgColors,
        },
       
      ],
    }));
  }, [darkMode]);

  

  return (
    <div className=" py-0  px-0 md:py-6 md:px-8 relative h-[60vh] overflow-scroll">
      <AvatarWithHeader
        avatar={darkMode ? BotAvatarDark : BotAvatarLight}
        title="Investment Mangement"
      />
      <div className="py-2 px-14">
        <p
          className={` text-[17pxs] font-semibold ${
            darkMode ? "text-[#fff]" : "text-[#424241]"
          }`}
        >
          Investment Profile : <span>01Jan 2024 to 31Jan 2024</span>
        </p>
      </div>
      <div className=" py-4 px-2  flex justify-between overflow-scroll flex-col md:flex-row w-full  items-center ">
        <div className="w-full md:w-[50%] h-[350px]">
          <AgChartsReact options={options} />
        </div>
        <div className="w-full  md:w-[50%] ">
          <LineChart />
        </div>
      </div>
      <div className={`py-2 px-8 md:px-16 md:text-[13px] lg:text-[16px] ${darkMode ? "text-[#fff]" : "text-[#424241]"}`}>
          <p>Lorem ipsum dolor sit amet consectetur. Adipiscing pulvinar aliquet commodo feugiat elit dolor ut. Pretium in arcu ultrices bibendum neque nulla. Porttitor auctor ultricies commodo aenean sit magna arcu. Purus amet non suspendisse nec nulla purus ut. Eget arcu faucibus enim faucibus mauris et. </p>
      </div>
        <div>
        <PromptBox />

        </div>
      
    </div>
  );
};

export default InvestmentManagement;
