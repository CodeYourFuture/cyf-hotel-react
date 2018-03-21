import React,{Component} from 'react';

export default class SearchButton extends Component {
  render(){
    return (
      <div>
      <button onClick={()=> this.props.toggleContent(this.props.value)}  
       className="btn btn-primary fn-submit-name" >{this.props.value}</button>
       </div>
    )
  }
}

      
             
             
              