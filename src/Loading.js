import React from "react";
import "./CustomerProfile.css";
import LoadingImage from "./images/loading.gif";

const Loading = () => {
  return (
    <div className="row">
      <div className="col-12">
        <center>
          <img src={LoadingImage} alt="customer data is loading ..." />
        </center>
      </div>
    </div>
  );
};

export default Loading;
