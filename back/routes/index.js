const users = require("./users");
const lists = require("./lists");
// const photos = require("./photos");

module.exports = (app) => {
  app.use("/api/users", users);
  app.use("/api/lists", lists);
  //   app.use("/photos", photos);
};
