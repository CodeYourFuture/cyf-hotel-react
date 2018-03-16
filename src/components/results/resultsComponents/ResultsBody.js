import React, { Component } from 'react';

export default class ResultsBody extends Component {
	// sayHello = () => {
	// 	console.log('clicked')
	// }
	// constructor() {
	// 	super() 
	// 	this.state = {
	// 		selectedItems: []
	// 	}
	// }
	// selectItem(key) {
	// 	console.log(key)
	// 	//const selectedItems = this.state.selectedItems
	// 	const { selectedItems } =  this.state
	// 	const index = selectedItems.indexOf(key)
	// 	if(index > -1) {
	// 		selectedItems.splice(index, 1)
	// 	}else {
	// 		selectedItems.push(key)
	// 	}
	// 	this.setState({
	// 		selectedItems
	// 	})
	// }
	getRowColor = (key) => {
		const { selectedItems } = this.props
		if(selectedItems.indexOf(key) > -1) {
			return 'gray'
		}else {
			return '#fff'
		}
	}
	render() {
		
		return (
			<div>
				<tbody>
					{this.props.FakeBookings.map((booking, i) => {
						return (
							<tr 
								style={{background: this.getRowColor(i)}}
								key={i} 
								onClick={() => this.props.selectItem(i)}
							>
								<td>{booking.title}</td>
								<td>{booking.firstName}</td>
								<td>{booking.surname}</td>
								<td>{booking.email}</td>
								<td>{booking.roomId}</td>
								<td>{booking.checkInDate}</td>
								<td>{booking.checkOutDate}</td>
								<td >{parseInt((new Date(booking.checkOutDate) - new Date(booking.checkInDate)) / (1000 * 60 * 60 * 24))} days</td>
							</tr>
						);
					})}
				</tbody>
			</div>
		);
	}
}
