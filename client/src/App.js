import React from "react";
import { Route, NavLink, withRouter, Link } from "react-router-dom";
import "./App.css";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";

function App(props) {
  const logout = () => {
    localStorage.clear();
    return props.history.push("/login");
  };
  return (
    <div className="App">
      <nav>
        <NavLink to="/">
          <div>Home</div>
        </NavLink>
        <NavLink to="/register">
          <div>Register</div>
        </NavLink>
        <NavLink to="/login">
          <div>Login</div>
        </NavLink>
        <Link>
          <div onClick={() => logout()}>Logout</div>
        </Link>
      </nav>
      <Route exact path="/" component={Home} />
      <Route path="/register" component={Signup} />
      <Route path="/login" component={Login} />
    </div>
  );
}

export default withRouter(App);
