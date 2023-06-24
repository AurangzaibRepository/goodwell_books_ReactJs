import React from 'react';
import Label from '../../layouts/Label';
import Image from '../../layouts/Image';
import RecommendedBookContext from '../../../contexts/RecommendedBookContext';
import BookCover from '../../../assets/books/book2.webp';

function BookInformation() {
  const { bookData } = React.useContext(RecommendedBookContext);

  return (
    <>
      <Label
        value={bookData.title}
        classIdentifier="sub-title"
      />
      <div className="row mt-3">
        <div className="col-md-6">
          <Image
            src={BookCover}
            alt="Book Cover"
          />
        </div>
        <div className="col-md-6"></div>
      </div>
    </>
  );
}

export default BookInformation;
