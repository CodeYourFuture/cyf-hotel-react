import React, { Component } from "react";
import Search from "../components/Search.js";
import Results from "../components/Results.js";
// import Results from "../components/Results.js";
import * as FakeBookings from "../data/fakeBookings.json";

export default class Bookings extends Component {
  constructor (props){
    super(props);
    this.state = {
      results : [],
      ASC:false,
      DEC:false,
      count : 0,
      loading: true
    };
}
componentDidMount(){
  setTimeout(() =>{
    this.setState({
      loading:false
    })
  }, 2000)
}
search= (input) => {
  let apiAddress =``
  if(isNaN(input)){
    apiAddress = `http://localhost:3000/api/reservations?name=${input}`
  }else{
    apiAddress = `http://localhost:3000/api/reservations?id=${input}`
  }
  fetch(apiAddress) 
  .then(function(respons){
    return respons.json()
  })
  .then((jsonData)=>{
    this.setState({results : jsonData.reservations})
  })
}




// search= (input) => {
//   this.setState({results: FakeBookings.filter(function(x){
//     return ((x.firstName===input)|| (x.id===input)) 
//   })})
// }


  
  counter = (selected) =>{
    if (selected){
      this.setState ({count:this.state.count+1})
    }else{
      this.setState({count: this.state.count-1})
    }

  }
  
  sortByIdASC = () =>{
    this.setState({
      ASC:true,
      DEC:false
    });
    return this.state.results.sort(function(a,b){
        return a.id - b.id
      
    })
  }

  sortByIdDEC = () => {
    this.setState({
      DEC:true,
      ASC:false
    })
    return this.state.results.sort(function(a,b){
      return b.id - a.id
  })
  }
 clickSort = () =>{
   this.setState(this.sortByIdDEC());
   if (this.state.DEC){
     this.setState(this.sortByIdASC())
   }

  }

  render() {
    return (
      <div className="App-content">
            <h1 className={this.state.loading ? 'showLoading' : 'notshowLoading'}>Loading...</h1>
        <div className={this.state.loading ? 'notshowLoading' : 'container'}>
          <Search search={this.search}/>
          {/* <Results/> */}
          <p> you have {FakeBookings.length} number of record you selcted {this.state.count}</p>
          <Results counter={this.counter} results={this.state.results}  clickSort={this.clickSort}/>
        </div>
      </div>
    );
  }
}
