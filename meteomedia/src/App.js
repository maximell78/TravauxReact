import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch } from "react-router-dom";
import Accueil from "./components/Accueil";
import Dashboard from "./components/Dashboard";
import SignIn from "./components/SignIn";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/js/bootstrap";
import "../node_modules/react-popper/dist/index.umd";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <PublicRoute restricted={false} component={Accueil} path="/" exact />
          <PublicRoute
            restricted={true}
            component={SignIn}
            path="/signin"
            exact
          />
          <PrivateRoute component={Dashboard} path="/dashboard" exact />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
