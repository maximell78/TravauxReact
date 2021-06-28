import React from "react";

class MenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFavorite: this.props.itemInfo.isFavorite,
    };
    this.handleClickFavorite = this.handleClickFavorite.bind(this);
  }

  handleClickFavorite() {
    const { isFavorite } = this.state;
    this.setState({
      isFavorite: !isFavorite,
    });
  }

  render() {
    const { itemInfo } = this.props;
    const { isFavorite } = this.state;
    return (
      <div className="itemContainer">
        <div className="leftContainer">
          <div className="imgContainer">
            <img src={itemInfo.foodImage} alt="" />
          </div>
          <div className="itemDescription">
            <h3>{itemInfo.itemName}</h3>
            <p>{itemInfo.description}</p>
          </div>
        </div>
        <div className="rightContainer">
          {itemInfo.price} EUR
          <button onClick={this.handleClickFavorite} className={isFavorite ? "isFavorite" : "notFavorite"}>
          </button>
        </div>
      </div>
    );
  }
}

export default MenuItem;
