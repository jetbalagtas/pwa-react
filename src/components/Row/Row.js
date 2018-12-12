import React, { Component } from 'react';

class Row extends Component {

  render() {
    return (
      <div>
        {this.props.label}
        {this.props.children}
      </div>
    );
  }
}

export default Row;
