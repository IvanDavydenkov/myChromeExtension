import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from "chart.js";
import { normalizeTime } from "../utils/normalizeTime";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
);

const Chart = (data) => {
  const dataY = data.data.map(item => {
    return normalizeTime(item.start_time);
  });
  const dataX = data.data.map(item => {
    return Math.floor(Number(item.sell_usd) + Number(item.buy_usd));
  });
  const maxDataX = Number(dataX.reduce((a, b) => {
    return a > b ? a : b;
  }));
  const dataChart = {
    labels: dataY,
    datasets: [{
      labels: "Sales of the Week",
      data: dataX,
      backgroundColor: "aqua",
      borderColor: "black",
      pointBorderColor: "aqua"
    }]
  };
  const options = {
    plugins: {
      legend: true
    },
    scales: {
      y: {
        min: 0,
        max: maxDataX
      }
    }
  };
  return (
    <Line
      data={dataChart}
      options={options}
    >
    
    </Line>
  );
};

export default Chart;