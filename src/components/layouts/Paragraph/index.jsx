import React from 'react';
import PropTypes from 'prop-types';

function Paragraph({
  id,
  classIdentifier,
  children,
}) {
  return ();
}

Paragraph.propTypes = {
  id: PropTypes.string,
  classIdentifier: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Paragraph;
