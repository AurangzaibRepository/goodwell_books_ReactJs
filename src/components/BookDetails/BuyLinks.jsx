/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import ExternalLink from '../layouts/ExternalLink';

function BuyLinks({ buyLinks }) {
  return (
    <div id="dv-buy-links" className="mt-4">
      <label>Buy Now:</label>
      {buyLinks.map((item) => (
        <ExternalLink
          key={item.id}
          title={item.title}
          url={item.link}
        />
      ))}
    </div>
  );
}

BuyLinks.propTypes = {
  buyLinks: PropTypes.instanceOf(Array).isRequired,
};

export default BuyLinks;
