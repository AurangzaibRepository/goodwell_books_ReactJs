/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Span from '../layouts/Span';

function PublishIcon({
  title,
  icon,
  value,
}) {
  return (
    <div className="dv-publish-icon text-center">
      <Span
        value={title}
        classIdentifier="mb-2"
      />
      <br />
      <FontAwesomeIcon icon={icon} />
      <br />
      <Span value={value} />
    </div>
  );
}

PublishIcon.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  icon: PropTypes.objectOf(PropTypes.shape).isRequired,
};

export default PublishIcon;
