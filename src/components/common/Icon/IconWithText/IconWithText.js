import React from 'react';
import "./IconWithText.css"

import Icon from "../Icon"

const IconWithText = ({ icon, text }) => (
    <figure className='icon-with-text light-accent'>
        <Icon icon={icon} size='30px'/>
        <figcaption>{text}</figcaption>
    </figure>
);

export default IconWithText;