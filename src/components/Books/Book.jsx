/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

function Book({
  image,
  title,
  description,
  buyLink,
}) {
  return (
    <div className="row mt-5 pt-3">
      <div className="col-md-4 text-center pe-0">
        <img src={image} alt="book" />
      </div>
      <div className="col-md-8 ps-0">
        <label className="sub-title">{title}</label>
        <p>{description}</p>
      </div>
    </div>
  );
}

Book.propTypes = {
  image: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buyLink: PropTypes.string.isRequired,
};

export default Book;
