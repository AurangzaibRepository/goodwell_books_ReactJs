/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import AboutService from '../../services/AboutService';
import picture from '../../assets/about/sloman.webp';
import './style.css';

function About() {
  const [data, setData] = useState();

  const getData = async () => {
    const aboutData = await AboutService.getData();
    setData(aboutData);
  };

  useEffect(() => {
    document.title = `${process.env.REACT_APP_APP_NAME} - About`;
    getData();
  });

  return (
    <div id="dv-about">
      {data
      && (
        <>
          <label className="title mb-5">{data.title}</label>
          <div id="dv-contents">
            <div className="row">
              <div className="col-md-6 text-center">
                <img src={picture} alt="author" />
              </div>
              <div className="col-md-6">
                <p>{data.description}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default About;
