import React, { Component } from "react";
import Bookings from "./containers/Bookings.js";
import Footer from "./components/Footer.js";
import "./App.css";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      reservations:'',
      requestFailed:false
    }
  }
  componentDidMount (){
    return fetch('/api/reservations',{
      headers : {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
}})
.then(response => {
  if(!response.ok){
    throw Error("API request failed");
  }
  return response;
})
    .then(reservations => reservations.json())
    .then((response)=>{
      this.setState({
        reservations: response.reservations
      })
    })
  }
    render() {
      if(!this.state.reservations) return <p> loading... </p>
      console.log(this.state.reservations)
        return ( 
          <div className = "App" >
            <header className = "App-header" > CYF Hotel </header> 
            <Bookings reservations = {this.state.reservations}/>
            <Footer />
          </div>
        );
    }
}
export default App;






