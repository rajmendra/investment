import React, { useContext } from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js'
import { Line } from "react-chartjs-2";
import { DarkModeContext } from '../context';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    
  )


  const styles = {
    fontFamily: "sans-serif",
    textAlign: "center",
  };

const LineChart = () => {
    const [darkMode, setDarkMode] = useContext(DarkModeContext);


    const data = {
        labels: ["01 Jan", "08 Jan", "15 Jan", "23 Jan", "29 Jan", "05 Feb"],
        datasets: [
          {
            label:"Stocks",
            fill: false,
            lineTension: 0.1,
            borderColor: darkMode ? "#04C6E7" : "#E8E8E8",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: darkMode ? "#04C6E7" : "#E8E8E8",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: darkMode ? "#04C6E7" : "#E8E8E8",
            pointHoverBorderColor: darkMode ? "#04C6E7" : "#E8E8E8",
            pointHoverBorderWidth: 2,
            pointBackgroundColor: "#fff",
            pointRadius: 1,
            pointHitRadius: 10,
            color:"red",
            data: [0, 1000, 2000, 3000, 4000, 5000, 6000],
          },
          {
            label:"Real Estate",
            fill: false,
            lineTension: 0.1,
            borderColor: darkMode ? "#D93F3F" : "#424241",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: darkMode ? "#D93F3F" : "#424241",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor:  darkMode ? "#D93F3F" : "#424241",
            pointHoverBorderColor:  darkMode ? "#D93F3F" : "#424241",
            pointHoverBorderWidth: 2,
            pointBackgroundColor: "#fff",
            pointRadius: 1,
            pointHitRadius: 10,
            data: [0, 800, 1800, 2800, 3800, 4800, 5800],
          },
          {
            label:"Bonds",
            fill: false,
            lineTension: 0.1,
            borderColor: darkMode ? "#F8B200" : "#968864",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: darkMode ? "#F8B200" : "#968864",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: darkMode ? "#F8B200" : "#968864",
            pointHoverBorderColor: darkMode ? "#F8B200" : "#968864",
            pointHoverBorderWidth: 2,
            pointBackgroundColor: "#fff",
            pointRadius: 1,
            pointHitRadius: 10,
            data: [0, 500, 1500, 2500, 3500, 4500, 5500],
          },
          {
            label:"Mutual Funds",
            fill: false,
            lineTension: 0.1,
            borderColor: darkMode ? "#D4D405" : "#ABAB55",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: darkMode ? "#D4D405" : "#ABAB55",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: darkMode ? "#D4D405" : "#ABAB55",
            pointHoverBorderColor: darkMode ? "#D4D405" : "#ABAB55",
            pointHoverBorderWidth: 2,
            pointBackgroundColor: "#fff",
            pointRadius: 1,
            pointHitRadius: 10,
            data: [0, 300, 1300, 2300, 3300, 4300, 5300],
          },
        ],
      };
    
      const lineOptions = {
        // responsive: true,
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false,
              },
            },
          ],
          yAxes: [
            {
              // stacked: true,
              gridLines: {
                display: false,
              },
              ticks: {
                beginAtZero: true,
                // Return an empty string to draw the tick line but hide the tick label
                // Return `null` or `undefined` to hide the tick line entirely
                userCallback(value) {
                  // Convert the number to a string and splite the string every 3 charaters from the end
                  value = value.toString();
                  value = value.split(/(?=(?:)*$)/);
      
                  // Convert the array to a string and format the output
                  value = value.join(".");
                  return `$ ${value}`;
                },
              },
            },
          ],
        },
        legend: {
          display: false,
        },
        tooltips: {
          enabled: false,
        },
      };
  return (
    <div style={styles}>
    <Line data={data} options={lineOptions} />
  </div>
  )
}

export default LineChart