const db = require("../database/dbConfig");
const server = require("../api/server");
const request = require("supertest")(server);

beforeEach(async () => {
  await db("users").truncate();
});

describe("Authentication", () => {
//   it("Users are able to login", async () => {
//     return request
//       .post("/api/login")
//       .send({
//         username: "Jim",
//         password: "pass"
//       })
//       .expect(200);
//   });
  it("Users are able to sign up", async () => {
    return request
      .post("/api/register")
      .send({
        username: "Pamela",
        password: "pass"
      })
      .expect(201)
      .expect("Content-Type", /json/);
  });

  it("Gives error message when username or password is not inputed", async () => {
    return request
      .post("/api/register")
      .send({
        username: "Jane"
      })
      .expect(500);
  });
});
