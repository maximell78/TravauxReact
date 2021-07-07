import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import FreeComponent from "./components/FreeComponent";
import AuthComponent from "./components/AuthComponent";


function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/free">Free Component</Link>
          </li>
          <li>
            <Link to="/auth">Auth Component</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/" component={Account} />
        <Route exact path="/free" component={FreeComponent} />
        <Route exact path="/auth" component={AuthComponent} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
