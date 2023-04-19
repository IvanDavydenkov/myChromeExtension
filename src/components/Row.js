import React from "react";
import { normalizeTime } from "../utils/normalizeTime";
// import { data } from "../data/TestData";
import { convertToShortNumber } from "../utils/convertToShortNumber";

const deltaHandler = (item) => {
  return (Math.floor(item.buy_usd - item.sell_usd));
};
const delta = (item) => {
  const deltaItem = deltaHandler(item);
  if (Math.abs(deltaItem) < 1000) {
    return 0;
  } else {
    return convertToShortNumber(deltaItem);
  }
};

const Row = (prop) => {
  console.log(prop.ave);
  return (
    <li
      className={
        Math.abs(prop.buy_usd * 1 - prop.sell_usd * 1) > Math.abs(prop.ave * 3)
          ? "ex_list__item isInteresting"
          : "ex_list__item"
      }
      id={
        Math.abs(prop.buy_usd * 1 - prop.sell_usd * 1) > Math.abs(prop.ave * 3)
          ? "ex_list__item isInteresting"
          : "ex_list__item"
      }
    >
      <p className="ex_list__txt" id="ex_list__txt">
        {`${normalizeTime(prop.start_time)}`}
      </p>
      <p className="ex_list__txt" id="ex_list__txt">
        {delta(prop)}
      </p>
      <p className="ex_list__txt" id="ex_list__txt">
        {convertToShortNumber(Math.round(prop.sell_usd))}
      </p>
      <p className="ex_list__txt" id="ex_list__txt">
        {convertToShortNumber(Math.round(prop.buy_usd))}
      </p>
    </li>
  );
};

export default Row;
