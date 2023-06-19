/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import Label from '../layouts/Label';

function Description({ description }) {
  return (
    <>
      <Label
        id="label-description"
        value="Description"
      />
      <p>
        {description}
      </p>
    </>
  );
}

Description.propTypes = {
  description: PropTypes.string.isRequired,
};

export default Description;
