
import React from 'react';
import PropTypes from 'prop-types';

const defaultLogoData = [
  {
    href: '#',
    src: '../images/PIC1.png',
    alt: 'logo'
  }
];

const Logo = ({ logoItems }) => {
  const logos = logoItems || defaultLogoData;

  return (
    <div className="container_main"> 
      {logos.map((item, index) => (
        <a className='w-[200px] h-[70px] block' key={index} href={item.href}>
          <img src={item.src} alt={item.alt} />
        </a>
      ))}
    </div>
  );
};

Logo.propTypes = {
  logoItems: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ),
};

export default Logo;
