/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import List from './List';

function Contents({
  title,
  description,
}) {
  return (
    <>
      <label className="title mb-5">{title}</label>
      <p>{ReactHtmlParser(description)}</p>
      <List />
    </>
  );
}

Contents.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Contents;
