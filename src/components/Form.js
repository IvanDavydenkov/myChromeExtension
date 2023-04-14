import { useState } from "react";
import React from "react";
import { currentUrl } from "../index";
import Rows from "./Rows";
import Chart from "./Chart";


const Form = () => {
  const [data, setData] = useState({ interval: "1h", limit: "100" });
  const [submittedData, setSubmittedData] = useState(null);
  
  // const result = { ...data };
  const getPair = () => {
    let pair;
    let result = { ...data };
    if (currentUrl === "https://finandy.com") {
      pair = document
        .body
        .querySelectorAll(".xc-selected")[1]
        .querySelectorAll("span")[1]
        .textContent
        .split(".")
        .join("")
        .toUpperCase();
    }
    if (currentUrl === "https://www.binance.com") {
      pair = document
        .body
        .querySelector("h1")
        .textContent
        .split("/")
        .join("")
        .toUpperCase();
    }
    return pair;
  };
  
  function handleFormSubmit(event) {
    event.preventDefault();
    let result = { ...data, pair: getPair() };
    setSubmittedData(result);
  }
  
  const handleInputChange = (event, name) => {
    setData({ ...data, [name]: event.target.value });
  };
  return (
    <div className="ex_container" id="ex_container">
      <form className="ex_form" onSubmit={handleFormSubmit} id="ex_form">
        <label className="ex_form__label" id="ex_form__label-interval">
          
          <input className="ex_form__input"
                 id="ex_form__input-interval"
                 pattern="\d{0,3}[smhDWM]{1}"
                 placeholder="interval"
                 type="text"
                 value={data.interval}
                 required={true}
                 onChange={(event) => handleInputChange(event, "interval")} />
        </label>
        <label className="ex_form__label" id="ex_form__label-rows">
          <input className="ex_form__input"
                 id="ex_form__input-rows"
                 placeholder="rows"
                 type="number"
                 value={data.limit}
                 required={true}
                 min="1"
                 max="100"
                 onChange={(event) => {
                   handleInputChange(event, "limit");
                 }} />
        </label>
        <button type="submit" className="ex_form__button" id="ex_form__button">Submit</button>
      </form>
      <div className={"ex_content"} id={"ex_content"}>
        {submittedData && <Rows config={submittedData} />}
        {submittedData && <Chart config={submittedData} />}
      </div>
    
    </div>
  );
};

export default Form;