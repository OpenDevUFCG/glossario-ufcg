import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ icon, color, size }) => (
  <i className="material-icons" style={{ color: color, fontSize: size }}>
    {icon}
  </i>
);

Icon.propTypes = {
  icon: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
};

export default Icon;
