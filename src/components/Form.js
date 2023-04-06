import {useState} from "react";
import React from "react";
import {currentUrl} from "../index";


const Form = () => {
	const [data, setData] = useState({ interval: '', rows: '' })
	
	function handleFormSubmit(event) {
		event.preventDefault()
		let pair
		const result ={...data}
		if(currentUrl==='https://finandy.com'){
			pair = document
				.body
				.querySelectorAll('.xc-selected')[1]
				.querySelectorAll('span')[1]
				.textContent
				.split('.')
				.join('')
				.toLowerCase()
			result.pair = pair
		}
		if(currentUrl==='https://www.binance.com'){
				pair = document
				.body
				.querySelector('h1')
				.textContent
				.split('/')
				.join('')
				.toLowerCase()
			
			result.pair = pair
		}
		const validate =()=>{
			const intervalValue = data.interval.value
		}
		console.log(result)
	}
	
	const handleInputChange = (event, name) => {
		setData({ ...data, [name]: event.target.value })
	}
	return (
			<form className="ex_form" onSubmit={handleFormSubmit}>
				<label className="ex_form__label">
					Set interval
					<input className="ex_form__input"
					       pattern='\d{0,3}[smhDWM]{1}'
					       id="interval"
					       type='text'
					       value={data.interval}
					       required={true}
					       onChange={(event) => handleInputChange(event, 'interval')}/>
				</label>
				<label className="ex_form__label">
					Set rows
					<input className="ex_form__input"
					       id="rows"
					       type='number'
					       value={data.rows}
					       required={true}
					       min='1'
					       max='100'
					       onChange={(event) => {
						handleInputChange(event, 'rows')
					}} />
				</label>
				<button type="submit" className="ex_form__button">Submit</button>
			</form>
	);
};

export default Form;