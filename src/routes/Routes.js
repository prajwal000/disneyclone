import React from "react";

import {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import Login from "../components/Login";

function Routes() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Login} exact />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default Routes;
