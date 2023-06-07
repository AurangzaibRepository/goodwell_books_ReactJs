import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faInstagram,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';

function SocialMediaIcons() {
  return (
    <div>
      <FontAwesomeIcon icon={faTwitter} className="me-2 pe-1" />
      <FontAwesomeIcon icon={faInstagram} className="me-2 pe-1" />
      <FontAwesomeIcon icon={faFacebook} />
    </div>
  );
}

export default SocialMediaIcons;
