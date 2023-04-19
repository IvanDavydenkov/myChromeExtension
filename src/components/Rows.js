import React, { useEffect, useState } from "react";
import Row from "./Row";
import { normalizeTime } from "../utils/normalizeTime";
import { timeCalcToSeconds } from "../utils/timeCalcToSeconds";

const Rows = ({ config }) => {
  const [info, setInfo] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [intervalId, setIntervalId] = useState(null);
  const [reloadInterval, setReloadInterval] = useState(10000);
  const [configVersion, setConfigVersion] = useState(0);
  const [ave, setAve] = useState(0);
  let i = 9;
  
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
        setInfo(info.data.reverse());
        setAve(info.data.map(item => {
          return item.sell_usd * 1 - item.buy_usd * 1;
        }).reduce((a, b) => {
          return (a + b / info.data.length);
        }));
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
  
  if (error) {
    return (
      <div>
        <h2>Error: {error}</h2>
        <p>Change pair or reload</p>
      </div>
    );
  }
  
  return (
    <ul className="ex_list" id="ex_list">
      {isLoading ? (
        <h2>Loading</h2>
      ) : (
        info.map((item, index) => {
          if (Number(item.buy_usd) > 0 || Number(item.sell_usd) > 0) {
            ++i;
            if (i % 10 === 0) {
              i++;
              return (
                <>
                  <li className="ex_list__item" id={"ex_list__item"}>
                    <p className="ex_list__txt ex_list__bold" id={"ex_list__txt"}>
                      time
                    </p>
                    <p className="ex_list__txt ex_list__bold" id={"ex_list__txt"}>
                      delta
                    </p>
                    <p className="ex_list__txt ex_list__bold" id={"ex_list__txt"}>
                      Sold
                    </p>
                    <p className="ex_list__txt ex_list__bold" id={"ex_list__txt"}>
                      Bought
                    </p>
                  </li>
                  <Row {...item} key={index} ave={ave} />
                </>
              );
            }
            return <Row {...item} key={index} ave={ave} />;
          }
          return null;
        })
      )}
    </ul>
  );
};

export default Rows;
