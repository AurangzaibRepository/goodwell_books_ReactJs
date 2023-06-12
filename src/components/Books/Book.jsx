/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

function Book({
  image,
  title,
  description,
  buyLink,
}) {
  return (
    <div className="row mt-5">
      <div className="col-md-4">
        <img src={}  
      </div>
    </div>
  );
}

Book.propTypes = {
  image: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buyLink: PropTypes.string.isRequired,
};

export default Book;
