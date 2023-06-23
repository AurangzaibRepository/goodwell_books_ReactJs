/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import ExternalLink from '../layouts/ExternalLink';
import Image from '../layouts/Image';

function BookBox({ url, src }) {
  return (
    <ExternalLink
      url={url}
    >
      <Image
        src={src}
        alt="Image"
      />
    </ExternalLink>
  );
}

BookBox.propTypes = {
  url: PropTypes.string.isRequired,
  src: PropTypes.node.isRequired,
};

export default BookBox;
