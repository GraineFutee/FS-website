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
  const id = req.params.id;
  console.log(id);
  const queryString = `SELECT 
    a.id id, a.name list_name, a.description description,  creation, c.username, b.name element_name, b.description element_description, unite, is_stock, stock, stock_minimum, need 
    FROM lists a LEFT JOIN elements b ON a.id = b.id_list LEFT JOIN users c ON a.id_user_creator = c.id WHERE a.id = ${id}`;
  console.log(queryString);
  const { rows } = await db.query(queryString);
  console.log(rows);
  if (!rows[0])
    return res.status(404).send("The id is incorrect or doesn't exist"); // 404 Not found
  res.send(rows);
});

router.get("/", async (req, res) => {
  const queryString = "SELECT * FROM lists";
  console.log(queryString);
  const { rows } = await db.query(queryString);
  console.log(rows);
  res.send(rows);
});
