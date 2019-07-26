import React, { useState } from "react";
import axios from "axios";

const Signup = props => {
  const [userData, setUser] = useState({
    username: "",
    department: "",
    password: ""
  });

  const userSignup = user => {
    const { username, password } = user;
    return axios
      .post("http://localhost:3300/api/register", {
        username,
        password
      })
      .then(res => res)
      .catch(err => err)
      .finally(() => props.history.push("/"));
  };

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        userSignup(userData);
      }}
    >
      <h1>Register</h1>
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
      <button type="submit">Register</button>
    </form>
  );
};

export default Signup;
