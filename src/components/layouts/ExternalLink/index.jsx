/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

function ExternalLink({
  url,
  title,
  class,
}) {
  return (
    <a href={url}>
      {title}
    </a>
  );
}

ExternalLink.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  class: PropTypes.string,
};

export default ExternalLink;
