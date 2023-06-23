/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import Label from '../layouts/Label';
import BookBox from './BookBox';
import Image1 from '../../assets/books/book1.webp';
import Image2 from '../../assets/books/book2.webp';
import Image3 from '../../assets/books/book3.webp';
import Image4 from '../../assets/books/book4.webp';
import Image5 from '../../assets/books/book5.webp';

function RecommendedBooks({ links }) {
  const imageList = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
  ];

  return (
    <div className="dv-section">
      <Label
        value="Also by Malcolm Gladwell"
        classIdentifier="title"
      />
      <div className="container">
        <div className="row mt-4 pt-3">
          {links.map((item, index) => (
            <BookBox
              url={item.link}
              src={imageList[index]}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

RecommendedBooks.propTypes = {
  links: PropTypes.instanceOf(Array).isRequired,
};

export default RecommendedBooks;
