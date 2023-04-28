import React from "react";
import Heading from "../components/Heading";
import Card from "react-bootstrap/Card";
import Footer from "../components/Footer";
import Imgs1 from "../images/images.jpeg";
import Imgs2 from "../images/images4.jpg";
import Imgs3 from "../images/images5.jpeg";
import Welcome from "../components/Welcome";

const Offers = () => {
  return (
    <div>
      <Heading />
      <Welcome />
      <div className="offers">
        <br />
        <div className="city">
          <Card className="offer-card">
            <span className="span">
              <strong>here Glasgow</strong>
            </span>
            <Card.Img variant="top" src={Imgs1} />
            <Card.Body>
              <Card.Text>
                fellow the link and get your <a href="/booking">Booking</a>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <br />
        <div className="city">
          <Card className="offer-card">
            <span className="span">
              <strong>Here , London</strong>
            </span>
            <Card.Img variant="bottom" src={Imgs2} />
            <Card.Body>
              <Card.Text>
                fellow the link and get your<a href="/booking">booking</a>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <br />
        <div className="city">
          <Card className="offer-card">
            <span className="span">
              <strong>here Manchester</strong>
            </span>
            <Card.Img variant="bottom" src={Imgs3} />
            <Card.Body>
              <Card.Text>
                fellow the link and get your<a href="/booking">booking</a>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Offers;
