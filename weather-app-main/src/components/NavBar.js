import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { logout } from "../utils/LogUtils";

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuth: localStorage.getItem("jwt"),
    };
  }

  componentDidUpdate() {
    if (!this.state.isAuth && localStorage.getItem("jwt")) {
      this.setState({
        isAuth: localStorage.getItem("jwt"),
      });
    }
  }

  render() {
    return (
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to={"/"} className="navbar-brand">
          Weather
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/home"} className="nav-link">
              Home
            </Link>
          </li>
        </div>

        {this.state.isAuth ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <a href="/login" className="nav-link" onClick={logout()}>
                LogOut
              </a>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>
          </div>
        )}
      </nav>
    );
  }
}

export default withRouter(NavBar);
