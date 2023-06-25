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
      {children}
    </a>
  );
}

ExternalLink.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string,
  classIdentifier: PropTypes.string,
  children: PropTypes.node,
};

ExternalLink.defaultProps = {
  classIdentifier: '',
  title: '',
  children: null,
};

export default ExternalLink;
