import React from "react";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import "./Card.css";

// import CityInfo from "./data/cityInfo.json";

const Card = ({ cityInfo }) => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col className="display">
            <div className="card">
              {cityInfo.map((city, key) => {
                return (
                  <img
                    key={key}
                    src={city.image}
                    className="card-img-top"
                    alt=""
                  />
                );
              })}
            </div>
          </Col>
        </Row>
        <div>
          <div className="card-body" className="display">
            {cityInfo.map((city, key) => {
              return (
                <a key={key} href={city.link} className="btn btn-primary">
                  Visit {city.name}
                </a>
              );
            })}
          </div>
        </div>
        {/* <a href={city.link} className="btn btn-primary">
            Visit {city.name}
          </a>
        </div>
      </div>
      <div>
        <span>{cityInfo.description}</span>
      </div> */}
      </Container>
    </div>
  );
};
export default Card;
