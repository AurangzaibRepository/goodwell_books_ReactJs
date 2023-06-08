import React, { useEffect } from 'react';

function Podcasts() {
  useEffect(() => {
    document.title = `${process.env.REACT_APP_APP_NAME} - Podcasts`;
  });

  return ();
}

export default Podcasts;
