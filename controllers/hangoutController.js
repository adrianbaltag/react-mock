// wraps asynchronous route handlers and automatically catches any errors thrown by the handler, passing them to the next error handling middleware or the default error handler, allowing you to handle errors in a consistent way
const asyncHandler = require("express-async-handler");

// import the hangout model
const Hangout = require("../models/hangoutModel");
const { error } = require("console");

// ===== create CRUD user functions logic for the routes ===

// @description   Get all hangouts
// @route         GET /api/hangouts
// @access        Private
const getHangouts = asyncHandler(async (req, res) => {
  // get all hangouts from the database
  const hangouts = await Hangout.find();
  // send the hangouts to the client
  res.json(hangouts);
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
  // create a new hangout
  const hangout = await new Hangout({
    text: req.body.text,
  });

  // save the hangout to the database
  const savedHangout = await hangout.save();

  res.json(savedHangout);
});

// @description   Update a hangout
// @route         PUT /api/hangouts:id
// @access        Private
const putHangout = asyncHandler(async (req, res) => {
  // update the hangout
  const hangout = await Hangout.findById(req.params.id);
  // check if the hangout exists
  if (!hangout) {
    res.status(404);
    throw new Error("Hangout not found");
  }
  // update the hangout
  const updatedHangout = await Hangout.findByIdAndUpdate(
    req.params.id,
    req.body,
    // create it if it doesn't exist
    { new: true }
  );

  res.json(updatedHangout);
});

// @description   Delete a hangout
// @route         DELETE /api/hangouts:id
// @access        Private
const deleteHangout = asyncHandler(async (req, res) => {
  // delete the hangout

  const hangout = await Hangout.findById(req.params.id);
  // check if the hangout exists
  if (!hangout) {
    res.status(404);
    throw new Error("Hangout not found");
  }
  // delete the hangout
  await hangout.deleteOne({ _id: req.params.id });

  // need the id for the front end to delete the hangout from the state

  res.json({ id: req.params.id });
});
//export the functions to be used in the routes
module.exports = {
  getHangouts,
  postHangout,
  putHangout,
  deleteHangout,
};
