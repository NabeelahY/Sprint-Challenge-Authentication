import React, { useState, useEffect } from "react";
import auth from "../components/withAuth";
const Jokes = props => {
  const [jokes, setJokes] = useState([]);
  const getJokes = () => {
    auth()
      .get("http://localhost:3300/api/jokes")
      .then(res => setJokes(res.data))
      .catch(err => err);
  };

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      props.history.push("/login");
    }
  }, []);

  useEffect(getJokes, []);

  return (
    <div>
      {jokes.map(joke => (
        <div key={joke.id} className="list">
          {joke.joke}
        </div>
      ))}
    </div>
  );
};

export default Jokes;
