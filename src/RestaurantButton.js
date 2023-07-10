import React from "react";

const RestaurantButton = (props) => {
  return (
    <div>
      <button onClick={props.orderOne} className="btn btn-primary">
        Add
      </button>
    </div>
  );
};

export default RestaurantButton;

// It is a React component called RestaurantButton. It imports the React library. The RestaurantButton component is a
// functional component defined as an arrow function that takes in props as a parameter. It returns JSX representing
// the structure and content of the component's output. The JSX returned by the RestaurantButton component consists of
//  a <div> element containing a <button> element. The <button> element has an onClick event handler that is set to the
// orderOne function passed as a prop. This means that when the button is clicked, the orderOne function will be called.
// The <button> element has the className "btn btn-primary" which suggests that it is styled using Bootstrap classes to
// give it a specific appearance. The text "Add" is the content of the button, which is displayed as the label on the
// button. The RestaurantButton component is exported as the default export, allowing it to be imported and used in
// other files. Other files can import the RestaurantButton component using import RestaurantButton from
// "./RestaurantButton.js", assuming the file is in the same directory.
