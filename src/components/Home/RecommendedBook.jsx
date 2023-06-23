/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import BookCover from '../../assets/books/book1.webp';

function RecommendedBook({
  title,
  subTitle,
  caption,
}) {
  return (
    <div className="row dv-section" id="dv-recommended-book">
      <div className="col-md-6">
        asd
      </div>
      <div className="col-md-6">
      </div>
    </div>
  );
}

RecommendedBook.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
};

export default RecommendedBook;
