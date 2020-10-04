import React from "react";
// import Search from "./Search";
import Restaurant from "./Restaurant.js";
import TouristInfoCards from "./TouristInfoCards.js";
import Bookings from "./Bookings";
import Footer from "./Footer.js";
import "./App.css";
import Heading from "./Heading";
// import CreateForm from "./CreateForm.js"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    // check it out: we get the evt.target.name (which will be either "email" or "password")
    // and use it to target the key on our `state` object with the same name, using bracket syntax
    this.setState({ [evt.target.name]: evt.target.value });
  }

  render() {
    return (
      <div className="App">
        <Heading />
        <header className="App-header">CYF Hotel..</header>
        <TouristInfoCards />
        <Bookings />
        <Restaurant />
        <div>
          <Footer />
        </div>
        <form>
          <label>Email</label>
          <input type="text" name="email" onChange={this.handleChange} />

          <label>Password</label>
          <input type="password" name="password" onChange={this.handleChange} />
        </form>
      </div>
    );
  }
}
//   return (
//     <div className="App">
//       <Heading />
//       <header className="App-header">CYF Hotel..</header>
//       <TouristInfoCards />
//       <Bookings />
//       <Restaurant />
//       <div>
//         <Footer />
//       </div>
//       <CreateForm />

//     </div>
//   );

// };

export default App;
