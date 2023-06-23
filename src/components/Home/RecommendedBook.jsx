import React from 'react';
import PropTypes from 'prop-types';

function RecommendedBook({
  title,
  subTitle,
  caption,
}) {
  return ();
}

RecommendedBook.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  capion: PropTypes.string.isRequired,
};

export default RecommendedBook;
