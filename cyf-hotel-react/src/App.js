import React, { Component } from "react";
import Bookings from "./containers/Bookings.js";
import Footer from "./components/Footer.js";
import "./App.css";
import { RingLoader } from 'react-spinners';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      reservations:'',
      requestFailed:false,
      loading: true
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
    .then((reservationsJson)=>{
      //used setTimeout only for presenting the implementation of a loading status 
      //should be avoided on the production
      setTimeout(()=>{ 
        this.setState({
          reservations: reservationsJson.reservations,
          loading:false
        })
      },3000)
    },()=>{
      this.setState({
        requestFailed:true
      })
    })
  }
    render() {
      if(this.state.requestFailed) 
      return (
        <div className = "App" >
          <header className = "App-header" > CYF Hotel </header> 
        <div className="error-template">
                <h1>
                    Failed to load resource:
                </h1>
                <div className="error-details">
                    Sorry, the server responded with a status of {404} (Not Found)
                </div>
            </div>
            <Footer />
          </div>)
      if(this.state.loading) 
      return  (
        <div className = "App" >
          <header className = "App-header" > CYF Hotel </header> 
          {/*used react-spinners @0.1.6 package for showing a loading status*/}
          <div className='RingLoader center-loading'>
            <RingLoader
              color={'#123abc'} 
              loading={this.state.loading} 
              size={200}
            />
            </div>
          <Footer />
       </div>
     )
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






