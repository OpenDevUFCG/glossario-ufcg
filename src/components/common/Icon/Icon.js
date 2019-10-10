import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ icon, iconColor, size }) => (
  <i className="material-icons" style={{ color: iconColor, fontSize: size }}>
    {icon}
  </i>
);

Icon.propTypes = {
  icon: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
};

export default Icon;
