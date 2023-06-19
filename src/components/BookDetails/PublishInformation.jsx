/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import ExternalLink from '../layouts/ExternalLink';
import PublishIcon from './PublishIcon';

function PublishInformation({ publishData, requestLink }) {
  return (
    <div className="row mt-4" id="dv-publish-information">
      <div className="col-md-4">
        <ExternalLink
          url={requestLink}
          title="READ EXCERPT"
          classIdentifier="mb-2"
        />
        <ExternalLink
          url={requestLink}
          title="REQUEST DESK/EXAM COPY"
        />
      </div>
      <div className="col-md-8 ps-4">
        {publishData.map((item) => (
          <PublishIcon
            key={item.id}
            title={item.title}
            value={item.value}
          />
        ))}
      </div>
    </div>
  );
}

PublishInformation.propTypes = {
  publishData: PropTypes.instanceOf(Array).isRequired,
  requestLink: PropTypes.string.isRequired,
};

export default PublishInformation;
