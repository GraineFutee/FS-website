const users = require("./users");
// const photos = require("./photos");

module.exports = (app) => {
  app.use("/api/users", users);
  //   app.use("/photos", photos);
};
