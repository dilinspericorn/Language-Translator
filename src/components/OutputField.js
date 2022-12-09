import React, { Component } from 'react';

export class OutputField extends Component {
  render() {
    console.log(this.props.result);
    return (
      <div>
        <form>
          <div className="form-group">
            <h5>Translation</h5>
            <textarea readOnly value={this.props.result} className="form-control" />
          </div>
        </form>
      </div>
    );
  }
}

export default OutputField;
