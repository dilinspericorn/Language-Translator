import React, { Component } from 'react';

export class OutputField extends Component {
  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <h5>Translation</h5>
            <textarea type="text" className="form-control" />
          </div>
        </form>
      </div>
    );
  }
}

export default OutputField;
