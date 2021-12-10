import { Route, Switch, useHistory } from "react-router";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Dashboard from "../Pages/Dashboard";

function Routes() {
  const history = useHistory();

  return (
    <Switch>
      <Route exact path="/">
        <Home history={history} />
      </Route>
      <Route path="/login">
        <Login history={history} />
      </Route>
      <Route path="/register">
        <Register history={history} />
      </Route>
      <Route path="/dashboard">
        <Dashboard history={history} />
      </Route>
    </Switch>
  );
}

export default Routes;
