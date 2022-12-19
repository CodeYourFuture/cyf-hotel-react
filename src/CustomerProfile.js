import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import CustomerRow from "./CustomerRow";
import Bookings from "./Bookings";

function CustomerProfile({ profile, isHiden }) {
  return isHiden ? null : (
    <Card>
      <h2>Customer Profile</h2>

      <div>
        <p>ID: {profile.id}</p>
        <p>Email :{profile.email}</p>
      </div>
    </Card>
  );
}

export default CustomerProfile;
