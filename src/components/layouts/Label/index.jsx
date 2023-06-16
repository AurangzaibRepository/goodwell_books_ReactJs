import React from 'react';
import PropTypes from 'prop-types';

function Label({
  value,
  id,
  classIdentifier,
}) {
  return ();
}

Label.propTypes = {
  value: PropTypes.string.isRequired,
  id: PropTypes.string,
  classIdentifier: PropTypes.string,
};

export default Label;
