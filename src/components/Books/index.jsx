import React, { useEffect, useState } from 'react';
import BooksService from '../../services/BooksService';

function Books() {
  const [data, setData] = useState();

  const getData = async () => {
    const bookData = await BooksService.getData();
    setData(bookData);
  };

  return (
    <div id="dv-books">

    </div>
  );
}

export default Books;
