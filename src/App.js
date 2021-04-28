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
          {/* <Route exact path="/buttons/:id/edit" component={表示させたいページ}> */}
          {/* path="/:id/"を使うことでidで管理できるようになる */}
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

          <Route exact path="/index" component={Index}>
             {/* useState, useEffectの確認 */}
            {/* <Link to="/">Home</Link>
            <Index /> */}
            {/* <Show /> */}
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
            <Link to="/index" className="link">
              Indexページへ
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
