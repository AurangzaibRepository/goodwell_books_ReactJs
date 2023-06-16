/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import CoverLinks from './CoverLinks';
import BuyLinks from './BuyLinks';
import Image from '../layouts/Image';
import Label from '../layouts/Label';
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
        <Image
          src={BookCover}
          alt="Book Cover"
          id="image-book-cover"
        />
      </div>
      <div className="col-md-8 ps-4">
        <h1 id="book-title">{title}</h1>
        <label id="book-caption">{caption}</label>
        <CoverLinks />
        <label id="label-price">{price}</label>
        <BuyLinks buyLinks={buyLinks} />
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
