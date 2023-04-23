// add express
const express = require("express");
// create a variable called router
const router = express.Router();

// create a route
router.get("/", (req, res) => {
  res.json({ message: "Get all users" });
});

router.post("/", (req, res) => {
  res.json({ message: "Create a  user" });
});

router.put("/:id", (req, res) => {
  res.json({ message: `Update user ${req.params.id}` });
});

router.delete("/:id", (req, res) => {
  res.json({ message: `Delete  user ${req.params.id}` });
});
// export the router
module.exports = router;
