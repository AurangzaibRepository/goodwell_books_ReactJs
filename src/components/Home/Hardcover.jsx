import React from 'react';
import Label from '../layouts/Label';
import ExternalLink from '../layouts/ExternalLink';

function Hardcover() {
  return (
    <div className="row dv-section" id="dv-hardcover">
      <div className="col-md-6">
        <Label
          value="Buy the Hardcover and eBook"
          classIdentifier="sub-title"
        />
        <ExternalLink
          url="#"
          title="EBOOK"
          classIdentifier="mt-5 lnk-home"
        />
        <ExternalLink
          url="#"
          title="HARDCOVER"
          classIdentifier="mt-4 lnk-home"
        />
      </div>
      <div className="col-md-6">
        <Label
          value="Buy the Audiobook"
          classIdentifier="sub-title"
        />
        <ExternalLink
          url="#"
          title="PUSHKIN AUDIOBOOK"
          classIdentifier="mt-5 lnk-home"
        />
      </div>
    </div>
  );
}

export default Hardcover;
