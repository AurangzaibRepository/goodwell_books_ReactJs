import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BookInformation from './BookInformation';
import PublishInformation from './PublishInformation';
import BookInfoService from '../../services/BookInfoService';
import './style.css';

function BookDetails() {
  const [data, setData] = useState();
  const { title } = useParams();

  const getData = async () => {
    const bookData = await BookInfoService.getData();
    setData(bookData);
  };

  useEffect(() => {
    document.title = `${process.env.REACT_APP_APP_NAME} - ${title}`;
    getData();
  }, []);

  return (
    <div id="dv-book-details">
      {data
      && (
        <BookInformation
          title={data.title}
          caption={data.caption}
          price={data.price}
          buyLinks={data.buy_links}
        />
      )}
    </div>
  );
}

export default BookDetails;
