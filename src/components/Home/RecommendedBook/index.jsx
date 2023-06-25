/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import BookInformation from './BookInformation';
import UpcomingEvents from './UpcomingEvents';

function RecommendedBook() {
  return (
    <div className="row dv-section" id="dv-recommended-book">
      <div className="col-md-6">
        <BookInformation />
      </div>
      <div className="col-md-6">
        <UpcomingEvents />
      </div>
    </div>
  );
}

export default RecommendedBook;
