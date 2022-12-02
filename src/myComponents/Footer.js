import React from "react";

import "../App.css";
export default function Footer({ footer }) {
  return (
    <div className="fixed-bottom footerContaner">
      <ul className="blockquote-footer footer">
        {footer.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}
