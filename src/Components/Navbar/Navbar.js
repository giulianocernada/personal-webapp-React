import React from 'react';
import './Navbar.css'

const Navbar = (props) => {
	return (
		<div className='nav'>
			<a href='#' className='header-title'><h1>Giuliano Cernada</h1></a>
			<ul className='list'>
				<a href='#'><li className='lista-item'>Proyectos</li></a>
				<li className='lista-item'>Visualización</li>
				<li className='lista-item'>Documentación</li>
				<li className='lista-item'>Fotografía</li>
				<li className='lista-item'>Acerca de</li>
				<li onClick={props.clicked} className='lista-item'>Contacto</li>
			</ul>
		</div>
	)
}

export default Navbar;