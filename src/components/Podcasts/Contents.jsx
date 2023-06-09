/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import image1 from '../../assets/podcasts/podcast1.webp';
import image2 from '../../assets/podcasts/podcast2.webp';
import image3 from '../../assets/podcasts/podcast3.webp';
import image4 from '../../assets/podcasts/podcast4.webp';
import image5 from '../../assets/podcasts/podcast5.webp';
import image6 from '../../assets/podcasts/podcast6.webp';

function Contents({
  title,
  description,
  list,
}) {
  return (
    <>
      <label className="title mb-5">{title}</label>
      <p>{ReactHtmlParser(description)}</p>
      <div className="text-center mt-4">
        <img src={image1} alt="" />
      </div>
    </>
  );
}

Contents.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  list: PropTypes.instanceOf(Array).isRequired,
};

export default Contents;
