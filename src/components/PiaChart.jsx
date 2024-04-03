import React, { useContext } from "react";
import { VictoryPie } from "victory-pie";
import { DarkModeContext } from "../context";

const PiaChart = ({ name, colors, values }) => {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);

  return (
    <>
      <div className="flex px-2 flex-col md:items-center text-center gap-2 md:gap-8 w-[250px] md:w-[200px]">
        <p
          className={`font-normal md:font-semibold text-[15px] md:text-[16px] text-left md:text-center ${
            darkMode ? "text-[#fff]" : "text-[#525252] "
          }`}
        >
          {name}
        </p>
        <VictoryPie
          style={{
            labels: { fontSize: 22, fill: darkMode ? "#fff" : "#2C2C2C" },
          }}
          colorScale={colors}
          data={values}
        />

      </div>
    </>
  );
};

export default PiaChart;
