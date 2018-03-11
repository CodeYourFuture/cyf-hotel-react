import React,{Component} from 'react';

export default class SearchButton extends Component {
  render(){
    return (
      <div>
      <button onClick={this.props.toggleContent}   className="btn btn-primary fn-submit-name">Search</button>
       </div>
    )
  }
}
      
             
             
              