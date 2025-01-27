const db = require("../database/dbConfig");
const server = require("../api/server");
const request = require("supertest")(server);

beforeEach(async () => {
  await db("users").truncate();
});

describe("Authentication", () => {
  it("Users are able to sign up", () => {
    return request
      .post("/api/register")
      .send({
        username: "Pamela",
        password: "pass"
      })
      .expect(201)
      .expect("Content-Type", /json/);
  });
  it("Users are able to login", async () => {
    return request
      .post("/api/register")
      .send({
        username: "Pamela",
        password: "pass"
      })
      .then(res => {
        return request
          .post("/api/login")
          .send({
            username: "Pamela",
            password: "pass"
          })
          .expect(200);
      });
  });

  it("Gives error message when username or password is not inputed", () => {
    return request
      .post("/api/register")
      .send({
        username: "Jane"
      })
      .expect(500);
  });
});
