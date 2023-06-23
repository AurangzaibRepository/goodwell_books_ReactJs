import React, { useState, useEffect } from 'react';

function Home() {
  useEffect(() => {
    document.title = `${process.env.REACT_APP_APP_NAME} - Home`;
  });

  return ();
}

export default Home;
