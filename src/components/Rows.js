// import Row from "./Row";
// import {useEffect, useState} from "react";
// const API_URL = 'https://jsonplaceholder.typicode.com/posts'

import Row from "./Row";
import React from "react";
import Chart from "./Chart";
import { data } from "../data/TestData"; // data for testing table and graphic

const Rows = () => {
  // const [info, setInfo] = useState([])
  // const [error, setError] = useState('')
  // const [isLoading, setIsLoading] = useState(true)
  
  // useEffect(() => {
  // 	fetch(API_URL)
  // 		.then(response => response.json())
  // 		.then(info => setInfo(info))
  // 		.catch(error => setError(error.message))
  // 		.finally(() => {
  // 			setIsLoading(false)
  // 		})
  // }, [])
  const isLoading = false;
  const info = data.data;
  let i = 0;
  
  return (
    <div className="ex_main-box">
      <ul className="ex_list">
        {isLoading ? <h1>Loading</h1> : (info.map((el, index) => {
          ++i;
          if (
            el.buy_usd > 0 || el.sell_usd > 0
          ) {
            if (i === 0 || i % 9 === 0) {
              return (
                <>
                  <li className="ex_list__item" key={index}>
                    <p className="ex_list__txt">time</p>
                    <p className="ex_list__txt">delta</p>
                    <p className="ex_list__txt">Sold</p>
                    <p className="ex_list__txt">Bought</p>
                  </li>
                  <Row {...el} key={index} />
                </>
              );
            }
            return <Row {...el} key={index} />;
          }
          return ("error of render");
        }))
        }
      </ul>
      <Chart data={info} />
    </div>
  );
};

export default Rows;