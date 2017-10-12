import React , {Component} from 'react'

export default class SearchState extends Component {
    constructor (props){
        super(props);
        this.state = {
            input : ""
        };
    }
    // handleChange = (event) => {
    //     this.setState({input: event.target.value})
    // }

    render(){
        return(
            <input
            type="text"
            value={this.props.input}
            onChange={this.props.handleChange}
            />
        )
    }
}

