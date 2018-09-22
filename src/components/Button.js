import React from 'react';

class Button extends React.Component {
  constructor() {
    super()
    this.state = {
      value: ""
    }
  }

  handleUpdate = (e) => {
    this.setState({ value: e.target.value })
  }

  handleClick = () => {
    this.props.handleClick(this.state.value)
  }

  render() {
    return (
      <div className="row search-wrapper">
        <div className="col">
          <div className="form-group search-box">
            <label htmlFor="CustomerId">{this.props.label}
            </label>
            <div className="search-row" >
              <input type="text"
                id="customerId"
                className="form-control"
                onChange={this.handleUpdate}
                value={this.state.value}
              />
              <button onClick={this.handleClick}
                className="btn btn primary fn-submit-name" >
                {this.props.buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Button;

