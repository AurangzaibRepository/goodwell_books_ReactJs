import React, { useEffect, useState } from 'react';
import FooterService from '../../../services/FooterService';
import footerLogo from '../../../assets/footer-logo.png';
import './style.css';

function Footer() {
  return (
    <div id="dv-footer" className="text-center">
      <img src={footerLogo} alt="logo" />
      <p>
        {'© 2023 Hachette Book Group | '}
        <a href="https://www.hachettebookgroup.com/terms-and-policies/terms-of-use/?_ga=2.223350302.408625558.1686233794-1848420058.1686233788">
          {'Terms of Use | '}
        </a>
        <a href="https://www.hachettebookgroup.com/terms-and-policies/privacy-policy/">
          {'Privacy Policy | '}
        </a>
        <a href="https://www.hachettebookgroup.biz/contact-us/">
          {'Contact Us | '}
        </a>
        <a href="https://hbgusa.zendesk.com/hc/en-us/articles/360047685472-HBG-CCPA-Privacy-Rights-Tool">
          Do Not Steal My Personal Information
        </a>
      </p>
    </div>
  );
}

export default Footer;
