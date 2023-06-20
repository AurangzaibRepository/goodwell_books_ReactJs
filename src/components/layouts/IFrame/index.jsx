import React from 'react';
import PropTypes from 'prop-types';

function IFrame({
  src,
  id,
  classIdentifier,
}) {
  return ();
}

IFrame.propTypes = {
  src: PropTypes.string.isRequired,
  id: PropTypes.string,
  classIdentifier: PropTypes.string,
};

export default IFrame;
