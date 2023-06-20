import React from 'react';
import PropTypes from 'prop-types';

function IFrame({
  src,
  title,
  id,
  classIdentifier,
}) {
  return (
    <iframe
      id={id}
      className={classIdentifier}
      src={src}
      title={title}
    />
  );
}

IFrame.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string,
  classIdentifier: PropTypes.string,
};

export default IFrame;
