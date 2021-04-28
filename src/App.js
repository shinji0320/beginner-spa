import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Button from "./components/Button";
import Drinks from "./containers/Drinks";
import First from "./containers/First";
import Foods from "./containers/Foods";
import Index from "./containers/Index";
import Second from "./containers/Second";
import Show from "./containers/Show";
import Third from "./containers/Third";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/buttons">
            <Button />
            <Link to="/">Home</Link>
          </Route>

          <Route exact path="/menus">
            <Link to="/">Home</Link>
            <Drinks />
            <Foods />
          </Route>

          <Route exact path="/first">
            <Link to="/">Home</Link>
            <First />
          </Route>

          <Route exact path="/items">
            <Link to="/">Home</Link>
            <Index />
            <Show />
          </Route>

          <Route exact path="/">
            <Link to="/buttons" className="link">
              Buttons
            </Link>
            <Link to="/menus" className="link">
              Menus
            </Link>
            <Link to="/first" className="link">
              First
            </Link>
            <Link to="/items" className="link">
              items
            </Link>
            <Second />
            <Third />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
