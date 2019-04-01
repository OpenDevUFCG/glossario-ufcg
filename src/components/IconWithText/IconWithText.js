import React from 'react';
import PropTypes from 'prop-types';
import Icon from "../Icon/Icon"

import "./IconWithText.css"

const IconWithText = ({ icon, text }) => (
    <div className={"icon-with-text light-accent"}>
        <Icon icon={icon} size={"30px"}/>
        <span>{text}</span>
    </div>
);

IconWithText.propTypes = {
    icon: PropTypes.any,
    text: PropTypes.string,
};

export default IconWithText;