// ===== create CRUD user functions logic for the routes ===

// @description   Get all users
// @route         GET /api/users
// @access        Private
const getUsers = (req, res) => {
  console.log(req.body);
  res.json({ message: "Get all users" });
};

// @description   Create a user
// @route         POST /api/users
// @access        Private
const postUser = (req, res) => {
  res.json({ message: "Create a  user" });
};

// @description   Update a user
// @route         PUT /api/users:id
// @access        Private
const putUser = (req, res) => {
  res.json({ message: `Update user ${req.params.id}` });
};

// @description   Delete a user
// @route         DELETE /api/users:id
// @access        Private
const deleteUser = (req, res) => {
  res.json({ message: `Delete  user ${req.params.id}` });
};
//export the functions to be used in the routes
module.exports = {
  getUsers,
  postUser,
  putUser,
  deleteUser,
};
