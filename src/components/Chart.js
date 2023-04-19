import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from "chart.js";
import { normalizeTime } from "../utils/normalizeTime";
import { timeCalcToSeconds } from "../utils/timeCalcToSeconds";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
);

const Chart = ({ config }) => {
  const [info, setInfo] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [dataChart, setDataChart] = useState("");
  const [options, setOptions] = useState("");
  const [intervalId, setIntervalId] = useState(null);
  const [reloadInterval, setReloadInterval] = useState(10000);
  const [configVersion, setConfigVersion] = useState(0);
  
  const fetchData = ({ pair, limit, interval }) => {
    fetch(`https://domv.ada.art/orderbook/aggregate/${pair}/?limit=${limit}&interval=${interval}`)
      .then((response) => {
        if (response.ok) {
          setIsLoading(false);
          return response.json();
        }
        return Promise.reject(response.status);
      })
      .then((info) => {
        setError(false);
        setInfo(info);
        return info;
      })
      .then((info) => {
        const dataY = info.data.map((item) => normalizeTime(item.start_time));
        const dataX = info.data.map((item) => Math.floor(Number(item.buy_usd) - Number(item.sell_usd)));
        const maxDataX = Number(dataX.reduce((a, b) => (a > b ? a : b)));
        const minDataX = Number(dataX.reduce((a, b) => (a < b ? a : b)));
        setDataChart({
          labels: dataY,
          datasets: [
            {
              label: "V",
              data: dataX,
              backgroundColor: "black",
              borderColor: "#1E90FF",
              pointRadius: 1,
              borderWidth: 2
            }
          ]
        });
        setOptions({
          plugins: {
            legend: true
          },
          scales: {
            y: {
              suggestedMin: minDataX,
              suggestedMax: maxDataX
            }
          }
        });
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
    
  };
  
  
  useEffect(() => {
    fetchData(config);
    setConfigVersion((v) => v + 1); // update config version
  }, [config]);
  
  useEffect(() => {
    if (intervalId) {
      clearInterval(intervalId);
    }
    const newIntervalId = setInterval(() => {
      fetchData(config);
    }, timeCalcToSeconds(config.interval) > reloadInterval ? reloadInterval : timeCalcToSeconds(config.interval));
    
    setIntervalId(newIntervalId);
    return () => clearInterval(newIntervalId);
  }, [configVersion]);
  const viewChart = () => {
    document.querySelector(".ex_canvas").classList.toggle("ex_chart_active");
  };
  
  if (error) {
    return (
      <div>
        <h2>Error: {error}</h2>
        <p>Change pair or reload</p>
      </div>
    );
  }
  return (
    <>
      {
        isLoading ? (
          <h2>is loading</h2>
        ) : info ? (
          <div className={"ex_canvas"} id={"ex_canvas"}>
            <Line data={dataChart} options={options} onClick={viewChart}></Line>
          
          </div>
        ) : (
          <h2>loading</h2>
        )}
    </>
  );
};


export default Chart;