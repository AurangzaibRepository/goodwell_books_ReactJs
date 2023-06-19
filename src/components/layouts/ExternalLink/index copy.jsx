/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

function ExternalLink({ url, title }) {
  return (
    <a href={url}>
      {title}
    </a>
  );
}

ExternalLink.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ExternalLink;
