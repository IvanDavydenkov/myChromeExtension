import React from "react";
import {AiOutlineDown} from "react-icons/ai";

const Button = ({btnHandler}) => {
	return (
		<AiOutlineDown onClick={btnHandler} className='ex_super-btn' id='ex_super-btn'/>
	);
};

export default Button;