/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

function ExternalLink({
  url,
  title,
  classIdentifier,
  children,
}) {
  return (
    <a href={url} className={classIdentifier}>
      {title}
    </a>
  );
}

ExternalLink.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string,
  classIdentifier: PropTypes.string,
};

ExternalLink.defaultProps = {
  classIdentifier: '',
  title: '',
};

export default ExternalLink;
