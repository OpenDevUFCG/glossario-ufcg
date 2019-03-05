import React from 'react';

const Icon = (props) => (
    <i className="material-icons" style={{color: props.iconColor}}>
        {props.icon}
    </i>
);

export default Icon;