import { Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";
import Signup from "./views/Signup";
import Userpage from "./views/Userpage";
import Edit from "./views/Edit";
import TestHub from "./views/TestHub";
import NotFound from "./views/NotFound";
import AlertsModals from "./components/AlertsModals";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/user/:username" component={Userpage} />
        <Route exact path="/user/:username/edit" component={Edit} />
        <Route exact path="/debug" component={TestHub} />
        <Route component={NotFound} />
      </Switch>
      <AlertsModals />
    </div>
  );
}

export default App;
