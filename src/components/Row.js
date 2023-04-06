import React from "react";

const Row = (prop) => {
	// console.log(prop)

	return (
		<li className='ex_list__item'>
			<p className='ex_list__txt'>{Math.floor(prop.sell_usd - prop.buy_usd)}</p>
			<p className='ex_list__txt'>{prop.sell_usd}</p>
			<p className='ex_list__txt'>{prop.buy_usd}</p>
		</li>
	);
};

export default Row;