/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import Label from '../layouts/Label';

function RecommendedBooks({ links }) {
  return (
    <div className="dv-section">
      <Label
        value="Also by Malcolm Gladwell"
        clasIdentifier="title"
      />
    </div>
  );
}

RecommendedBooks.propTypes = {
  links: PropTypes.instanceOf(Array).isRequired,
};

export default RecommendedBooks;
