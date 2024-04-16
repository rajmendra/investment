import React, { useContext } from 'react';
import {
  ComposedChart,
  Line,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { DarkModeContext } from '../context';

const data1 = [
  { name: '01 Jan', Investment: 38000, Expenditure: 32000 },
  { name: '08 Jan', Investment: 50000, Expenditure: 20000 },
  { name: '15 Jan', Investment: 25000, Expenditure: 55000 },
  { name: '23 Jan', Investment: 30000, Expenditure: 28000 },
  { name: '29 Jan', Investment: 20000, Expenditure: 55000 },
  { name: '05 Feb', Investment: 55000, Expenditure: 15000 },
];

function CustomLegend({darkMode, colors}) {
  return (
    <div className="flex justify-center items-center mt-4">
      <div className="flex items-center mr-8">
        <div className={`w-5 h-5 rounded-full  mr-2`} style={{background:colors[0]}}></div>
        <span className={`${darkMode ? "text-[#fff]" : "text-[#2C2C2C]" }`}>Investment</span>
      </div>
      <div className="flex items-center">
        <div className={`w-5 h-5 rounded-full  mr-2`} style={{background:colors[1]}}></div>
        <span className={`${darkMode ? "text-[#fff]" : "text-[#2C2C2C]" }`}>Expenditure</span>
      </div>
    </div>
  );
}

function CustomYAxisTick({ x, y, payload , darkMode}) {
    let fontSize = "16px"; // Default font size
  if (window.innerWidth < 768) { // For mobile devices
    fontSize = "12px";
  } else if (window.innerWidth < 1024) { // For tablets
    fontSize = "14px";
  }
    return (
<g transform={`translate(${x},${y})`} >
      <text  x={ -10} y={0} dy={0} fontSize={fontSize} textAnchor="end" fill={darkMode ? "#fff" : "#2C2C2C"}>{`$ ${payload.value}`}</text>
    </g>
    );
  }
  function CustomXAxisTick({ x, y, payload , darkMode}) {
    let fontSize = "16px"; // Default font size
    if (window.innerWidth < 768) { // For mobile devices
      fontSize = "12px";
    } else if (window.innerWidth < 1024) { // For tablets
      fontSize = "14px";
    }
    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={16} fontSize={fontSize} textAnchor="middle" fill={darkMode ? "#fff" : "#2C2C2C"}>{payload.value}</text>
      </g>
    );
  }
function ComposedLineBarArea({colors}) {
    const [darkMode, setDarkMode] = useContext(DarkModeContext);

    const yTicks = [0, 10000, 20000, 30000, 40000, 50000, 60000];
  return (
    <div className="w-full min-w-[250px] md:min-w-[300px] md:h-[250px]  lg:min-w-[500px] lg:h-[350px]">
      <ResponsiveContainer width="100%" height={250}>
        <ComposedChart
          width={800}
          height={450}
          data={data1}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="name" tickLine={false} tick={<CustomXAxisTick darkMode={darkMode} />} />
          <YAxis axisLine={false} tickSize={3} tickLine={false}   tick={<CustomYAxisTick darkMode={darkMode} />} ticks={yTicks}  />
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <Tooltip />
          <Legend content={<CustomLegend darkMode={darkMode} colors={colors} />} />
          <Area type="monotone" dataKey="Investment" fillOpacity="0.8" fill={colors[0]} stroke={colors[0]} strokeWidth={4} />
          <Area type="monotone" dataKey="Expenditure" fillOpacity="0.8" fill={colors[1]} stroke={colors[1]} strokeWidth={4} />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ComposedLineBarArea;
