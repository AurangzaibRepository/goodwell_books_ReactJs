/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import Label from '../layouts/Label';
import ExternalLink from '../layouts/ExternalLink';

function BuyBookLinks({ buyLinks }) {
  return (
    <div id="dv-buy-book-links">
      <Label
        value="Buy the Book"
        id="label-buy-book"
        classIdentifier="sub-title mb-0"
      />
      <div className="row d-flex justify-content-center">
        {buyLinks.map((item) => (
          <div className="col-md-4 text-center mt-4 pt-3" key={item.id}>
            <ExternalLink
              url={item.link}
              title={item.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

BuyBookLinks.propTypes = {
  buyLinks: PropTypes.instanceOf(Array).isRequired,
};

export default BuyBookLinks;
