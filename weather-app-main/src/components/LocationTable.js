import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class LocationTable extends Component {
  render() {
    const { locations, current, favorite } = this.props;
    return (
      <div>
        <h2>Locations</h2>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {locations.map((location) => (
              <tr
                className={current?.id === location.id ? "table-primary" : ""}
                key={location.id}
              >
                <td>
                  <div onClick={() => this.props.onSelect(location)}>
                    {location.name}
                  </div>
                  {this.props.location.pathname === "/user" ? (
                    <div
                      onClick={() => this.props.onSelectFavorite(location)}
                      className={
                        favorite?.id === location.id
                          ? "isFavorite"
                          : "notFavorite"
                      }
                    ></div>
                  ) : (
                    <div></div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default withRouter(LocationTable);
