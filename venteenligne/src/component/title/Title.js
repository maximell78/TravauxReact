import React from "react";

class Title extends React.Component {
    render() {
      return <div>
          <h1>Bienvenue sur Vente en ligne {this.props.name}</h1>
      </div>
    };
  }

  export default Title;