import React, { useState } from "react";

const Table = props => {
  return (
    <table className="table">
      <THead labels={props.labels} />
      <TBody data={props.data} />
    </table>
  );
};
export default Table;

const THead = props => {
  return (
    <thead className="thead-dark">{<LabelsRow labels={props.labels} />}</thead>
  );
};

const LabelsRow = props => {
  return (
    <tr>
      {props.labels.map((label, index) => (
        <Label key={index} label={label} />
      ))}
    </tr>
  );
};

const Label = props => {
  return <th>{props.label}</th>;
};

const TBody = props => {
  return (
    <tbody>
      {props.data.map((values, index) => {
        return <DataRow key={index} values={values} />;
      })}
    </tbody>
  );
};

const DataRow = props => {
  // highlight/unhighlight a table row when it is clicked
  const [className, setClassName] = useState("");
  const changeColour = () => {
    if (className === "") {
      setClassName("selected");
      return;
    }
    setClassName("");
  };
  return (
    <tr className={className} onClick={changeColour}>
      {Object.values(props.values).map((value, index) => (
        <Data key={index} value={value} />
      ))}
    </tr>
  );
};

const Data = props => {
  return <td>{props.value}</td>;
};
