import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css';

const navigationItems = () => (
	<ul className={classes.NavigationItems}>
		<NavigationItem link='/'>Proyectos</NavigationItem>
		<NavigationItem link='/'>Visualización</NavigationItem>
		<NavigationItem link='/'>Documentación</NavigationItem>
		<NavigationItem link='/'>Fotografía</NavigationItem>
		<NavigationItem link='/'>Acerca de</NavigationItem>
		<NavigationItem link='/'>Contacto</NavigationItem>
	</ul>
);

export default navigationItems;