// add express
const express = require("express");
// create a variable called router
const router = express.Router();

// add the controller functions
const {
  getHangouts,
  postHangout,
  putHangout,
  deleteHangout,
} = require("../controllers/hangoutController");

// ====== create the routes for the CRUD functions ========

router.route("/").get(getHangouts).post(postHangout);
router.route("/:id").put(putHangout).delete(deleteHangout);
// ==========================================================
// export the router to be used in the server.js file
module.exports = router;
