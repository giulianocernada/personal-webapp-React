import React from 'react';
import Aux from '../../../HOC/Aux/Aux';
import Logo from '../../Logo/Logo';
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems';
import classes from './SideNav.css';

const sideNav = (props) => {
	let attachedClasses = [classes.SideNav, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideNav, classes.Open];
    }

	return (
		<Aux>
			<div className={attachedClasses.join(' ')}>
				<div>
					<Logo />
				</div>
				<nav>
					<NavigationItems />
				</nav>
			</div>
		</Aux>
	)	
}

export default sideNav;