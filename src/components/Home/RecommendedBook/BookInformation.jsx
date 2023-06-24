import React from 'react';
import Label from '../../layouts/Label';
import RecommendedBookContext from '../../../contexts/RecommendedBookContext';

function BookInformation() {
  const { bookData } = React.useContext(RecommendedBookContext);

  return (
    <>
      <Label
        value={bookData.title}
        classIdentifier="sub-title"
      />
      <div className="row mt-3">
        <div className="col-md-6"></div>
        <div className="col-md-6"></div>
      </div>
    </>
  );
}

export default BookInformation;
