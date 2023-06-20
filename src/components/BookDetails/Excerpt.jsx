/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import Label from '../layouts/Label';

function Excerpt({ link }) {
  return (
    <Label
      value="LISTEN TO AN EXCERPT"
      id="label-excerpt"
    />
  );
}

Excerpt.propTypes = {
  link: PropTypes.string.isRequired,
};

export default Excerpt;
