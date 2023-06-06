/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
              <div className="col-md-6 text-center pe-0">
                <img src={picture} alt="author" />
              </div>
              <div className="col-md-6 ps-0">
                <p>{data.description}</p>
                <label className="sub-title mt-4 mb-2">Events</label>
                <p>
                  {'Malcolm Gladwell is going on tour. '}
                  <Link to="/events">Click here</Link>
                  {' to find out where he’ll be.'}
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default About;
