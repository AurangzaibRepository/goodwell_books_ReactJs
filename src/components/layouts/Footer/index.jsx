import React from 'react';
import footerLogo from '../../../assets/footer-logo.png';
import './style.css';

function Footer() {
  return (
    <div id="dv-footer" className="text-center">
      <img src={footerLogo} alt="logo" />
    </div>
  );
}

export default Footer;
