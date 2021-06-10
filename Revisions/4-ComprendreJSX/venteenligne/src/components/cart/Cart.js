import React from "react";

class Cart extends React.Component {
  render() {
    return (
      <div>
        {this.props.articles.map(({ id, name }) => (
          <div key={id}>{name}</div>
        ))}
      </div>
    );
  }
}

export default Cart;
