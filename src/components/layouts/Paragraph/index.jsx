/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

function Paragraph({
  id,
  classIdentifier,
  children,
}) {
  return (
    <p id={id} className={classIdentifier}>
      {children}
    </p>
  );
}

Paragraph.propTypes = {
  id: PropTypes.string,
  classIdentifier: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Paragraph.defaultProps = {
  id: '',
  classIdentifier: '',
};

export default Paragraph;
