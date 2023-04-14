import React, { useEffect, useState } from "react";
import Row from "./Row";
import { normalizeTime } from "../utils/normalizeTime";
import { timeCalcToSeconds } from "../utils/timeCalcToSeconds";

const Rows = ({ config }) => {
  const API_URL = {
    baseUrl: "https://domv.ada.art",
    path: "/orderbook/aggregate/",
    pair: "BNBUSDT",
    limit: "100",
    interval: "10s",
    getURL(pair, limit, interval) {
      return `${API_URL.baseUrl}${API_URL.path}${pair}/?limit=${limit}&interval=${interval}`;
    }
  };
  const API = `${API_URL.baseUrl}${API_URL.path}${API_URL.pair}/?limit=${API_URL.limit}&interval=${API_URL.interval}`;
  const [info, setInfo] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [intervalId, setIntervalId] = useState(null);
  let i = 0;
  
  useEffect(() => {
    const getDataView = ({ pair, limit, interval }) => {
      const fetchData = ({ pair, limit, interval }) => {
        fetch(`https://domv.ada.art/orderbook/aggregate/${pair}/?limit=${limit}&interval=${interval}`)
          .then(response => response.json())
          .then(info => {
            setInfo(info.data.reverse());
            // return info;
          })
          .catch(error => setError(error.message))
          .finally(() => {
            setIsLoading(false);
          });
      };
      
      if (intervalId) {
        clearInterval(intervalId);
      }
      const newIntervalId = setInterval(() => {
          fetchData(config);
        },
        (timeCalcToSeconds(interval) * 1) > 5000 ? 5000 : (timeCalcToSeconds(interval) * 1));
      
      
      setIntervalId(newIntervalId);
      
      return () => clearInterval(newIntervalId);
    };
    
    
    getDataView(config);
  }, [config]);
  
  if (error) {
    return (
      <div>
        <h2>
          Error: {error} {`${API_URL.baseUrl}${API_URL.path}${API_URL.pair}?limit=${API_URL.limit}&interval=${API_URL.interval}`}
        </h2>
        <p>to fix you need to restart the application(minimize and expand, use the button above)</p>
      </div>
    );
  }
  
  return (
    <ul className="ex_list" id="ex_list">
      {isLoading ? (
        <h2>Loading</h2>
      ) : (
        
        info.map((item, index) => {
          if (item.buy_usd > 0 || item.sell_usd > 0) {
            ++i;
            if (i % 10 === 0) {
              return (<li className="ex_list__item" id={"ex_list__item"}>
                <p className="ex_list__txt ex_list__bold" id={"ex_list__txt"}>time</p>
                <p className="ex_list__txt ex_list__bold" id={"ex_list__txt"}>delta</p>
                <p className="ex_list__txt ex_list__bold" id={"ex_list__txt"}>Sold</p>
                <p className="ex_list__txt ex_list__bold" id={"ex_list__txt"}>Bought</p>
              </li>);
            }
            return <Row {...item} key={index} />;
          }
          return null;
        })
      )}
    </ul>
  );
};

export default Rows;
