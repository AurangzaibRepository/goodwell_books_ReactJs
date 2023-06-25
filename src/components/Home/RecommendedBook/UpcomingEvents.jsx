import React from 'react';
import Label from '../../layouts/Label';
import Paragraph from '../../layouts/Paragraph';
import ExternalLink from '../../layouts/ExternalLink';

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
      <ExternalLink
        url="#"
        title="SEE ALL DATES"
        classIdentifier="lnk-home mt-4"
      />
    </>
  );
}

export default UpcomingEvents;
