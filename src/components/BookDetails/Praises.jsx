/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import Label from '../layouts/Label';
import Paragraph from '../layouts/Paragraph';

function Praises({ praises }) {
  return (
    <>
      <Label
        value="Praise"
        id="label-praises"
        classIdentifier="sub-title pt-3"
      />
      {praises.map((item) => (
        <Paragraph
          key={item.id}
          classIdentifier="mb-4 pb-2"
        >
          {'"'}
          {ReactHtmlParser(item.message)}
          {' - '}
          {ReactHtmlParser(item.author)}
          {'"'}
        </Paragraph>
      ))}
    </>
  );
}

Praises.propTypes = {
  praises: PropTypes.instanceOf(Array).isRequired,
};

export default Praises;
