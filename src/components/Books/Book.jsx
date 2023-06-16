/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Image from '../layouts/Image';

function Book({
  image,
  title,
  description,
  additionalClass,
}) {
  return (
    <div className={`row dv-book-info ${additionalClass}`}>
      <div className="col-md-4 text-center pe-0">
        <Image
          src={image}
          alt="book"
        />
      </div>
      <div className="col-md-8 ps-0">
        <div className="dv-title d-flex mb-4">
          <label className="sub-title">{title}</label>
          <Link
            to={`/book/${title}`}
            className="d-flex align-items-center justify-content-end lnk-buy"
          >
            Buy the Book
          </Link>
        </div>
        <p>
          {description}
          <Link to={`/book/${title}`} className="lnk-read-more">{' Read More'}</Link>
        </p>
      </div>
    </div>
  );
}

Book.propTypes = {
  image: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  additionalClass: PropTypes.string.isRequired,
};

export default Book;
