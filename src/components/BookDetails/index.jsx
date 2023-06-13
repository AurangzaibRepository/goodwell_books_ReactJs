import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BookInfoService from '../../services/BookInfoService';
import Image from '../../assets/books/book2.webp';

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
      <div className="row">
        <div className="col-md-4">
          <img src={Image} alt="Book" />
        </div>
        <div className="col-md-8 ps-4">
          sdf
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
