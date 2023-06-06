import React, { useEffect, useState } from 'react';
import AboutService from '../../services/AboutService';

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
      sdfsdf
    </div>
  );
}

export default About;
