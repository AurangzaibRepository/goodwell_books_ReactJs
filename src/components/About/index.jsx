import React, { useEffect, useState } from 'react';

function About() {
  const [data, setData] = useState();

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
