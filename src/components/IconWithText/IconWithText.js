import React from 'react';
import "./IconWithText.css"

import Icon from "../Icon/Icon"

const IconWithText = (props) => (
    <div className={"icon-with-text light-accent"}>
        <Icon icon={props.icon}/>
        <span>{props.text}</span>
    </div>
);

export default IconWithText;