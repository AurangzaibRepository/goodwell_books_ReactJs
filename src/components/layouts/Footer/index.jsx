import React, { useEffect, useState } from 'react';
import ExternalLink from '../ExternalLink';
import Image from '../Image';
import FooterService from '../../../services/FooterService';
import footerLogo from '../../../assets/footer-logo.png';
import './style.css';

function Footer() {
  const [data, setData] = useState();

  const getData = async () => {
    const footerData = await FooterService.getData();
    setData(footerData.links);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div id="dv-footer" className="text-center">
      <img src={footerLogo} alt="logo" />
      <p>
        {'© 2023 Hachette Book Group | '}
        {data
        && (
          data.map((item) => (
            <ExternalLink
              key={item.id}
              url={item.url}
              title={item.title}
            />
          ))
        )}
      </p>
    </div>
  );
}

export default Footer;
