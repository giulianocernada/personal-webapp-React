import React from 'react';
import './FrontImg.css'

const FrontImg = (props) => {
	return (
		<div>
			<img className='img' alt='hols' src={require('./BG5.jpg')} />
		</div>
	);
}

export default FrontImg;