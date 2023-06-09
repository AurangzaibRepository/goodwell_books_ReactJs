import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BookInformation from './BookInformation';
import PublishInformation from './PublishInformation';
import Description from './Description';
import BuyBookLinks from './BuyBookLinks';
import Excerpt from './Excerpt';
import Praises from './Praises';
import IFrame from '../layouts/IFrame';
import AuthorInformation from './AuthorInformation';
import RelatedArticles from './RelatedArticles';
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
        <>
          <BookInformation
            title={data.title}
            caption={data.caption}
            price={data.price}
            buyLinks={data.buy_links}
          />
          <PublishInformation
            publishData={data.publish_information}
            requestLink={data.request_copy_link}
          />
          <Description description={data.description} />
          <BuyBookLinks buyLinks={data.buy_links} />
          <Excerpt link={data.excerpt_link} />
          <Praises praises={data.praises} />
          <IFrame
            src={data.trailer_link}
            title="Trailer"
            id="iframe-trailer"
          />
          <AuthorInformation authorInformation={data.author_information} />
          <RelatedArticles />
        </>
      )}
    </div>
  );
}

export default BookDetails;
