import React from "react";
import Card from "../UI/Card";
import classes from "./CustomerProfile.module.css";

const CustomerProfile = (props) => {
  return (
    <Card className={classes.customProfile}>
      <p className="text-center mb-3">
        <span className="text-primary font-weight-bold">More Information </span>
        (Click show profile)
      </p>
      <div className={classes.customerItems}>
        {props.customerID && (
          <p>
            {" "}
            <span className="text-primary font-weight-bold">
              Customer_ID :{" "}
            </span>{" "}
            {props.customerID}
          </p>
        )}
        {props.customerEmail && (
          <p>
            <span className="text-primary font-weight-bold">
              Customer_Email:{" "}
            </span>{" "}
            {props.customerEmail}
          </p>
        )}
        {props.customerPhone && (
          <p>
            <span className="text-primary font-weight-bold">
              Customer_Phone:{" "}
            </span>{" "}
            {props.customerPhone}
          </p>
        )}
        {props.customerVIP && (
          <p>
            <span className="text-primary font-weight-bold">
              Customer_VIP :{" "}
            </span>
            true
          </p>
        )}
      </div>
    </Card>
  );
};

export default CustomerProfile;
