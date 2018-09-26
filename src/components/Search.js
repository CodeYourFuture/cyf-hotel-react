import React,{Component} from 'react';
import Button from './button.js'
class Search extends Component{ 
  state = {
    value : null
  }
 handleChange = (e) =>{
   this.setState({
     value : e.target.value
  })
 
 }
 handleClick = (e) =>{
   
   console.log(this.state);
   this.props.search(this.state.value)
   
 }

  render(){
    //const {search} = this.props;
    return(
  <div className="search">
    <div className="page-header">
      <h4 className="text-left">Search Bookings</h4>
    </div>
    <div className="row search-wrapper">
      <div className="col">
        <div className="form-group search-box">
          <label htmlFor="customerId">Customer Id</label>
          <div className="search-row">
            <input type="text" id="id" className="form-control" placeholder="Customer Id"  onChange={this.handleChange}/>
            {/* <button text ="customer Id" onClick={this.handleClick} >customer Id</button> */}
            <Button handleClick= {this.handleClick}/>
          </div>
          <div className="search-row">
          <input type="text" id="firstName" className="form-control" placeholder="Customer name"  onChange={this.handleChange} />
           <button text = "customer name" onClick={this.handleClick}>customer Name</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

  }
}
export default Search;
