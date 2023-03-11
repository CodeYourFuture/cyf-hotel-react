import React from 'react'
import { ImGithub } from 'react-icons/im';

import "./footer.css"


function Footer({ address }) {
  return (
    <footer className="footer">
      <ul>
        {address.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className='footerGit'>
        <a href='https://github.com/hadipournigjeh' target="_blank">
        <ImGithub className="imgGit"  size={28}/> 
        </a>
        <a className="aTag" href='https://github.com/hadipournigjeh' target="_blank">:  Hadi A.P</a>
      </div>
    </footer>
  );
}

export default Footer