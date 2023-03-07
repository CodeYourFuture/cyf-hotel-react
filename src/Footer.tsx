import React from 'react';

type FooterType = {
  value: string[];
};

const Footer = ({ value }: FooterType) => {
  return <footer className='footer'>{value.join('  ')}</footer>;
};

export default Footer;
