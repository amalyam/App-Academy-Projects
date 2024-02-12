const express = require("express");
const app = express();

// app.use("/css", express.static("assets/css"));
app.use("/scripts", express.static("assets/scripts"));
// app.use("/images", express.static("assets/images"));

app.use("/stylesheets", express.static("assets/css"));

const port = 5000;
app.listen(port, () => console.log("Server is listening on port", port));
