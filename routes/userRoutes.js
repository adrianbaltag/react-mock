// add express
const express = require("express");
// create a variable called router
const router = express.Router();

// add the controller functions
const {
  getUsers,
  postUser,
  putUser,
  deleteUser,
} = require("../controllers/userController");

// ====== create the routes for the CRUD functions ========

// router.get("/", getUsers);
// router.post("/", postUser);
// router.put("/:id", putUser);
// router.delete("/:id", deleteUser);
// chain the routes
router.route("/").get(getUsers).post(postUser);
router.route("/:id").put(putUser).delete(deleteUser);
// ==========================================================
// export the router to be used in the server.js file
module.exports = router;
