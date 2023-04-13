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
  useEffect(() => {
    const getDataView = ({ pair, limit, interval }) => {
      const fetchData = ({ pair, limit, interval }) => {
        
        fetch(`https://domv.ada.art/orderbook/aggregate/${pair}/?limit=${limit}&interval=${interval}`)
          .then(response => response.json())
          .then(info => {
            setInfo(info);
            return info;
            
          })
          .then((info) => {
            const dataY = (info.data.map(item => {
              return normalizeTime(item.start_time);
            }));
            const dataX = (info.data.map(item => {
              return Math.floor(Number(item.sell_usd) - Number(item.buy_usd));
            }));
            const maxDataX = (
              Number(dataX.reduce((a, b) => {
                return a > b ? a : b;
              }))
            );
            const minDataX = (
              Number(dataX.reduce((a, b) => {
                return a < b ? a : b;
              }))
            );
            setDataChart({
              labels: dataY,
              datasets: [{
                label: "Sales of the Week",
                data: dataX,
                backgroundColor: "none",
                borderColor: "#1E90FF", // установите цвет линии
                pointRadius: 0, // установите радиус точек равным 0
                borderWidth: 2
              }]
            });
            
            setOptions(
              {
                plugins: {
                  legend: true
                },
                scales: {
                  y: {
                    suggestedMin: minDataX,
                    suggestedMax: maxDataX
                  }
                }
              }
            );
          })
          .catch(error => setError(error.message))
          .finally(() => {
            setIsLoading(false);
          });
        
      };
      const intervalId = setInterval(() => {
        fetchData(config);
      }, timeCalcToSeconds(interval));
      fetchData(config);
      
      return () => clearInterval(intervalId);
      
    };
    getDataView(config);
    
  }, [config]);
  
  
  return (
    <>
      {isLoading ? <h2>is loading</h2> :
        info ? <Line className={"ex_canvas"}
                     id={"ex_canvas"}
                     data={dataChart}
                     options={options}
        >
        
        </Line> : <h2>loading</h2>
      }
    </>
  
  );
};

export default Chart;