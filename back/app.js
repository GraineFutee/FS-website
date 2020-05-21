const express = require("express");
const mountRoutes = require("./routes");
const bodyParser = require("body-parser");

const app = express();

app.use(express.json());

mountRoutes(app);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}`));
