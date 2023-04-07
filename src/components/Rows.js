// import Row from "./Row";
// import {useEffect, useState} from "react";

// const API_URL = 'https://jsonplaceholder.typicode.com/posts'

import Row from "./Row";
import React from "react";
import Graphic from "./Graphic";

const Rows = () => {
	const data = {
		status: 1,
		message: "OK",
		pair: "BNBUSDT",
		timeframe: "10s",
		timeframe_in_seconds: 10,
		debug_info: {
			intervals_loaded_from_db: 100
		},
		data: [
			{
				start_time: 1680881030000,
				end_time: 1680881039999,
				buy_usd: "0",
				sell_usd: "0"
			},
			{
				start_time: 1680881040000,
				end_time: 1680881049999,
				buy_usd: "0",
				sell_usd: "0"
			},
			{
				start_time: 1680881050000,
				end_time: 1680881059999,
				buy_usd: "0",
				sell_usd: "0"
			},
			{
				start_time: 1680881060000,
				end_time: 1680881069999,
				buy_usd: "0",
				sell_usd: "0"
			},
			{
				start_time: 1680881070000,
				end_time: 1680881079999,
				buy_usd: "0",
				sell_usd: "0"
			},
			{
				start_time: 1680881080000,
				end_time: 1680881089999,
				buy_usd: "0",
				sell_usd: "0"
			},
			{
				start_time: 1680881090000,
				end_time: 1680881099999,
				buy_usd: "0",
				sell_usd: "0"
			},
			{
				start_time: 1680881100000,
				end_time: 1680881109999,
				buy_usd: "0",
				sell_usd: "0"
			},
			{
				start_time: 1680881110000,
				end_time: 1680881119999,
				buy_usd: "10.88500000",
				sell_usd: "457.33390000"
			},
			{
				start_time: 1680881120000,
				end_time: 1680881129999,
				buy_usd: "1274.47800000",
				sell_usd: "1116.75280000"
			},
			{
				start_time: 1680881130000,
				end_time: 1680881139999,
				buy_usd: "931.44500000",
				sell_usd: "240.01480000"
			},
			{
				start_time: 1680881140000,
				end_time: 1680881149999,
				buy_usd: "373.51100000",
				sell_usd: "407.27900000"
			},
			{
				start_time: 1680881150000,
				end_time: 1680881159999,
				buy_usd: "3287.27000000",
				sell_usd: "731.85860000"
			},
			{
				start_time: 1680881160000,
				end_time: 1680881169999,
				buy_usd: "185.35600000",
				sell_usd: "281.36450000"
			},
			{
				start_time: 1680881170000,
				end_time: 1680881179999,
				buy_usd: "157.98800000",
				sell_usd: "74.61600000"
			},
			{
				start_time: 1680881180000,
				end_time: 1680881189999,
				buy_usd: "1420.95900000",
				sell_usd: "105.08420000"
			},
			{
				start_time: 1680881190000,
				end_time: 1680881199999,
				buy_usd: "866.13500000",
				sell_usd: "317.42890000"
			},
			{
				start_time: 1680881200000,
				end_time: 1680881209999,
				buy_usd: "1368.71100000",
				sell_usd: "513.91770000"
			},
			{
				start_time: 1680881210000,
				end_time: 1680881219999,
				buy_usd: "2168.29200000",
				sell_usd: "2601.92210000"
			},
			{
				start_time: 1680881220000,
				end_time: 1680881229999,
				buy_usd: "976.54000000",
				sell_usd: "314.63080000"
			},
			{
				start_time: 1680881230000,
				end_time: 1680881239999,
				buy_usd: "470.54300000",
				sell_usd: "149.23200000"
			},
			{
				start_time: 1680881240000,
				end_time: 1680881249999,
				buy_usd: "113.82600000",
				sell_usd: "728.12780000"
			},
			{
				start_time: 1680881250000,
				end_time: 1680881259999,
				buy_usd: "2659.05000000",
				sell_usd: "1557.29810000"
			},
			{
				start_time: 1680881260000,
				end_time: 1680881269999,
				buy_usd: "991.15700000",
				sell_usd: "149.85380000"
			},
			{
				start_time: 1680881270000,
				end_time: 1680881279999,
				buy_usd: "2521.27700000",
				sell_usd: "1466.51530000"
			},
			{
				start_time: 1680881280000,
				end_time: 1680881289999,
				buy_usd: "298.56000000",
				sell_usd: "646.05020000"
			},
			{
				start_time: 1680881290000,
				end_time: 1680881299999,
				buy_usd: "722.76400000",
				sell_usd: "333.59570000"
			},
			{
				start_time: 1680881300000,
				end_time: 1680881309999,
				buy_usd: "1751.24100000",
				sell_usd: "335.15020000"
			},
			{
				start_time: 1680881310000,
				end_time: 1680881319999,
				buy_usd: "863.64700000",
				sell_usd: "1074.47040000"
			},
			{
				start_time: 1680881320000,
				end_time: 1680881329999,
				buy_usd: "360.13800000",
				sell_usd: "4013.40810000"
			},
			{
				start_time: 1680881330000,
				end_time: 1680881339999,
				buy_usd: "519.99200000",
				sell_usd: "2120.02710000"
			},
			{
				start_time: 1680881340000,
				end_time: 1680881349999,
				buy_usd: "2300.77800000",
				sell_usd: "357.84590000"
			},
			{
				start_time: 1680881350000,
				end_time: 1680881359999,
				buy_usd: "824.15000000",
				sell_usd: "363.75300000"
			},
			{
				start_time: 1680881360000,
				end_time: 1680881369999,
				buy_usd: "549.53700000",
				sell_usd: "189.02720000"
			},
			{
				start_time: 1680881370000,
				end_time: 1680881379999,
				buy_usd: "1192.99600000",
				sell_usd: "252.76170000"
			},
			{
				start_time: 1680881380000,
				end_time: 1680881389999,
				buy_usd: "361.07100000",
				sell_usd: "174.10400000"
			},
			{
				start_time: 1680881390000,
				end_time: 1680881399999,
				buy_usd: "1424.06900000",
				sell_usd: "477.85330000"
			},
			{
				start_time: 1680881400000,
				end_time: 1680881409999,
				buy_usd: "707.83600000",
				sell_usd: "937.67440000"
			},
			{
				start_time: 1680881410000,
				end_time: 1680881419999,
				buy_usd: "838.14500000",
				sell_usd: "611.85120000"
			},
			{
				start_time: 1680881420000,
				end_time: 1680881429999,
				buy_usd: "1993.51000000",
				sell_usd: "1213.44270000"
			},
			{
				start_time: 1680881430000,
				end_time: 1680881439999,
				buy_usd: "3263.63400000",
				sell_usd: "6741.86650000"
			},
			{
				start_time: 1680881440000,
				end_time: 1680881449999,
				buy_usd: "1332.32400000",
				sell_usd: "7727.10860000"
			},
			{
				start_time: 1680881450000,
				end_time: 1680881459999,
				buy_usd: "4208.14100000",
				sell_usd: "82.38850000"
			},
			{
				start_time: 1680881460000,
				end_time: 1680881469999,
				buy_usd: "1399.81100000",
				sell_usd: "0"
			},
			{
				start_time: 1680881470000,
				end_time: 1680881479999,
				buy_usd: "0",
				sell_usd: "0"
			},
			{
				start_time: 1680881480000,
				end_time: 1680881489999,
				buy_usd: "0",
				sell_usd: "0"
			},
			{
				start_time: 1680881490000,
				end_time: 1680881499999,
				buy_usd: "0",
				sell_usd: "0"
			},
			{
				start_time: 1680881500000,
				end_time: 1680881509999,
				buy_usd: "0",
				sell_usd: "0"
			},
			{
				start_time: 1680881510000,
				end_time: 1680881519999,
				buy_usd: "0",
				sell_usd: "0"
			},
			{
				start_time: 1680881520000,
				end_time: 1680881529999,
				buy_usd: "0",
				sell_usd: "0"
			},
			{
				start_time: 1680881530000,
				end_time: 1680881539999,
				buy_usd: "0",
				sell_usd: "0"
			},
			{
				start_time: 1680881540000,
				end_time: 1680881549999,
				buy_usd: "0",
				sell_usd: "0"
			},
			{
				start_time: 1680881550000,
				end_time: 1680881559999,
				buy_usd: "0",
				sell_usd: "0"
			},
			{
				start_time: 1680881560000,
				end_time: 1680881569999,
				buy_usd: "0",
				sell_usd: "136.79600000"
			},
			{
				start_time: 1680881570000,
				end_time: 1680881579999,
				buy_usd: "141.81600000",
				sell_usd: "819.53240000"
			},
			{
				start_time: 1680881580000,
				end_time: 1680881589999,
				buy_usd: "615.46900000",
				sell_usd: "580.13940000"
			},
			{
				start_time: 1680881590000,
				end_time: 1680881599999,
				buy_usd: "705.65900000",
				sell_usd: "558.99820000"
			},
			{
				start_time: 1680881600000,
				end_time: 1680881609999,
				buy_usd: "2305.44300000",
				sell_usd: "1848.30050000"
			},
			{
				start_time: 1680881610000,
				end_time: 1680881619999,
				buy_usd: "1152.56600000",
				sell_usd: "260.53420000"
			},
			{
				start_time: 1680881620000,
				end_time: 1680881629999,
				buy_usd: "109.47200000",
				sell_usd: "628.32890000"
			},
			{
				start_time: 1680881630000,
				end_time: 1680881639999,
				buy_usd: "143.99300000",
				sell_usd: "126.22540000"
			},
			{
				start_time: 1680881640000,
				end_time: 1680881649999,
				buy_usd: "402.43400000",
				sell_usd: "1419.25850000"
			},
			{
				start_time: 1680881650000,
				end_time: 1680881659999,
				buy_usd: "935.17700000",
				sell_usd: "920.88580000"
			},
			{
				start_time: 1680881660000,
				end_time: 1680881669999,
				buy_usd: "537.71900000",
				sell_usd: "119.38560000"
			},
			{
				start_time: 1680881670000,
				end_time: 1680881679999,
				buy_usd: "56999.47400000",
				sell_usd: "831.43610000"
			},
			{
				start_time: 1680881680000,
				end_time: 1680881689999,
				buy_usd: "2141.61240000",
				sell_usd: "315.35400000"
			},
			{
				start_time: 1680881690000,
				end_time: 1680881699999,
				buy_usd: "786.46080000",
				sell_usd: "2728.71400000"
			},
			{
				start_time: 1680881700000,
				end_time: 1680881709999,
				buy_usd: "330.07710000",
				sell_usd: "713.12300000"
			},
			{
				start_time: 1680881710000,
				end_time: 1680881719999,
				buy_usd: "280.61220000",
				sell_usd: "1299.66900000"
			},
			{
				start_time: 1680881720000,
				end_time: 1680881729999,
				buy_usd: "1152.93660000",
				sell_usd: "1562.15300000"
			},
			{
				start_time: 1680881730000,
				end_time: 1680881739999,
				buy_usd: "2725.23600000",
				sell_usd: "255.33100000"
			},
			{
				start_time: 1680881740000,
				end_time: 1680881749999,
				buy_usd: "1497.32430000",
				sell_usd: "3273.89700000"
			},
			{
				start_time: 1680881750000,
				end_time: 1680881759999,
				buy_usd: "198.48180000",
				sell_usd: "501.64300000"
			},
			{
				start_time: 1680881760000,
				end_time: 1680881769999,
				buy_usd: "2255.47500000",
				sell_usd: "320.95200000"
			},
			{
				start_time: 1680881770000,
				end_time: 1680881779999,
				buy_usd: "533.84760000",
				sell_usd: "930.20100000"
			},
			{
				start_time: 1680881780000,
				end_time: 1680881789999,
				buy_usd: "239.23590000",
				sell_usd: "26600.14100000"
			},
			{
				start_time: 1680881790000,
				end_time: 1680881799999,
				buy_usd: "989.60910000",
				sell_usd: "17226.91200000"
			},
			{
				start_time: 1680881800000,
				end_time: 1680881809999,
				buy_usd: "374.87550000",
				sell_usd: "264.97200000"
			},
			{
				start_time: 1680881810000,
				end_time: 1680881819999,
				buy_usd: "102.66300000",
				sell_usd: "746.08900000"
			},
			{
				start_time: 1680881820000,
				end_time: 1680881829999,
				buy_usd: "815.70420000",
				sell_usd: "304.15800000"
			},
			{
				start_time: 1680881830000,
				end_time: 1680881839999,
				buy_usd: "143.72820000",
				sell_usd: "0"
			},
			{
				start_time: 1680881840000,
				end_time: 1680881849999,
				buy_usd: "897.83460000",
				sell_usd: "236.67100000"
			},
			{
				start_time: 1680881850000,
				end_time: 1680881859999,
				buy_usd: "1378.48410000",
				sell_usd: "251.59900000"
			},
			{
				start_time: 1680881860000,
				end_time: 1680881869999,
				buy_usd: "2421.91350000",
				sell_usd: "93.30000000"
			},
			{
				start_time: 1680881870000,
				end_time: 1680881879999,
				buy_usd: "3358.32450000",
				sell_usd: "998.62100000"
			},
			{
				start_time: 1680881880000,
				end_time: 1680881889999,
				buy_usd: "482.82720000",
				sell_usd: "1829.92400000"
			},
			{
				start_time: 1680881890000,
				end_time: 1680881899999,
				buy_usd: "1026.94110000",
				sell_usd: "148.34700000"
			},
			{
				start_time: 1680881900000,
				end_time: 1680881909999,
				buy_usd: "457.93920000",
				sell_usd: "538.96300000"
			},
			{
				start_time: 1680881910000,
				end_time: 1680881919999,
				buy_usd: "817.25970000",
				sell_usd: "1481.29300000"
			},
			{
				start_time: 1680881920000,
				end_time: 1680881929999,
				buy_usd: "404.43000000",
				sell_usd: "3313.08300000"
			},
			{
				start_time: 1680881930000,
				end_time: 1680881939999,
				buy_usd: "1478.93770000",
				sell_usd: "40513.09650000"
			},
			{
				start_time: 1680881940000,
				end_time: 1680881949999,
				buy_usd: "1024.43400000",
				sell_usd: "193.69070000"
			},
			{
				start_time: 1680881950000,
				end_time: 1680881959999,
				buy_usd: "585.61300000",
				sell_usd: "0"
			},
			{
				start_time: 1680881960000,
				end_time: 1680881969999,
				buy_usd: "605.51700000",
				sell_usd: "887.93040000"
			},
			{
				start_time: 1680881970000,
				end_time: 1680881979999,
				buy_usd: "834.10200000",
				sell_usd: "160.73530000"
			},
			{
				start_time: 1680881980000,
				end_time: 1680881989999,
				buy_usd: "1061.44300000",
				sell_usd: "52.85300000"
			},
			{
				start_time: 1680881990000,
				end_time: 1680881999999,
				buy_usd: "482.98300000",
				sell_usd: "184.98550000"
			},
			{
				start_time: 1680882000000,
				end_time: 1680882009999,
				buy_usd: "451.57200000",
				sell_usd: "267.68490000"
			},
			{
				start_time: 1680882010000,
				end_time: 1680882019999,
				buy_usd: "0",
				sell_usd: "0"
			},
			{
				start_time: 1680882020000,
				end_time: 1680882029999,
				buy_usd: "0",
				sell_usd: "0"
			}
		]
	}
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
	let i = 0
	
	return (
		<div className='ex_main-box'>
		<ul className='ex_list'>
			{isLoading? <h1>Loading</h1>:(info.map((el,index)=>{
				++i
					if(
						el.buy_usd>0 || el.sell_usd>0
					){
						if(i === 0 || i%9 ===0){
							return (
								<>
									<li className='ex_list__item'>
										<p className='ex_list__txt'>time</p>
										<p className='ex_list__txt'>delta</p>
										<p className='ex_list__txt'>Sold</p>
										<p className='ex_list__txt'>Bought</p>
									</li>
									<Row {...el} key={index}/>
								</>
							)
						}
						return <Row {...el} key={index}/>
					}
			}))
			}
		</ul>
		<Graphic data={info}/>
	</div>
	);
};

export default Rows;