
import React from 'react';
//import { render } from 'react-dom'
import {TableRow } from "./table";
class Results extends React.Component {

  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      bookings: this.props.bookings,
      isActive: false,
      isLoading: true,
      err: null,
      data: null
    }
  
// this.compareBy.bind(this);
// this.sortBy.bind(this);
this.onSort.bind(this);
//this.sortingHandler.bind(this);
  }


  // toggleClass = () => {

  //   this.setState(({ isActive }) => ({ isActive: !isActive }))

  // }



  componentDidMount() {
    fetch('api/customers')
      .then((res) => {
        if (res.status >= 200 && res.status < 300) {
          return res
        } else {
          throw new Error('HTTP error')
        }
      })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          isLoading: false,
          data: data
        })
        console.log(data)
      })
      .catch((err) => {
        this.setState({
          isLoading: false,
          err: err
        })
      })
    }
    // compareBy(key){
    //   return function(a,b){
    //     if(a[key] < b[key]) return -1;
    //     if(a[key]>b[key]) return 1
    //     return 0;
    //   }
    // }
    
    // sortBy(key){
    //   let arrayCopy = [...this.state.data.customers];
    //   arrayCopy.sort(this.compareBy(key));
    //   this.setState({data:arrayCopy});
    //   console.log(arrayCopy)
    // }
    onSort(event, sortKey){
     
      const data = [...this.state.data.customers];
      data.sort((a,b) => a[sortKey].localeCompare(b[sortKey]))
      this.setState({data})
    }

    // sortingHandler() {
    //  // const { reservations } = this.state
    //   let newData = this.state.data.customers
    //   console.log('sort')
    //   this.setState({
    //     data: newData.sort((a, b) => a.firstName > b.firstName)
    //     //reverse: !this.state.reverse,  
    //   });
    // }
  render() {

    // console.log(this.state.data)
    if (this.state.isLoading) {
      return <div>Loading... </div>
    } else if (this.state.err) {
      return <div>Something went wrong</div>
    } else {
      return (
        <table className="Results">
          <thead>
            <tr>
              <th onClick={(e)=>this.onSort(e,'id')}>ID</th>
              <th onClick={(e)=>this.onSort(e,'title')}>Title</th>
              <th onClick={(e)=>this.onSort(e,'first_name')}>>First name</th>
              <th>Surname</th>
              <th>Email</th>
             
            </tr>
          </thead>
          {
            this.state.data.customers.map((row, key) => {
              return <TableRow  key={key} rowData = {row} />
              
            })

          }
          {/* {console.log(this.state.isActive)} */}
        </table>

      );
    }
  }
}
  export default Results;


   




 

