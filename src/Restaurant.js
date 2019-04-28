import React from "react";

import Orders from "./Orders";

// ./means import from a file.

class Restaurant extends React.Component {
  render() {
    return (
      <div>
        <h3>Restaurant Orders</h3>
        <Orders orderType="Pizzas" />
        <Orders orderType="Salads" />
      </div>
    );
  }
  //everything tjat happens in orders apply that to salads now too.

  // var pizzaOrder = {
  //   size: "large",
  //   number:
  // }

  // orderPizzas({
  //   size: "large",
  //   number: 3
  // })

  //this will increment the count by one.
  //if you want to declare a function inside a class you only need to write the name of the function
  //better to use arrow function inside a class.
  //oustide the constructor you dont need to define datatype for a var.
  //always use const/var/let when you use arrow functions to define the data type.
  //one state per component.
  //setstate is a function that sets it to whatever you input ().
}

export default Restaurant;

//state: if you want something to be dynamic, its basically storage like a db. if you want to update the ui.
//setstate is adding to the db outside of the function.
//.this is only used inside a class.
//state only exists in line 3 conditions.
//add order()the name gicen to ref the function{this.addOrder} =  i can change what is assigned to it and the props would change it in other components where it is used.

// the below functions both do the same thing.

// function say(anything) {
//   return "hello " + anything
// }

// var say = (name) => {
//   return 'hello ' + name
// }
