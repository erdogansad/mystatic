require("dotenv").config();
const app = require("./api/server.js");

app.listen(process.env.PORT, function () {
  console.log(`Listening on http://localhost:${process.env.PORT}/`);
});
