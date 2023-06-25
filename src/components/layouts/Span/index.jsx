/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

function Span({
  value,
  id,
  classIdentifier,
}) {
  return (
    <span id={id} className={classIdentifier}>
      {value}
    </span>
  );
}

Span.propTypes = {
  value: PropTypes.string.isRequired,
  id: PropTypes.string,
  classIdentifier: PropTypes.string,
};

Span.defaultProps = {
  id: '',
  classIdentifier: '',
};

export default Span;
