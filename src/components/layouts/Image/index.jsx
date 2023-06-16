/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

function Image({
  src,
  alt,
  classIdentifier,
  id,
}) {
  return (
    <img
      src={src}
      alt={alt}
      className={classIdentifier}
      id={id}
    />
  );
}

Image.propTypes = {
  src: PropTypes.node.isRequired,
  alt: PropTypes.string.isRequired,
  classIdentifier: PropTypes.string,
  id: PropTypes.string,
};

export default Image;
