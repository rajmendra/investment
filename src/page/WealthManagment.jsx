import React, { useContext } from "react";
import BotAvatarLight from "../assets/images/BotAvatarLight.png";
import BotAvatarDark from "../assets/images/BotAvatarDark.png";
import AvatarWithHeader from "../components/AvatarWithHeader";
import { DarkModeContext } from "../context";
import PieChart from "../components/PiaChart";

const WealthManagment = () => {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);

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

  return (
    <div className=" py-0 px-0 md:py-6 md:px-8 relative ">
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
        <div className="inline md:hidden"
        style={{
          position: "absolute",
          top: "14%",
          right: "25%",
          transform: "translateX(-50%)",
          width: 0,
          height: "80%",
          borderLeft: `${darkMode ? "2px solid #c4bebe" : "2px solid #DEDEDE"} `,
        }}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="128"
        viewBox="0 0 24 24"
        fill={darkMode ? "#c4bebe" : " #DEDEDE"}
        style={{ position: "absolute", top: "10%", right: "22%", transform: "rotate(180deg)" }}
        className="inline md:hidden opacity-[0.7]"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M12 15V3h2v12h7l-8 8-8-8h7z" strokeWidth="1" />
      </svg>

      </div>
      <p style={{
          position: "absolute",
          top: "16%",
          right: "0",
          width:"80px",
          fontSize:"14px"

        }}
        className={`inline md:hidden ${darkMode ? "text-[#fff]" : "text-[#525252]"}`}
        >
      Decreasing investment risk and increasing inflation risk
      </p>
    </div>
  );
};

export default WealthManagment;
