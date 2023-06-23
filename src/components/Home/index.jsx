import React, { useState, useEffect } from 'react';
import HomeService from '../../services/HomeService';
import Banner from './Banner';

function Home() {
  const [data, setData] = useState();

  const getData = async () => {
    const homeData = await HomeService.getData();
    setData(homeData);
  };

  useEffect(() => {
    document.title = `${process.env.REACT_APP_APP_NAME} - Home`;
    getData();
  }, []);

  return (
    <div>
      {data
      && (
        <Banner
          title={data.Banner.title}
          subTitle={data.Banner.subTitle}
          caption={data.Banner.caption}
        />
      )}
    </div>
  );
}

export default Home;
