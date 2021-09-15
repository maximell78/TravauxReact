import React, { Component } from "react";

class AlertComponent extends Component {
  render() {
    return this.props.message ? (
      <div className={`alert ${this.props.class}`}>{this.props.message}</div>
    ) : null;
  }
}

export default AlertComponent;
