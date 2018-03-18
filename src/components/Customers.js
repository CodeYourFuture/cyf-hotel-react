import React from 'react';
import TableHead from './TableHead';
import TableData from './TableData';
// import * as FakeBookings from "../data/fakeBookings.json";


class Customers extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			data: [],
			isFetched: false,
			// columnToSort: '',
			sortDirection: 'asc',
			isRowClicked: false,
			counter: 0,
			error: null,
			isLoading: false
		}
	}


	// getData = () => {
	// 	if (this.state.isFetched === false) {
	// 		this.setState({
	// 			data: this.sort(FakeBookings, 'firstName'),
	// 			isFetched: true
	// 		})	
	// 	}
	// }

	componentDidMount() {
		if (this.state.isFetched === false) {
			this.setState({isLoading: true});
			fetch(`http://localhost:7000/api/customers-data`)
	      .then(res => {
	        if (res.status >= 200 && res.status < 300) {
	          return res;
	        } else {
	          throw new Error("HTTP error");
	        }
	      })
	      .then(res => res.json())
	      .then(data => {
	        this.setState({
	          // isLoading: false,
	         data: data.rows,
	         isFetched: true,
	         isLoading:  false
	        });
	      })
	      .catch(err => {
	        this.setState({
	          // isLoading: false,
	          error: err
	        });
	      });
		}
    
  }

	sort = (data, columnName) => {
		return data.sort((a, b) => {
			if (this.state.sortDirection === 'asc') {
				if (a[columnName] > b[columnName]) {
					return 1
				} else {	
					return -1
				}
			} else {
				if (a[columnName] < b[columnName]) {
					return 1
				} else {	
					return -1
				}
			}
			
		});
	} 

	handleSort = (columnName) => {
		let foo;
		if(this.state.sortDirection === 'asc') {
			foo = 'desc';
		} else {
			foo = 'asc';
		}
		this.setState({
			data: this.sort(this.state.data, columnName),
			sortDirection: foo
		});
	}

	handleClick = (event) => {
		console.log(event.currentTarget)
		// console.log(event)
		if(this.state.isRowClicked === false) {
			this.setState({
				isRowClicked: true,
				counter: ++this.state.counter
			});
		} else {
			this.setState({
				isRowClicked: false,
				counter: --this.state.counter
			});
		}
	}

	render() {
		console.log('error message here', this.state.error)
		return (
			<div>
				<section className="get-results">

					{/*SPINNER SECTION*/}
          <section className={this.state.isLoading ? 'spinner' : 'hidden'}>
            <div className="lds-css ng-scope">
              <div className="lds-spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </section>
          {/*SPINNER SECTION END*/}

					<p>Results (<span>{this.state.data.length}</span> found)</p>
					<p>Rows selected: <span>{this.state.counter}</span></p>
					<p className={this.state.error ? 'error-message' : 'hidden'}>There is an error: <span>{this.state.error}</span></p>
				</section>
				
				<table className="table">
					<TableHead sort={this.handleSort} />
					<TableData 
						classCss={this.state.isRowClicked ? 'selected' : 'default'}
						customers={this.state.data} 
						myClick={this.handleClick}
					/>
				</table>
			</div>
		);
	}
}

export default Customers;