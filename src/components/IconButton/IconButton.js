import React from 'react';
import Icon from "../Icon/Icon";

const IconButton = (props) => (
    <button className={'odu-icon-button align-self-center'} onClick={props.action}>
        <Icon icon={props.icon}/>
    </button>
);

export default IconButton;