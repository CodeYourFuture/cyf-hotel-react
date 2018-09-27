import React, { Component } from 'react';
//import columns from './components/Results.js';
import Bookings from './containers/Bookings.js';
import Footer from './components/Footer.js';
import './App.css';
import Api from './Api.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  
  // render() {
  //   console.log(this.state.data)
  //   if (this.state.isLoading) {
  //     return <div>Loading... <span role="img"
  //       aria-label="emoji">
  //       🤔</span>
  //     </div>
  //   } else if (this.state.err) {
  //     return <div>Something went wrong <span role="img"
  //       aria-label="emoji">
  //       😭</span>
  //     </div>
  //   } else {
  //     return (<div className="App">
  //       <header className="App-header">CYF Hotel</header>
  //       <Bookings />
  //       <Footer />
  //     </div>)
  //   }
  // }
render () {
  return (
    <div  className="App">
      <header className="App-header">CYF Hotel</header>
      <Bookings reservations={this.state.reservations} />
      <Footer />      
    </div>
  );
}
}
    


export default App;
