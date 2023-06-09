import React from 'react';
import PropTypes from 'prop-types';

function Contents({ title, books }) {
  return ();
}

Contents.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.instanceOf(Array).isRequired,
}

export default Contents;
