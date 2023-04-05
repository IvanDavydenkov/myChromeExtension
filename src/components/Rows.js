import Row from "./Row";
import {useEffect, useState} from "react";

// const API_URL = 'https://jsonplaceholder.typicode.com/posts'
const API_URL = '../data/db.json'

const Rows = () => {
	
	const [info, setInfo] = useState([])
	const [error, setError] = useState('')
	const [isLoading, setIsLoading] = useState(true)
	
	useEffect(() => {
		fetch(API_URL)
			.then(response => response.json())
			.then(info => setInfo(info))
			.catch(error => setError(error.message))
			.finally(() => {
				setIsLoading(false)
			})
	}, [])

	return (
		<ul className='ex_list'>
			<li className='ex_list__item'>
				<p className='ex_list__txt'>delta</p>
				<p className='ex_list__txt'>Sold</p>
				<p className='ex_list__txt'>Bought</p>
			</li>
			{isLoading? <h1>Loading</h1>:(info.map((el,index)=>{
					for(; index<10 ;){
					return <Row {...el} key={el.id}/>
				}
			}))
			}
		</ul>
	);
};

export default Rows;