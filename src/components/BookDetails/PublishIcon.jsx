/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function PublishIcon({
  title,
  icon,
  value,
}) {
  return (
    <div className="dv-publish-icon text-center">
      <span className="mb-2">{title}</span>
      <br />
      <FontAwesomeIcon icon={icon} />
      <br />
      <span>{value}</span>
    </div>
  );
}

PublishIcon.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  icon: PropTypes.objectOf(PropTypes.shape).isRequired,
};

export default PublishIcon;
