import React from 'react';
import moment from 'moment';
import ResultTableHeaders from './ResultTableHeaders';
import ResultTableRows from './ResultTableRows';

const getTimeDifference = (bookings)=>{
   bookings.map(booking =>{
     let checkOutDate = moment(booking.checkOutDate);
     let checkInDate = moment(booking.checkInDate);
     //calculate the difference and include the result,totalDays, to the booking object
     return booking.totalDays = checkOutDate.diff(checkInDate,'days')
   })
  
}
class Results extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      numberOfRowSelected : 0,
      message : props.message
    }
  }
  updateNumberOfRowsSelected = (numberOfRowSelected)=>{
    this.setState({
      numberOfRowSelected,
      message : 'selected' //e.g: Results(1 selected) instead of Results(1 found)
    }, function(){
       this.props.updateRowsSelected(numberOfRowSelected);
    })
  }
  render(){
    return (
      <div className = "container" >
        <div className = "row" >
            <div className = "col" >
                <p> Results ( <span className="text-danger">{this.props.numberOfResults}</span> {this.state.message} ) </p>
                {/*calculate the total days and map it with each booking object*/}
                {getTimeDifference(this.props.results)}
                <table className = "table" >
                    <thead className="thead-inverse">
                        <tr>{/* use the first object's keys as the value for the table heading*/}
                             <ResultTableHeaders 
                                resultHeading = {Object.keys(this.props.results[0])} 
                                onClick={this.props.headerclick}
                              />
                        </tr> 
                    </thead> 
                    <tbody id = "rows">
                      { this.props.results.map((booking,i) =>
                        <ResultTableRows 
                          key = {i} 
                          booking = {booking} 
                          index={i} 
                          updateNumberOfRowsSelected ={this.updateNumberOfRowsSelected} 
                          numberOfRowSelected ={this.state.numberOfRowSelected}
                        />
                      )}
                    </tbody> 
                </table> 
            </div> 
        </div> 
      </div>
    )
  }
} 

export default Results;