import React from 'react';
import PropTypes from 'prop-types';
import Icon from "../Icon/Icon";

const IconButton = ({ action, iconColor, icon }) => (
    <button className={'odu-icon-button align-self-center'} onClick={action}>
        <Icon icon={icon} iconColor={iconColor}/>
    </button>
);

IconButton.propTypes = {
    icon: PropTypes.any,
    action: PropTypes.func,
    iconColor: PropTypes.string,
};

export default IconButton;