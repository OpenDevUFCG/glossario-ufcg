import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';

import styles from './IconWithText.module.css';

const IconWithText = ({ icon, text }) => (
  <figure className={styles.iconWithText}>
    <Icon icon={icon} size="30px" />
    <figcaption>{text}</figcaption>
  </figure>
);

IconWithText.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string,
};

export default IconWithText;
