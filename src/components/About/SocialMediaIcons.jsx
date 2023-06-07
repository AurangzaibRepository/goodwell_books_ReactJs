import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faInstagram,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';

function SocialMediaIcons() {
  return (
    <>
      <FontAwesomeIcon icon={faTwitter} />
      <FontAwesomeIcon icon={faInstagram} />
      <FontAwesomeIcon icon={faFacebook} />
    </>
  );
}

export default SocialMediaIcons;
