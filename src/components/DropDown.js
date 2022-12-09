import React, { Component } from 'react';
// import languages from './Languages'

export class DropDown extends Component {
  getDropDowninput = (e) => {
    this.props.langSelect(e.target.value);
  };

  render() {
    return (
      <div className="drop-down">
        <div className="dropdown">
          <select value={this.props.lan} onChange={this.getDropDowninput}>
            <option value="">Select language</option>
            <option value="English">English</option>
            <option value="malayalam">Malayalam</option>
          </select>
        </div>
      </div>
    );
  }
}

export default DropDown;
