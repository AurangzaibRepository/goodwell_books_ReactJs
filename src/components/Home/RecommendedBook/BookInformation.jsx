import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import Label from '../../layouts/Label';
import Image from '../../layouts/Image';
import Paragraph from '../../layouts/Paragraph';
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
        <div className="col-md-4">
          <Image
            src={BookCover}
            alt="Book Cover"
          />
        </div>
        <div className="col-md-7">
          <Paragraph
            classIdentifier="mb-0"
          >
            {bookData.title}
          </Paragraph>
          <Label
            value={bookData.sub_title}
            classIdentifier="mt-4 sub-title"
          />
          <Paragraph>
            {ReactHtmlParser(bookData.caption)}
          </Paragraph>
        </div>
      </div>
    </>
  );
}

export default BookInformation;
