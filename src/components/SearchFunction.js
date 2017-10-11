import React from 'react';
import Button from './Button';
import SearchState from './SearchState.js'

class SearchFunction extends React.Component {
  constructor (props){
    super(props);
    this.state = {
        input : ""
    };
}
handleChange = (event) => {
    this.setState({input: event.target.value})
}
handlClick = (event) =>{
  this.props.search(this.state.input)
}
render () {
  return [

      <td key ={1}>
        <SearchState handleChange={this.handleChange} 
        input ={this.state.input}/>
        
        {/* <input
          id= {props.inputId}
          type={props.inputType}
          className={props.inputClassName}
          placeholder={props.inputPlaceholder}
          name={props.inputName}
        /> */}
      </td>,
        <td key = {2}>
        <Button onClick={this.handlClick} text={this.props.inputName} />
      </td>

      

  ];
}
}

export default SearchFunction;