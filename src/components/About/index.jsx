import React, { useEffect } from 'react';

function About() {
  useEffect(() => {
    document.title = `${process.env.REACT_APP_APP_NAME} - About`;
  });

  return (
    <div id="dv-about">
      sdfsdf
    </div>
  );
}

export default About;
