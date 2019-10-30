import React from 'react';
import Aux from '../../../HOC/Aux/Aux';
import classes from './SideNav.css';

const sideNav = (props) => {
	let attachedClasses = [classes.SideNav, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideNav, classes.Open];
    }

	return (
		<Aux>
			<div className={attachedClasses.join(' ')}>Holis</div>
		</Aux>
	)	
}

export default sideNav;