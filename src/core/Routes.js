import React from "react";
import { Switch, Route } from "react-router-dom";

import { Home } from "./Home";
import { Checkout } from "./Checkout";

// High-level routes for the application
// Sub-routes should be nested within components
export const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route exact path="/checkout">
      <Checkout />
    </Route>
  </Switch>
);
