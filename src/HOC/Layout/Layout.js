import React, { Component } from 'react';
import Aux from '../Aux/Aux';
import Toolbar from '../../Components/Navigation/Toolbar/Toolbar';
import SideNav from '../../Components/Navigation/SideNav/SideNav';
import classes from './Layout.css';

class Layout extends Component {
	state = {
		showSideNav: false
	}

	SideNavClosedHandler = () => {
		this.setState({showSideNav: false});
	}

	SideNavToggleHandler = () => {
		this.setState((prevState) =>{
			return {showSideNav: !prevState.showSideNav}
		});
	}

	render (){
		return (
			<Aux>
				<Toolbar navToggleClicked={this.SideNavToggleHandler}/>
				<SideNav 
					open={this.state.showSideNav}
					closed={this.SideNavClosedHandler} />
				<main className={classes.Content}>
					{this.props.children}
				</main>
			</Aux>
		)
	}
}

export default Layout;