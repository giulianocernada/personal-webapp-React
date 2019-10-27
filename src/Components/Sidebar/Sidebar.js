import React from 'react';
import './Sidebar.css';

const Sidebar = (props) => {
	return (
		<div className='sidebar'>
			<div className='closeBtn'>
				<p onClick={props.clicked} className='touch'>Cerrar</p>
			</div>
			<div className='sidebar-title'>
				<h2>Contacto</h2>
			</div>
			<ul className='listSidebar'>
				<li className='listItem'>Tel: +54 11 5690 2009</li>
				<a href="mailto:cigimax.info@gmail.com"><li className='listItem mail'>cigimax.info@gmail.com</li></a>
				<div className='listSocial'>
					<a target='_blank' rel='noreferrer noopener' href="https://www.facebook.com/Cigimax-Render-414819245954070/"><li className='listItem'>Facebook</li></a>
					<a target='_blank' rel='noreferrer noopener' href="https://www.instagram.com/cigimax/"><li className='listItem'>Instagram</li></a>
					<a target='_blank' rel='noreferrer noopener' href="https://github.com/giulianocernada"><li className='listItem'>GitHub</li></a>
					<a target='_blank' rel='noreferrer noopener' href="https://twitter.com/CernadaGiuliano"><li className='listItem'>Twitter</li></a>
				</div>
			</ul>
		</div>
	)
}

export default Sidebar;