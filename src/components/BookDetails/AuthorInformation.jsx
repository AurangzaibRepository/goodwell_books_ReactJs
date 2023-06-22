/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import Image from '../layouts/Image';

function AuthorInformation({ authorInformation }) {
  return (
    <div className="row" id="dv-author-information">
      <div className="col-md-6"></div>
      <div className="col-md-6"></div>
    </div>
  );
}

AuthorInformation.propTypes = {
  authorInformation: PropTypes.objectOf(PropTypes.shape).isRequired,
};

export default AuthorInformation;
