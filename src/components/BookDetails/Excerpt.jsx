/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import Label from '../layouts/Label';

function Excerpt({ link }) {
  return (
    <div className="text-center pt-4" id="dv-excerpt">
      <Label
        value="LISTEN TO AN EXCERPT"
        id="label-excerpt"
        classIdentifier="d-block text-center"
      />
      <iframe src={link} title="excerpt" className="mt-3" />
    </div>
  );
}

Excerpt.propTypes = {
  link: PropTypes.string.isRequired,
};

export default Excerpt;