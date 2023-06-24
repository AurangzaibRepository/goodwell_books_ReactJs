import React from 'react';
import Label from '../../layouts/Label';
import RecommendedBookContext from '../../../contexts/RecommendedBookContext';

function BookInformation() {
  const { bookData } = React.useContext(RecommendedBookContext);

  return (
    <Label
      value={bookData.title}
      classIdentifier="sub-title"
    />
  );
}

export default BookInformation;
