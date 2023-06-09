/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

function Contents({
  title,
  description,
  list,
}) {
  return (
    <>
      <label className="title mb-5">{title}</label>
      <p>{description}</p>
    </>
  );
}

Contents.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  list: PropTypes.instanceOf(Array).isRequired,
};

export default Contents;
