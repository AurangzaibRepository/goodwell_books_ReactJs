/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Image1 from '../../assets/books/related_article1.webp';
import Image2 from '../../assets/books/related_article2.webp';
import Image3 from '../../assets/books/related_article3.webp';
import Image4 from '../../assets/books/related_article4.webp';

function RelatedArticles() {
  const imageList = [
    Image1,
    Image2,
    Image3,
    Image4,
  ];

  return (
    <Carousel>

    </Carousel>
  );
}

export default RelatedArticles;
