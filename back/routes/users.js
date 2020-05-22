const Router = require("express-promise-router");
const Joi = require("joi");

const db = require("../db");

// create a new express-promise-router
// this has the same API as the normal express router except
// it allows you to use async functions as route handlers
const router = new Router();

// export our router to be mounted by the parent application
module.exports = router;

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
  const { rows } = await db.query("SELECT * FROM users WHERE username = $1", [
    req.body.username,
  ]);
  if (rows[0]) return res.status(400).send("This username is already taken");
  const queryString = `INSERT INTO 
    users(mail, username, pass_word) 
    VALUES('${req.body.mail}', '${req.body.username}', '${req.body.pass_word}')`;
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
    pass_word: Joi.string().min(3).alphanum().required(),
  };

  return Joi.validate(user, schema);
}
