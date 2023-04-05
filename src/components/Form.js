import {useState} from "react";

const Form = () => {
	const [data, setData] = useState({ interval: '', rows: '' })
	
	function handleFormSubmit(event) {
		event.preventDefault()
		const pair = document
				.body
				.querySelectorAll('.xc-selected')[1]
				.querySelectorAll('span')[1]
				.textContent
				.split('.')
				.join('')
				.toLowerCase()
		const result = {...data}
		result.pair = pair
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
					       id="interval"
					       type='number'
					       value={data.interval}
					       onChange={(event) => handleInputChange(event, 'interval')}/>
				</label>
				<label className="ex_form__label">
					Set rows
					<input className="ex_form__input"
					       id="rows"
					       type='number'
					       value={data.rows}
					       onChange={(event) => {
						handleInputChange(event, 'rows')
					}} />
				</label>
				<button type="submit" className="ex_form__button">Submit</button>
			</form>
	);
};

export default Form;