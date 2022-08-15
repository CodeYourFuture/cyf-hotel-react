import React from "react";

function Footer(props) {
  return (
    <div className="footer-div">
      {props.fakeContact.map((e, index) => {
        return (
          <ul className="fake-contact">
            <li key={index}>{e}</li>
          </ul>
        );
      })}
      <div className="border-top p-2 d-flex">
        <p>
          {" "}
          Created with Love by <span className="text-danger h5"> &copy;</span>
          Mohammad Alamin{" "}
        </p>
      </div>
    </div>
  );
}

export default Footer;
