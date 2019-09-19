import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Main from "./Components/Main";
import Third from "./Components/Third";
import Second from "./Components/Second";

const routes_with_components = [
  { path: "/", exact: true, component: Home },
  { path: "/main", component: Main },
  { path: "/second", component: Second },
  { path: "/third", component: Third }
];

export default (
  <Switch>
    {routes_with_components.map((route, i) => (
      <Route
        key={i}
        exact={route.exact}
        path={route.path}
        render={props => {
          return <route.component {...props} />;
        }}
      />
    ))}
  </Switch>
);
