import React from "react";
import "./TouristInfoCards.css";

const TouristInfoCards = () => {
  return (
    <div className="touristCardsBar">
      <div className="card">
        <img
          src="http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQsLkgnpO7TQnLYH3SvohTmj_1QnWt1MSJwHtDorwWtgjnwUdZoA_uejreL1I1R5wEJ"
          className="card-img-top"
          alt="Pic of Glasgow"
        />
        <div className="card-body">
          <h3>Glasgow</h3>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
          <a href="https://peoplemakeglasgow.com/" className="btn btn-primary">
            More Information
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSVBJjj5IPMptDI-uErNK_2_fZmS1CyAXlx1x66y1WegvU1_-BQDwA7yfkFb-f3TPmF"
          className="card-img-top"
          alt="Pic of Manchester"
        />
        <div className="card-body">
          <h3>Manchester</h3>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a
            href="https://www.visitmanchester.com/"
            className="btn btn-primary"
          >
            More Information
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcTF9OtLxnbxSpLFzyhzXERKiAbnHlG25WfRzxRTNcRiTk0lHvsOXNKH9KNAOvTWi_sS"
          className="card-img-top"
          alt="Pic of London"
        />
        <div className="card-body">
          <h3>London</h3>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a href="https://visitlondon.com/" className="btn btn-primary">
            More Information
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
