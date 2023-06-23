/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import Label from '../layouts/Label';
import Span from '../layouts/Span';
import Image from '../layouts/Image';
import ExternalLink from '../layouts/ExternalLink';
import BannerImage from '../../assets/books/book1.webp';

function Banner({
  title,
  subTitle,
  caption,
}) {
  return (
    <div className="row" id="dv-banner">
      <div className="col-md-6 text-center">
        <Image
          src={BannerImage}
          alt="Image"
          id="image-banner"
        />
      </div>
      <div className="col-md-6 d-flex align-items-center">
        <div>
          <Label
            value={title}
            id="label-title"
            classIdentifier="d-block"
          />
          <Label
            value={subTitle}
            id="label-subtitle"
            classIdentifier="d-block"
          />
          <Span
            value={caption}
          />
          <ExternalLink
            url="#"
            title="LEARN MORE"
          />
        </div>
      </div>
    </div>
  );
}

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
};

export default Banner;
