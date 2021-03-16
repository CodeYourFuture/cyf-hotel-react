import React from "react";

import ListElement from "./ListElement/ListElement";

const UnorderedList = props => {
  return <ul>{<ListElement addressArray={props.addressArray} />}</ul>;
};

export default UnorderedList;
