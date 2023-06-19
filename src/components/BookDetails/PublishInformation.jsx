/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import ExternalLink from '../layouts/ExternalLink';

function PublishInformation({ publishData, requestLink }) {
  return (
    <div className="row">
      <div className="col-md-4">
        <ExternalLink
          url={requestLink}
          title="READ EXCERPT"
        />
        <ExternalLink
          url={requestLink}
          title="REQUEST DESK/EXAM COPY"
        />
      </div>
      <div className="col-md-8 ps-4">
      </div>
    </div>
  );
}

PublishInformation.propTypes = {
  publishData: PropTypes.objectOf(PropTypes.shape).isRequired,
  requestLink: PropTypes.string.isRequired,
};

export default PublishInformation;
