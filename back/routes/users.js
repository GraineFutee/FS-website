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
  const { id } = req.params;
  const { rows } = await db.query("SELECT * FROM users WHERE id = $1", [id]);
  if (!rows[0])
    return res.status(404).send("The user with the given ID was not found"); // 404 Not found
  res.send(rows[0]);
});

router.post("/", async (req, res) => {
  console.log(req.body);
  console.log(req.body.username);
  const { error } = validateUser(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const { rows } = await db.query("SELECT * FROM users WHERE username = $1", [
    req.body.username,
  ]);
  if (rows[0]) return res.status(400).send("The username already exist");
  console.log("data received");
  console.log(req.body);
  res.send(req.body);
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
