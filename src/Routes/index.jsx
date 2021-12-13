import { Route, Switch, useHistory } from "react-router";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Dashboard from "../Pages/Dashboard";
import Habits from "../Pages/Habits";
import Activies from "../Components/Activities";

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
      <Route path="/activies">
        <Activies history={history} />
      </Route>
    </Switch>
  );
}

export default Routes;
