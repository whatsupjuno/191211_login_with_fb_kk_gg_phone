import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Home from "../Screens/Home";
import Auth from "../Screens/Auth";
import FileUpload from "../Screens/FileUpload";

const LoggedInRoutes = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/auth" component={Auth} />
      <Route path="/fupload" component={FileUpload} />
      <Redirect from="*" to="/" />
    </Switch>
  </>
);

const LoggedOutRoutes = () => (
  <Switch>
    <Route exact path="/" component={Auth} />
    <Redirect from="*" to="/" />
  </Switch>
);

const AppRouter = ({ isLoggedIn }) => {
  console.log(isLoggedIn);
  return isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />;
};

export default AppRouter;
