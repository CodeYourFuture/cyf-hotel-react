import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function TouristInfoCards() {
  return (
    <div>
      <CardGroup>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://www.traveldrafts.com/wp-content/uploads/2020/08/Glasgow-famous-cover.jpg"
          />
          <Card.Body>
            <Card.Title>
              <h2>Glasgow</h2>
            </Card.Title>
            <Card.Text>
              <p>
                In Glasgow’s chapter of our famous things across the globe
                series, we have invited our fellow blogger Graham Grieve of “My
                Voyage Scotland” What is Glasgow famous for? This is his
                interesting response! Glasgow is the largest city in Scotland,
                often overlooked by tourists in favor of the country’s capital,
                Edinburgh. It is arguably the more authentic and welcoming city
                of the two. It is a city brimming with history, charm, and its
                very own kind of vibrant, unique culture.{" "}
              </p>
            </Card.Text>
            <Button variant="primary">
              <a
                href="https://peoplemakeglasgow.com/"
                className="btn btn-primary"
              >
                Visit Glasgow
              </a>
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6Hk46LBm_TSzVA1tTaGg5kBt7pwDUusk2bA&usqp=CAU"
          />
          <Card.Body>
            <Card.Title>
              {" "}
              <h2>Manchester</h2>
            </Card.Title>
            <Card.Text>
              <p>
                It’s a city of contrasts, with one of the UK’s most
                multicultural population, an eclectic mix of heritage and a wide
                choice of sporting teams from two world famous football clubs,
                to county cricket teams, to rugby union and rugby league teams.
              </p>
            </Card.Text>
            <Button variant="primary">
              {" "}
              <a
                href="https://www.visitmanchester.com/"
                className="btn btn-primary"
              >
                visit Manchester
              </a>
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZEoVMvhiEHBQNNN2UV3BG6HM8lyISW9F2jA&usqp=CAU"
          />
          <Card.Body>
            <Card.Title>
              {" "}
              <h2>London</h2>
            </Card.Title>
            <Card.Text>
              <p>
                London, city, capital of the United Kingdom. It is among the
                oldest of the world’s great cities—its history spanning nearly
                two millennia—and one of the most cosmopolitan. By far Britain’s
                largest metropolis, it is also the country’s economic,
                transportation, and cultural centre.
              </p>
            </Card.Text>
            <Button variant="primary">
              <a
                href="https://www.visitlondon.com/"
                className="btn btn-primary"
              >
                visit London
              </a>
            </Button>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
}

export default TouristInfoCards;
