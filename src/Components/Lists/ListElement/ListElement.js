import React from "react";

const ListElement = props => {
  // return <li />;
  return props.addressArray.map((item, index) => {
    return <li key={index}>{item}</li>;
  });
};

export default ListElement;
