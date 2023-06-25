import React, {
  useState,
  useEffect,
  useMemo,
} from 'react';
import HomeService from '../../services/HomeService';
import Banner from './Banner';
import Hardcover from './Hardcover';
import About from '../About';
import RecommendedBooks from './RecommendedBooks';
import RecommendedBook from './RecommendedBook';
import RecommendedBookContext from '../../contexts/RecommendedBookContext';
import './style.css';

function Home() {
  const [data, setData] = useState();
  const bookData = useMemo(() => ({ bookData: data ? data.recommended_book : null }), [data]);

  const getData = async () => {
    const homeData = await HomeService.getData();
    setData(homeData);
  };

  useEffect(() => {
    document.title = `${process.env.REACT_APP_APP_NAME} - Home`;
    getData();
  }, []);

  return (
    <div id="dv-home">
      {data
      && (
        <>
          <Banner
            title={data.Banner.title}
            subTitle={data.Banner.sub_title}
            caption={data.Banner.caption}
          />
          <Hardcover />
          <div className="dv-section">
            <About />
          </div>
          <RecommendedBooks links={data.recommended_links} />
          <RecommendedBookContext.Provider value={bookData}>
            <RecommendedBook />
          </RecommendedBookContext.Provider>
        </>
      )}
    </div>
  );
}

export default Home;
