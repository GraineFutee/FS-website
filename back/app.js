const express = require("express");
const mountRoutes = require("./routes");

const app = express();
mountRoutes(app);

app.use(express.json());

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));