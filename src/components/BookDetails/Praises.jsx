/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import Label from '../layouts/Label';

function Praises({ praises }) {
  return (
    <Label
      value="Praise"
      id="label-praises"
      classIdentifier="sub-title"
    />
  );
}

Praises.propTypes = {
  praises: PropTypes.instanceOf(Array).isRequired,
};

export default Praises;
