/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

function BuyLinks({ buyLinks }) {
  return (
    <div id="dv-buy-links" className="mt-4">
      <label>Buy Now:</label>
    </div>
  );
}

BuyLinks.propTypes = {
  buyLinks: PropTypes.instanceOf(Array).isRequired,
};

export default BuyLinks;
