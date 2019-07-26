const db = require("../../database/dbConfig");

module.exports = {
  addUser,
  findUserBy
};
function addUser(user) {
  return db("users")
    .insert(user)
    .then(([id]) => findUserBy({ id }));
}

function findUserBy(filter) {
  return db("users").where(filter);
}
