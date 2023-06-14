/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import BookCover from '../../assets/books/book2.webp';

function BookInformation({
  title,
  caption,
  price,
  buyLinks,
}) {
  return (
    <div className="row">
      <div className="col-md-4">
        <img src={BookCover} alt="Book Cover" />
      </div>
    </div>
  );
}

BookInformation.propTypes = {
  title: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  buyLinks: PropTypes.instanceOf(Array).isRequired,
};

export default BookInformation;
