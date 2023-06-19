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
    <div className="dv-publish-icon">
      <span>{title}</span>
      <FontAwesomeIcon icon={icon} />
      <span>{value}</span>
    </div>
  );
}

PublishIcon.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
};

export default PublishIcon;
