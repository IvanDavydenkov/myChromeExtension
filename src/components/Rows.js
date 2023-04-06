// import Row from "./Row";
// import {useEffect, useState} from "react";

// const API_URL = 'https://jsonplaceholder.typicode.com/posts'

import Row from "./Row";
import React from "react";

const Rows = () => {
	const data = {
		status: 1,
		message: "OK",
		pair: "BNBUSDT",
		timeframe: "30m",
		data: [
			{
				start_time: 1680709613755,
				end_time: 1680709603755,
				buy_usd: 1300.30,
				sell_usd: 500.50
			},
			{
				start_time: 1680709593755,
				end_time: 1680709583755,
				buy_usd: 2300.30,
				sell_usd: 3500.50
			},
			{
				start_time: 1680709613755,
				end_time: 1680709603755,
				buy_usd: 1300.30,
				sell_usd: 500.50
			},
			{
				start_time: 1680709593755,
				end_time: 1680709583755,
				buy_usd: 2300.30,
				sell_usd: 3500.50
			},
			{
				start_time: 1680709613755,
				end_time: 1680709603755,
				buy_usd: 1300.30,
				sell_usd: 500.50
			},
			{
				start_time: 1680709593755,
				end_time: 1680709583755,
				buy_usd: 2300.30,
				sell_usd: 3500.50
			},
			{
				start_time: 1680709613755,
				end_time: 1680709603755,
				buy_usd: 1300.30,
				sell_usd: 500.50
			},
			{
				start_time: 1680709593755,
				end_time: 1680709583755,
				buy_usd: 2300.30,
				sell_usd: 3500.50
			},
			{
				start_time: 1680709613755,
				end_time: 1680709603755,
				buy_usd: 1300.30,
				sell_usd: 500.50
			},
			{
				start_time: 1680709593755,
				end_time: 1680709583755,
				buy_usd: 2300.30,
				sell_usd: 3500.50
			}
		]
	};
	
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
	const isLoading = false
	const info = data.data
	
	return (
		<ul className='ex_list'>
			<li className='ex_list__item'>
				<p className='ex_list__txt'>delta</p>
				<p className='ex_list__txt'>Sold</p>
				<p className='ex_list__txt'>Bought</p>
			</li>
			{isLoading? <h1>Loading</h1>:(info.map((el,index)=>{
					return <Row {...el} key={index}/>
			}))
			}
		</ul>
	);
};

export default Rows;