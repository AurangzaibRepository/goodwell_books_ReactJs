/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';

function Podcasts() {
  useEffect(() => {
    document.title = `${process.env.REACT_APP_APP_NAME} - Podcasts`;
  });

  return (
    <div id="dv-podcasts">
      <label className="title mb-5">Podcasts</label>
    </div>
  );
}

export default Podcasts;
