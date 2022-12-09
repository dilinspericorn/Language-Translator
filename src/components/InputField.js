import React, { Component } from 'react';

export class InputField extends Component {
state={
  inputValue:""
}

  getEnteredInput = (e) => {
  this.setState({
    inputValue:e.target.value
  })
  };

  onSubmitForm=(e)=>{
e.preventDefault()
    this.props.getInputValue(this.state.inputValue)
  }



  render() {
    return (
      <form className="input-field" onSubmit={this.onSubmitForm}>
        <div className="form-group">
          <h5>Enter Text</h5>
          <input
          type="text"
            className="form-control"
            placeholder="Enter Text"
            onChange={this.getEnteredInput}
            value={this.state.inputValue}
          />
        </div>
      </form>
    );
  }
}

export default InputField;
