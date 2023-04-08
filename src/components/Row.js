import React from "react";
import { normalizeTime } from "../utils/normalizeTime";


const Row = (prop) => {
  return (
    <li className="ex_list__item">
      <p className="ex_list__txt">{`${normalizeTime(prop.start_time)}`}</p>
      <p className="ex_list__txt">{Math.floor(prop.sell_usd - prop.buy_usd)}</p>
      <p className="ex_list__txt">{Math.floor(prop.sell_usd)}</p>
      <p className="ex_list__txt">{Math.floor(prop.buy_usd)}</p>
    </li>
  );
};

export default Row;