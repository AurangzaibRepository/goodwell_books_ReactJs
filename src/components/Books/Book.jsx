import React from 'react';
import PropTypes from 'prop-types';

function Book({
  title,
  description,
  buyLink,
}) {
 return ();
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buyLink: PropTypes.string.isRequired,
};

export default Book;
