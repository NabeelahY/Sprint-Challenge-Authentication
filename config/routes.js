const axios = require("axios");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jwtKey = process.env.JWT_SECRET;
const Users = require("../api/users/users-model");
const check = require("./routes-middleware");

const { authenticate } = require("../auth/authenticate");

module.exports = server => {
  server.post("/api/register", register);
  server.post("/api/login", check, login);
  server.get("/api/jokes", authenticate, getJokes);
};

async function register(req, res) {
  // implement user registration
  try {
    let user = req.body;
    user.password = bcrypt.hashSync(req.body.password, 12);

    const newUser = await Users.addUser(user);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: "User cannot be created", error });
  }
}

function login(req, res) {
  // implement user login
  try {
    const token = generateToken(req.user[0]);
    res
      .status(200)
      .json({ message: `Welcome ${req.user[0].username}!`, token });
  } catch (error) {
    res.status(500).json({ message: "Cannot login", error: error.message });
  }
}

function getJokes(req, res) {
  const requestOptions = {
    headers: { accept: "application/json" }
  };

  axios
    .get("https://icanhazdadjoke.com/search", requestOptions)
    .then(response => {
      res.status(200).json(response.data.results);
    })
    .catch(err => {
      res.status(500).json({ message: "Error Fetching Jokes", error: err });
    });
}

function generateToken(user) {
  const payload = {
    sub: user.id,
    username: user.username
  };

  const options = {
    expiresIn: "1d"
  };

  return jwt.sign(payload, jwtKey, options);
}
