/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import {
  faCalendar,
  faPager,
  faBarcode,
} from '@fortawesome/free-solid-svg-icons';
import ExternalLink from '../layouts/ExternalLink';
import PublishIcon from './PublishIcon';

function PublishInformation({ publishData, requestLink }) {
  const iconList = [
    faCalendar,
    faPager,
    faBarcode,
  ];

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
      <div className="col-md-8 ps-4 display-flex">
        {publishData.map((item, index) => (
          <PublishIcon
            key={item.id}
            title={item.title}
            value={item.value}
            icon={iconList[index]}
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
