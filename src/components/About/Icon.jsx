/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Icon({ url, icon }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      <FontAwesomeIcon icon={icon} />
    </a>
  );
}

Icon.propTypes = {
  url: PropTypes.string.isRequired,
  icon: PropTypes.objectOf(PropTypes.shape).isRequired,
};

export default Icon;
