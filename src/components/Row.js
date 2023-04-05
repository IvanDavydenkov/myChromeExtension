const Row = (prop) => {

	return (
		<li className='ex_list__item'>
			<p className='ex_list__txt'>{prop.body}</p>
			<p className='ex_list__txt'>5000</p>
			<p className='ex_list__txt'>6000</p>
		</li>
	);
};

export default Row;