/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import Image from '../layouts/Image';
import Label from '../layouts/Label';
import picture from '../../assets/about/sloman.webp';

function AuthorInformation({ authorInformation }) {
  return (
    <div className="row" id="dv-author-information">
      <div className="col-md-4">
        <Image
          src={picture}
          alt="author"
        />
      </div>
      <div className="col-md-8">

      </div>
    </div>
  );
}

AuthorInformation.propTypes = {
  authorInformation: PropTypes.objectOf(PropTypes.shape).isRequired,
};

export default AuthorInformation;
