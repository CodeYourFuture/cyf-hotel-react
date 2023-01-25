import React from "react";

const footer = probs => {
  return (
    <footer>
      <div>
        <ul>
          <li>{probs.contact[0]}</li>
          <li>{probs.contact[1]}</li>
          <li>{probs.contact[2]}</li>
        </ul>
      </div>
      <p>
        © CYF 2022 by <a href="https://www.github.com/OmidOmar">OmidOmar</a>
      </p>
    </footer>
  );
};

export default footer;
