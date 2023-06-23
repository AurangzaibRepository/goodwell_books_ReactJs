/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Image from '../layouts/Image';
import Label from '../layouts/Label';
import Paragraph from '../layouts/Paragraph';
import SocialMediaIcons from './SocialMediaIcons';
import picture from '../../assets/about/sloman.webp';

function Content({ title, description }) {
  return (
    <>
      <label className="title mb-5">{title}</label>
      <div id="dv-contents">
        <div className="row">
          <div className="col-md-6 text-center pe-0">
            <Image
              src={picture}
              alt="author"
            />
          </div>
          <div className="col-md-6 ps-0">
            <p className="mb-1 pb-1">{description}</p>
            <SocialMediaIcons />
            <br />
            <Label
              value="Events"
              classIdentifier="sub-title mt-4 mb-2"
            />
            <Paragraph>
              {'Malcolm Gladwell is going on tour. '}
              <Link to="/events">Click here</Link>
              {' to find out where he’ll be.'}
            </Paragraph>
          </div>
        </div>
      </div>
    </>
  );
}

Content.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Content;
