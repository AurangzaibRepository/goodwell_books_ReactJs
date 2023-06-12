/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';
import BookImage1 from '../../assets/books/book1.webp';
import BookImage2 from '../../assets/books/book2.webp';
import BookImage3 from '../../assets/books/book3.webp';
import BookImage4 from '../../assets/books/book4.webp';
import BookImage5 from '../../assets/books/book5.webp';

function Contents({ title, books }) {
  const imageList = [
    BookImage1,
    BookImage2,
    BookImage3,
    BookImage4,
    BookImage5,
  ];

  return (
    <>
      <label className="title">{title}</label>
      {books.map((item, index) => (
        <Book
          key={item.id}
          image={imageList[index]}
          title={item.title}
          description={item.description}
          buyLink={item.buyLink}
        />
      ))}
    </>
  );
}

Contents.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.instanceOf(Array).isRequired,
};

export default Contents;
