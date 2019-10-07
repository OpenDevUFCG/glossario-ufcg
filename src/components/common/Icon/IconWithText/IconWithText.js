import React from 'react';
import './IconWithText.css';

import Icon from '../Icon';

import PropTypes from 'prop-types';

const IconWithText = ({ icon, text }) => (
  <figure className="icon-with-text light-accent">
    <Icon icon={icon} size="30px" />
    <figcaption>{text}</figcaption>
  </figure>
);

IconWithText.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string,
};

export default IconWithText;
