import React from "react";

class Title extends React.Component {
  render() {
    return <h1>Bienvenue {this.props.name} dans les composants React</h1>;
  }
}

export default Title;
