import React from 'react'

import "./footer.css"


function Footer({ address }) {
  return (
    <footer className="footer">
      <ul>
        {address.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </footer>
  );
}

export default Footer