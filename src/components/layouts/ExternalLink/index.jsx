import React from 'react';
import PropTypes from 'prop-types';

function ExternalLink({ url, title }) {
  return ();
};

ExternalLink.propTypes = {
  url: PropTypes.string.isRequied,
  title: PropTypes.string.isRequired,
};

export default ExternalLink;
