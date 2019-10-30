import React from 'react';

const navigationItem = (props) => (
	<li className={classes.NavigationItem}>
		<a>{props.children}</a>
	</li>
); 

export default navigationItem;