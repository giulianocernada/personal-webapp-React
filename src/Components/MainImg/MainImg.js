import React from 'react';
import mainImage from '../../Assets/Main/BG.jpg';
import classes from './MainImg.css';

const mainImg = (props) => (
	<div className={classes.MainImg}>
		<img src={mainImage} alt='Background'/>
	</div>
);

export default mainImg;