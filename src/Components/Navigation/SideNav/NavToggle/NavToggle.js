import React from 'react';

import classes from './NavToggle.css';

const drawerToggle = (props) => (
    <div className={classes.NavToggle} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default drawerToggle;