/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import Label from '../layouts/Label';
import Span from '../layouts/Span';
import IFrame from '../layouts/IFrame';

function Excerpt({ link }) {
  return (
    <div className="text-center pt-4" id="dv-excerpt">
      <Label
        value="LISTEN TO AN EXCERPT"
        id="label-excerpt"
        classIdentifier="d-block text-center"
      />
      <IFrame
        src={link}
        title="excerpt"
        classIdentifier="mt-3"
      />
      <Span
        value="TALING TO STRANGERS"
        classIdentifier="d-block"
      />
    </div>
  );
}

Excerpt.propTypes = {
  link: PropTypes.string.isRequired,
};

export default Excerpt;
