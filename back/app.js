const express = require("express");
const mountRoutes = require("./routes");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

mountRoutes(app);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}`));
