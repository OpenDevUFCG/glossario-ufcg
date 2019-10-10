import React from 'react';
import Icon from '../Icon';

import PropTypes from 'prop-types';

const IconButton = ({ icon, iconColor, action }) => (
  <button className="odu-icon-button align-self-center" onClick={action}>
    <Icon icon={icon} iconColor={iconColor} />
  </button>
);

IconButton.propTypes = {
  icon: PropTypes.string,
  iconColor: PropTypes.string,
  action: PropTypes.func,
};

export default IconButton;
