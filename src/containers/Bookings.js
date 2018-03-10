import React, { Component } from 'react';
import Search from '../components/search/Search';
import Results from '../components/results/Results';

import * as FakeBookings from '../data/fakeBookings.json';

export default class Bookings extends Component {
	constructor(props) {
		super(props);
		this.state = {
      FakeBookings: [],
      text : 'Show Results'
		};
	}
	search = () => {
		var btn = window.document.getElementById('search');
		this.setState({
			FakeBookings: FakeBookings,
			text: 'Hide Results',
		});
		btn.innerHTML = this.state.text;
  };
  
  hideSearch = () => {
    var btn = window.document.getElementById('search');
    btn.innerHTML = 'Show Results'
    this.setState({
      FakeBookings : [],
      text : 'Show Results'
    })
    
    
  }

	render() {
    var props = {
      search : this.search,
      hideSearch : this.hideSearch,
      text : this.state.text
    }
		return (
			<div className="App-content">
				<div className="container">
					<Search {...props} />

					<Results FakeBookings={this.state.FakeBookings}  />
				</div>
			</div>
		);
	}
}
