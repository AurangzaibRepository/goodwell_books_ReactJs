/* eslint-disable jsx-a11y/label-has-associated-control */
import React, {
  useEffect,
  useState,
  useMemo,
} from 'react';
import PodcastService from '../../services/PodcastService';
import Contents from './Contents';
import PodcastContext from '../../contexts/PodcastContext';
import './style.css';

function Podcasts() {
  const [data, setData] = useState();

  const listItems = useMemo(() => ({ items: data ? data.list : [] }), [data]);

  const getData = async () => {
    const podcastData = await PodcastService.getData();
    setData(podcastData);
  };

  useEffect(() => {
    document.title = `${process.env.REACT_APP_APP_NAME} - Podcasts`;
    getData();
  }, []);

  return (
    <div id="dv-podcasts">
      {data
      && (
        <PodcastContext.Provider value={listItems}>
          <Contents
            title={data.title}
            description={data.description}
          />
        </PodcastContext.Provider>
      )}
    </div>
  );
}

export default Podcasts;
