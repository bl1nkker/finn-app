import React from "react";
import { Redirect } from "react-router-dom";
import Nav from "./Nav";

function PrivateRoute({ component: Component, ...rest }) {
  // Add your own authentication on the below line.
  const [token, setToken] = React.useState(localStorage.getItem("token"));
  return (
    !token ? 
      (<Redirect to='/' />)
    :
      (<React.Fragment>
        <Nav />
        <Component />
      </React.Fragment>)
    )
}

export default PrivateRoute;
