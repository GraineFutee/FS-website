const Router = require("express-promise-router");
const Joi = require("joi");

const db = require("../db");

// create a new express-promise-router
// this has the same API as the normal express router except
// it allows you to use async functions as route handlers
const router = new Router();

// export our router to be mounted by the parent application
module.exports = router;

router.get("/lists/:id", async (req, res) => {
  const username_id = req.params.id;
  console.log(username_id);
  const queryString = `SELECT * FROM lists WHERE id_user_creator = '${username_id}'`;
  console.log(queryString);
  const { rows } = await db.query(queryString);
  console.log(rows);
  res.send(rows);
});

router.get("/:id", async (req, res) => {
  const username = req.params.id;
  console.log(username);
  const queryString = `SELECT * FROM users WHERE username = '${username}'`;
  console.log(queryString);
  const { rows } = await db.query(queryString);
  console.log(rows);
  if (!rows[0])
    return res.status(404).send("The username is incorrect or doesn't exist"); // 404 Not found
  res.send(rows[0]);
});

router.post("/", async (req, res) => {
  const { error } = validateUser(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  let usernameError = await db.query(
    "SELECT * FROM users WHERE username = $1",
    [req.body.username]
  );
  usernameError = usernameError.rows;
  if (usernameError[0])
    return res.status(400).send("This username is already taken");
  let mailError = await db.query("SELECT * FROM users WHERE mail = $1", [
    req.body.mail,
  ]);
  mailError = mailError.rows;
  if (mailError[0]) return res.status(400).send("This mail is already taken");
  const queryString = `INSERT INTO 
    users(mail, username, password) 
    VALUES('${req.body.mail}', '${req.body.username}', '${req.body.password}')`;
  db.query(queryString);
  res.send(req.body);
  console.log(req.body);
  console.log("Has been inserted in users");
  // Insert in DB
});

function validateUser(user) {
  const schema = {
    mail: Joi.string().email().required(),
    username: Joi.string().min(3).alphanum().required(),
    password: Joi.string().min(3).alphanum().required(),
  };

  return Joi.validate(user, schema);
}
