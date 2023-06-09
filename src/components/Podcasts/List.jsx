/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import image1 from '../../assets/podcasts/podcast1.webp';
import image2 from '../../assets/podcasts/podcast2.webp';
import image3 from '../../assets/podcasts/podcast3.webp';
import image4 from '../../assets/podcasts/podcast4.webp';
import image5 from '../../assets/podcasts/podcast5.webp';
import image6 from '../../assets/podcasts/podcast6.webp';

function List() {
  const imageList = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
  ];

  return (
    <>
      {list.map((item, index) => (
        <div className="dv-list-item mt-5 pt-4" key={item.id}>
          <div className="dv-image text-center">
            <img src={imageList[index]} alt="Podcast" />
          </div>
          <div className="mt-4">
            <label className="sub-title">{item.title}</label>
            <br />
            {item.caption !== ''
            && (
            <label className="caption">{item.caption}</label>
            )}
            <p>{item.description}</p>
            <a href={item.link}>Learn More</a>
          </div>
        </div>
      ))}
    </>
  );
}

export default List;