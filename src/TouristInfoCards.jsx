import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function TouristInfoCards() {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Glasgow</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">More Information</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default TouristInfoCards;
