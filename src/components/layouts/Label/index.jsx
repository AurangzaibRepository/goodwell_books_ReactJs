/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

function Label({
  value,
  id,
  classIdentifier,
}) {
  return (
    <label
      id={id}
      className={classIdentifier}
    >
      {value}
    </label>
  );
}

Label.propTypes = {
  value: PropTypes.string.isRequired,
  id: PropTypes.string,
  classIdentifier: PropTypes.string,
};

export default Label;
