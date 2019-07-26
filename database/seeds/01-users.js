exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        { username: "Jim", password: "$2y$12$XpBPnqINcQ6SBknpp43pV.yWrzwT.zoMrG2WEYpJ6FRo40Bx2PNPO" }
      ]);
    });
};
