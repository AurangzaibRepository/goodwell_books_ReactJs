/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import Label from '../layouts/Label';
import List from './List';

function Contents({
  title,
  description,
}) {
  return (
    <>
      <Label
        value={title}
        classIdentifier="title mb-5"
      />
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
