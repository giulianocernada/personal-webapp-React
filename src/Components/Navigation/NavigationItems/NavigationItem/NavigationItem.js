import React from 'react';

const navigationItem = (props) => (
	<li>
		<a>{props.children}</a>
	</li>
); 

export default navigationItem;