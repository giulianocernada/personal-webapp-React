import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import NavToggle from '../SideNav/NavToggle/NavToggle';
import classes from './Toolbar.css';

const toolbar = (props) => (
	<header className={classes.Toolbar}>
		<div>
			<Logo />
		</div>
		<NavToggle clicked={props.navToggleClicked}/>
		<nav className={classes.DesktopOnly}>
			<NavigationItems />
		</nav>
	</header>
);

export default toolbar;