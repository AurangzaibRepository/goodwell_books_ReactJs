/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import BookImage1 from '../../assets/books/book1.webp';
import BookImage2 from '../../assets/books/book2.webp';
import BookImage3 from '../../assets/books/book3.webp';
import BookImage4 from '../../assets/books/book4.webp';
import BookImage5 from '../../assets/books/book5.webp';

function Book({
  title,
  description,
  buyLink,
}) {
  const imageList = [
    BookImage1,
    BookImage2,
    BookImage3,
    BookImage4,
    BookImage5,
  ];

  return (
    <div className="row mt-5">
      <div className="col-md-4">
        
      </div>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buyLink: PropTypes.string.isRequired,
};

export default Book;
