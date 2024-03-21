// Instantiate Express and the application - DO NOT MODIFY
const express = require("express");
const app = express();

// Error handling, env variables, and json middleware - DO NOT MODIFY
require("express-async-errors");
require("dotenv").config();
app.use(express.json());

// Import the models used in these routes - DO NOT MODIFY
const { Puppy } = require("./db/models");

// Index of all puppies - DO NOT MODIFY
app.get("/puppies", async (req, res, next) => {
  const allPuppies = await Puppy.findAll({ order: [["name", "ASC"]] });

  res.json(allPuppies);
});

// STEP 1: Update a puppy by id
app.put("/puppies/:puppyId", async (req, res, next) => {
  const puppy = await Puppy.findByPk(req.params.puppyId);

  if (puppy) {
    const updates = {};
    if (req.body.ageYrs) {
      updates.ageYrs = req.body.ageYrs;
    }
    if (req.body.weightLbs) {
      updates.weightLbs = req.body.weightLbs;
    }
    if (req.body.microchipped !== undefined) {
      updates.microchipped = req.body.microchipped;
    }
    await puppy.update(updates);

    res.json({
      message: "Puppy was successfully updated",
      puppy,
    });
  } else {
    res.status(400).json({
      message: "Puppy not found",
    });
  }
});

// STEP 2: Delete a puppy by id
app.delete("/puppies/:puppyId", async (req, res, next) => {
  const puppy = await Puppy.findOne({ where: { id: req.params.puppyId } });
  try {
    await puppy.destroy();
    res.json({ message: "Puppy successfully deleted", puppy });
  } catch (e) {
    res.status(500).json({
      message: "Failed to delete puppy",
    });
  }
});

// Root route - DO NOT MODIFY
app.get("/", (req, res) => {
  res.json({
    message: "API server is running",
  });
});

// Set port and listen for incoming requests - DO NOT MODIFY
if (require.main === module) {
  const port = 8000;
  app.listen(port, () => console.log("Server is listening on port", port));
} else {
  module.exports = app;
}
