/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

function Contents({ title, books }) {
  return (
    <label className="title">{title}</label>
  );
}

Contents.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.instanceOf(Array).isRequired,
};

export default Contents;
