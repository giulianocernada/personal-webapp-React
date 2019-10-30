import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css';

const navigationItems = () => (
	<ul className={classes.NavigationItems}>
		<NavigationItem>Proyectos</NavigationItem>
		<NavigationItem>Visualización</NavigationItem>
		<NavigationItem>Documentación</NavigationItem>
		<NavigationItem>Fotografía</NavigationItem>
		<NavigationItem>Acerca de</NavigationItem>
		<NavigationItem>Contacto</NavigationItem>
	</ul>
);

export default navigationItems;