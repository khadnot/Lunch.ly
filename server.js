/** Start server for Lunchly. */

const app = require("./app");

app.listen(3000, function() {
  console.log("listening on 3000");
  console.log("Nodemon I choose YOU!!");
});
