/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import Label from '../layouts/Label';
import ExternalLink from '../layouts/ExternalLink';

function BuyLinks({ buyLinks }) {
  return (
    <div id="dv-buy-links" className="mt-4">
      <Label value="Buy Now:" />
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
