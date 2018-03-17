import React, { Component } from 'react'
import Header from './components/layout/Header'
import Bookings from './containers/Bookings'
import Footer from './components/layout/Footer'
import './App.css'

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<Bookings />
				<Footer />
				
			</div>
		);
	}
}

export default App;
