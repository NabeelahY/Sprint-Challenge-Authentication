import React from "react";
import {
  Route,
  NavLink,
  withRouter
} from "react-router-dom";
import "./App.css";
import Signup from "./components/Signup";

function App() {
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
      </nav>
      <Route path="/register" component={Signup} />
    </div>
  );
}

export default withRouter(App);
