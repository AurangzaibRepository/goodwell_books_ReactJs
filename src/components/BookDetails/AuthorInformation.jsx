/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import Image from '../layouts/Image';
import Label from '../layouts/Label';
import Paragraph from '../layouts/Paragraph';
import picture from '../../assets/about/sloman.webp';

function AuthorInformation({ authorInformation }) {
  return (
    <div className="row" id="dv-author-information">
      <div className="col-md-4 text-center">
        <Image
          src={picture}
          alt="author"
        />
      </div>
      <div className="col-md-8 ps-0">
        <Label
          value={`MEET THE AUTHOR: ${authorInformation.name}`}
          classIdentifier="sub-title"
        />
        <Paragraph classIdentifier="mt-3">
          {ReactHtmlParser(authorInformation.description)}
        </Paragraph>
        <Label
          value="AUTHOR ARTICLES"
          id="label-article"
          classIdentifier="mt-5 pt-2 d-block"
        />
        <Paragraph classIdentifier="mt-3">
          {ReactHtmlParser(authorInformation.articles)}
        </Paragraph>
      </div>
    </div>
  );
}

AuthorInformation.propTypes = {
  authorInformation: PropTypes.objectOf(PropTypes.shape).isRequired,
};

export default AuthorInformation;
