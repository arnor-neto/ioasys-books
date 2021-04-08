import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalContext } from "./GlobalContext";
import Login from "./layout/Login";
import Books from "./layout/Books";

function Routes() {
  return (
    <Router>
      <Switch>
        <GlobalContext>
          <Route exact path="/" component={Login} />
          <Route exact path="/books" component={Books} />
        </GlobalContext>
      </Switch>
    </Router>
  );
}

export default Routes;
