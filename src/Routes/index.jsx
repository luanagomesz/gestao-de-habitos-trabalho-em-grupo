import { Route, Switch, useHistory } from "react-router";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Dashboard from "../Pages/Dashboard";
<<<<<<< HEAD
import Habits from "../Pages/Habits";
import Activies from "../Components/Activies";
=======
import Activities from "../Components/Activities";

>>>>>>> 374952d80e1b3adbdf73a8f220cc7a1d8be08b32

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
<<<<<<< HEAD
      <Route path="/habits">
        <Habits history={history} />
      </Route>
      <Route path="/activies">
        <Activies history={history}/>
=======
      <Route path="/activities">
        <Activities history={history} />
>>>>>>> 374952d80e1b3adbdf73a8f220cc7a1d8be08b32
      </Route>
    </Switch>
  );
}

export default Routes;
