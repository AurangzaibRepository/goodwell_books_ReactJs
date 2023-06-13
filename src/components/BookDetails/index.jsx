import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BookInfoService from '../../services/BookInfoService';

function BookDetails() {
  const [data, setData] = useState();

  const getData = async () => {
    const bookDetails = await BookInfoService.getData();
    setData(bookDetails);
  };

  useEffect(() => {
    document.title = '';
    getData();
  });

  return (
    <span>asdas</span>
  );
}

export default BookDetails;
