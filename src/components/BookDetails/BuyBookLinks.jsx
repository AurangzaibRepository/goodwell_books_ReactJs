/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import Label from '../layouts/Label';

function BuyBookLinks({ buyLinks }) {
  return (
    <div id="dv-buy-book-links">
      <Label
        value="Buy the Book"
        id="label-buy-book"
        classIdentifier="sub-title"
      />
    </div>
  );
}

BuyBookLinks.propTypes = {
  buyLinks: PropTypes.instanceOf(Array).isRequired,
};

export default BuyBookLinks;
