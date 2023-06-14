import React from 'react';
import PropTypes from 'prop-types';

function BookInformation({
  title,
  caption,
  price,
  buyLinks,
}) {
  return ();
}

BookInformation.propTypes = {
  title: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  buyLinks: PropTypes.instanceOf(Array).isRequired,
};

export default BookInformation;
