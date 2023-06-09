import React from 'react';
import PropTypes from 'prop-types';

function Contents({
  title,
  description,
  list,
}) {
  return ();
}

Contents.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  list: PropTypes.instanceOf(Array).isRequired,
};

export default Contents;
