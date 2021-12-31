import _ from "lodash";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "containers/Login/Loadable";
import Register from "containers/Register/Loadable";
import Home from "containers/Home/Loadable";

import AuthorizedLayout from "components/Layout/AuthorizedLayout";
import GuestLayout from "components/Layout/GuestLayout";
import Public from "components/Layout/Public";
// Authorized router
export const MainRouter = (props) => {
  return (
    <Switch>
      {_.map(authorizedRoutes, (route, routeId) => {
        return <Route key={routeId} {...route} {...props} />;
      })}
    </Switch>
  );
};
// Các routes được public khi không đăng nhập

export const publicRouter = [
  {
    path: "/login",
    exact: true,
    layout: AuthorizedLayout,
    component: Login,
  },
  {
    path: "/register",
    exact: true,
    layout: AuthorizedLayout,
    component: Register,
  },
  {
    path: "/",
    layout: AuthorizedLayout,
    component: MainRouter,
  },
];
export const authorizedRoutes = [
  {
    path: "/quang",
    exact: true,
    layout: GuestLayout,
    component: Home,
  },
  {
    path: "/",
    exact: true,
    layout: GuestLayout,
    component: Home,
  },
  // {
  //   path: "*",
  //   exact: true,
  //   component: NotFoundPage,
  // },
];
