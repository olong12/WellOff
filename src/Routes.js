import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Bmi from "./containers/Bmi";
import Meditation from "./containers/Meditation"
import Journal from "./containers/Journal"
import Sleep from "./containers/Sleep"

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
      <Route exact path="/bmi">
        <Bmi />
      </Route>
      <Route exact path="/meditation">
        <Meditation />
      </Route>
      <Route exact path="/Journal">
        <Journal />
      </Route>
      <Route exact path="/sleep">
        <Sleep />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}
