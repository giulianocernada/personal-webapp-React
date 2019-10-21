import React from 'react';
import './Sidebar.css';

const Sidebar = (props) => {
	return (
		<div className='sidebar'>
			<ul>
				<li onClick={props.clicked} className='touch'>Cerrar</li>
				<li>123</li>
				<li>123</li>
			</ul>
		</div>
	)
}

export default Sidebar;