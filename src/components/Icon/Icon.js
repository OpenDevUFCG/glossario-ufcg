import React from 'react';

const Icon = (props) => (
    <i className="material-icons" style={{color: props.iconColor, fontSize: props.size}}>
        {props.icon}
    </i>
);

export default Icon;