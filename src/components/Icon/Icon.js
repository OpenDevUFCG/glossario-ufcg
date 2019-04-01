import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ icon, iconColor, size }) => (
    <i className="material-icons" style={{color: iconColor, fontSize: size}}>
        {icon}
    </i>
);

Icon.propTypes = {
    iconColor: PropTypes.string,
    size: PropTypes.string,
    icon: PropTypes.any,
};

export default Icon;
