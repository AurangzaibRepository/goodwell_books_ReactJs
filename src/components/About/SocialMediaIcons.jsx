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
        url="https://www.twitter.com"
        icon={faTwitter}
      />
      <Icon
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
