import React, { Component } from 'react';

export class InputField extends Component {
  getEnteredInput = (e) => {
    this.props.getInputValue(e.target.value);
  };
//   getDropDownChange = (e) => {
//     console.log(e.target.value);
//   };
  render() {
    return (
      <form className="input-field">
        <div className="form-group">
          <h5>Enter Text</h5>
          <textarea
            className="form-control"
            placeholder="Enter Text"
            onChange={this.getEnteredInput}
          />
        </div>
        {/* <div className="drop-down">
        <div className="dropdown">
          <select  onChange={this.getDropDownChange}>
            <option value={0}>English</option>
            <option value={1}>Malayalam</option>
          </select>
        </div>
      </div> */}
      </form>
    );
  }
}

export default InputField;
