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
          <span className="text-danger h5"> &copy;</span>Created with Love by
          Mohammad Alamin{" "}
        </p>
        <p>
          {" "}
          <span className="ml-2">/</span> Study project{" "}
        </p>
      </div>
    </div>
  );
}

export default Footer;
