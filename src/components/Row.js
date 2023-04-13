import React from "react";
import { normalizeTime } from "../utils/normalizeTime";
import { data } from "../data/TestData";

const averageVolume = data.data.map(item => {
  return item.sell_usd * 1 + item.buy_usd * 1;
}).reduce((a, b) => {
  return (a + b / data.data.length);
});

const Row = (prop) => {
  return (
    <li
      className={Math.floor(prop.sell_usd - prop.buy_usd) > averageVolume ? "ex_list__item isInteresting" : "ex_list__item"}
      id={Math.floor(prop.sell_usd - prop.buy_usd) > averageVolume ? "ex_list__item isInteresting" : "ex_list__item"}>
      <p className="ex_list__txt" id="ex_list__txt">{`${normalizeTime(prop.start_time)}`}</p>
      <p
        className="ex_list__txt" id="ex_list__txt">{Math.floor(prop.sell_usd - prop.buy_usd)}</p>
      <p className="ex_list__txt" id="ex_list__txt">{Math.floor(prop.sell_usd)}</p>
      <p className="ex_list__txt" id="ex_list__txt">{Math.floor(prop.buy_usd)}</p>
    </li>
  );
};

export default Row;