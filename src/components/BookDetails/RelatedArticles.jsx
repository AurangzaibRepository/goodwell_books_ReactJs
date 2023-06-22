/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Image from '../layouts/Image';
import Label from '../layouts/Label';
import Image1 from '../../assets/books/related_article1.webp';
import Image2 from '../../assets/books/related_article2.webp';
import Image3 from '../../assets/books/related_article3.webp';
import Image4 from '../../assets/books/related_article4.webp';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function RelatedArticles() {
  const imageList = [
    {
      id: 1,
      image: Image1,
    },
    {
      id: 2,
      image: Image2,
    },
    {
      id: 3,
      image: Image3,
    },
    {
      id: 4,
      image: Image4,
    },
  ];

  return (
    <>
      <Label
        value="Related Articles"
        id="label-related-articles"
        classIdentifier="pb-2"
      />
      <Carousel
        showStatus={false}
        autoPlay
        infiniteLoop
      >
        {imageList.map((item) => (
          <div key={item.id}>
            <Image
              src={item.image}
              alt="Image"
            />
          </div>
        ))}
      </Carousel>
    </>
  );
}

export default RelatedArticles;
