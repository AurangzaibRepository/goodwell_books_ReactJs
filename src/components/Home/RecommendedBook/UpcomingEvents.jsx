import React from 'react';
import Label from '../../layouts/Label';
import Paragraph from '../../layouts/Paragraph';

function UpcomingEvents() {
  return (
    <>
      <Label
        value="Upcoming Events"
        classIdentifier="sub-title"
      />
      <Paragraph classIdentifier="mt-3">
        Please check back soon for future events.
      </Paragraph>
    </>
  );
}

export default UpcomingEvents;
