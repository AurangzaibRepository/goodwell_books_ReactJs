import React from 'react';
import PropTypes from 'prop-types';

function Image({
  src,
  alt,
  classIdentifier,
  id,
}) {
  return ();
}

Image.propTypes = {
  src: PropTypes.node.isRequired,
  alt: PropTypes.string.isRequired,
  classIdentifier: PropTypes.string,
  id: PropTypes.string,
};

export default Image;
