import React from 'react';
import Icon from "../Icon";

const IconButton = ({ icon, iconColor, action}) => (
  <button
    className='odu-icon-button align-self-center'
    onClick={action}
  >
    <Icon icon={icon} iconColor={iconColor}/>
  </button>
);

export default IconButton;