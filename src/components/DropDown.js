import React, { Component } from 'react';
// import languages from './Languages'

export class DropDown extends Component {

state={
    lan:null
}

  getDropDownChange = (e) => {
    this.setState({
        lan:e.target.value
    })
  };

  render() {
    console.log(this.state.lan);
    return (
      <div className="drop-down">
         <div className="dropdown">
           <select value={this.state.lan} onChange={this.getDropDownChange}>
            <option value="">Select language</option>
             <option value="English">English</option>
             <option value="Malayalam">Malayalam</option>
           </select>
         </div>
      </div>
    );
  }
}

export default DropDown;
