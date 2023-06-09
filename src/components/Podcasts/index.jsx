/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import PodcastService from '../../services/PodcastService';

function Podcasts() {
  const [data, setData] = useState();

  const getData = async () => {
    const podcastData = await PodcastService.getData();
    setData(podcastData);
  };

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
