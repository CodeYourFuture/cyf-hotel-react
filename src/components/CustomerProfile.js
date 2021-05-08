import React, { useState, useEffect } from "react";
import { Collapse, Button, CardBody, Card } from "reactstrap";
import CustomerText from "./CustomerText";
import "./CustomerProfile.css";

function CustomerProfile({ bookingID }) {
  const URL = `https://cyf-react.glitch.me/customers/${bookingID}`;
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    fetch(URL)
      .then(res => res.json())
      .then(data => {
        setProfileData(data);
      });
  }, [bookingID, URL]);

  if (profileData) {
    return (
      <div>
        <Button color="primary" onClick={toggle} block>
          Profile
        </Button>
        <div className="card-body-wrapper">
          <Collapse isOpen={isOpen}>
            <Card className="card-body-wrapper">
              <CardBody>
                <CustomerText profileData={profileData} />
              </CardBody>
            </Card>
          </Collapse>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default CustomerProfile;

/*
THIS IS FOR MY OWN FUTURE REFERENCE
Ternary operator option for the above code
return (
  <div>
    <Button color="primary" onClick={toggle} style={{ marginBottom: "1rem" }}>
      Profile
    </Button>
    <Collapse isOpen={isOpen}>
      <Card>
        <CardBody>Customer .</CardBody>
      </Card>
    </Collapse>
  </div>
);
*/
