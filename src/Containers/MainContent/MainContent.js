import React, { Component } from 'react';
import MainImg from '../../Components/MainImg/MainImg';
import Carousel from '../../Components/Carousel/Carousel';

class MainContent extends Component {
	render(){
		return (
			<div>
				<MainImg />
				<Carousel />
			</div>
		)
	}
}

export default MainContent;