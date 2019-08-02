import React from 'react';
import "./IconWithText.css"

import Icon from "../Icon/Icon"

const IconWithText = (props) => (
    <figure className="icon-with-text light-accent">
        <Icon icon={props.icon} size="30px"/>
        <figcaption>{props.text}</figcaption>
    </figure>
);

export default IconWithText;