import React from 'react';
import Label from '../layouts/Label';

function Hardcover() {
  return (
    <div className="row dv-section">
      <div className="col-md-6">
        <Label
          value="Buy the Hardcover and eBook"
          classIdentifier="sub-title"
        />
      </div>
      <div className="col-md-6">
        <Label
          value="Buy the Audiobook"
          classIdentifier="sub-title"
        />
      </div>
    </div>
  );
}

export default Hardcover;
