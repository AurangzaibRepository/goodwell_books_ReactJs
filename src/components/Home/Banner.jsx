/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import Image from '../layouts/Image';
import BannerImage from '../../assets/books/book1.webp';

function Banner() {
  return (
    <div className="row">
      <div className="col-md-6">
        <Image
          src={BannerImage}
          alt="Image"
        />
      </div>
      <div className="col-md-6"></div>
    </div>
  );
}

export default Banner;
