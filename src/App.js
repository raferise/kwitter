import { Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import { LOGIN } from "./store/store";
import Edit from "./views/Edit";

import Home from "./views/Home";
import NotFound from "./views/NotFound";
import Signup from "./views/Signup";
import Userpage from "./views/Userpage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/user/:username" component={Userpage} />
        <Route exact path="/user/:username/edit" component={Edit} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
