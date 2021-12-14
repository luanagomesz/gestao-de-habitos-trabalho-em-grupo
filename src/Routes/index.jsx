import { Route, Switch, useHistory } from "react-router";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Dashboard from "../Pages/Dashboard";
import Activities from "../Components/Activities";
import Goals from "../Pages/Goals";
import Habits from "../Pages/Habits";

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
      <Route path="/habits">
        <Habits history={history} />
      </Route>
      <Route path="/activities">
        <Activities history={history} />
      </Route>
      <Route path="/goals">
        <Goals history={history} />
      </Route>
      <Route path="/goals/modal">
        <Goals history={history} />
      </Route>
    </Switch>
  );
}

export default Routes;
