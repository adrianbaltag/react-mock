// wraps asynchronous route handlers and automatically catches any errors thrown by the handler, passing them to the next error handling middleware or the default error handler, allowing you to handle errors in a consistent way
const asyncHandler = require("express-async-handler");

// ===== create CRUD user functions logic for the routes ===

// @description   Get all hangouts
// @route         GET /api/hangouts
// @access        Private
const getHangouts = asyncHandler(async (req, res) => {
  console.log(req.body);
  res.json({ message: "Get all hangouts" });
});

// @description   Create a hangout
// @route         POST /api/hangouts
// @access        Private
const postHangout = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    // if there is no text field, throw an error
    res.status(400);
    throw new Error("Text is required");
  }
  res.json({ message: "Create a  hangout" });
});

// @description   Update a hangout
// @route         PUT /api/hangouts:id
// @access        Private
const putHangout = asyncHandler(async (req, res) => {
  res.json({ message: `Update hangout ${req.params.id}` });
});

// @description   Delete a hangout
// @route         DELETE /api/hangouts:id
// @access        Private
const deleteHangout = asyncHandler(async (req, res) => {
  res.json({ message: `Delete  hangout ${req.params.id}` });
});
//export the functions to be used in the routes
module.exports = {
  getHangouts,
  postHangout,
  putHangout,
  deleteHangout,
};
