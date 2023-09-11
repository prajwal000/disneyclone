import React from "react";

import {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import Login from "../components/Login";
import Home from "../components/Home";

function Routes() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/home" component={Home} exact />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default Routes;
