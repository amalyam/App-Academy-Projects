const express = require("express");
const app = express();

// Phase 1 + 2
// app.use("/css", express.static("assets/css"));
//app.use("/scripts", express.static("assets/scripts"));
// app.use("/images", express.static("assets/images"));

// Phase 3
//app.use("/stylesheets", express.static("assets/css"));

// Bonus
app.use("/stickers", express.static("assets/images"));

const port = 5000;
app.listen(port, () => console.log("Server is listening on port", port));
