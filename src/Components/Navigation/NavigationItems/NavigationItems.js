import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
	<ul className={classes.NavigationItems}>
		<NavigationItem>Proyectos</NavigationItem>
		<NavigationItem>Visualización</NavigationItem>
	</ul>
);

export default navigationItems;