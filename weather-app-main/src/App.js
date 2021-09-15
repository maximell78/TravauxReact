import "./App.css";
import React, { Component } from "react";
import { Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./views/Home";
import SignIn from "./views/SignIn";
import BoardUser from "./views/BoardUser";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="container mt-3">
          <Switch>
            <PublicRoute
              restricted={false}
              exact
              path={["/", "/home"]}
              component={Home}
            />
            <PublicRoute restricted={true} path="/login" component={SignIn} />
            <PrivateRoute path="/user" component={BoardUser} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
