import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BookInformation from './BookInformation';
import BookInfoService from '../../services/BookInfoService';

function BookDetails() {
  const [data, setData] = useState();
  const { title } = useParams();

  const getData = async () => {
    const bookDetails = await BookInfoService.getData();
    setData(bookDetails);
  };

  useEffect(() => {
    document.title = `${process.env.REACT_APP_APP_NAME} - ${title}`;
    getData();
  });

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
