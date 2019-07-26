import React, { useState } from "react";
import axios from "axios";

const Login = props => {
  const [userData, setUser] = useState({
    username: "",
    password: ""
  });

  const userLogin = user => {
    return axios
      .post("http://localhost:3300/api/login", user)
      .then(res => {
        localStorage.setItem("token", res.data.token);
      })
      .catch(err => err)
      .finally(() => props.history.push("/"));
  };

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        userLogin(userData);
      }}
    >
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Username"
        value={userData.username}
        onChange={e => setUser({ ...userData, username: e.target.value })}
      />

      <input
        type="password"
        placeholder="Password"
        value={userData.password}
        onChange={e => setUser({ ...userData, password: e.target.value })}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
