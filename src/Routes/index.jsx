import { Route, Switch, useHistory, Redirect } from "react-router";
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

      <Route path="/goals" component={Goals} />

      <Redirect to="/dashboard" />
      {/* util para redirecionar quando o usuário tentar acessar  */}

      {/* <Route path="/404" component={Teste} /> */}
    </Switch>
  );
}

export default Routes;
