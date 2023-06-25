import React from 'react';
import {
  faTwitter,
  faInstagram,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';
import Icon from './Icon';

function SocialMediaIcons() {
  return (
    <div>
      <Icon
        classSpecifier="me-2 pe-1"
        url="https://www.twitter.com"
        icon={faTwitter}
      />
      <Icon
        classSpecifier="me-2 pe-1"
        url="https://www.instagram.com"
        icon={faInstagram}
      />
      <Icon
        url="https://www.facebook.com"
        icon={faFacebook}
      />
    </div>
  );
}

export default SocialMediaIcons;
