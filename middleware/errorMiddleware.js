// fs that exe during the req / res cycle
// defined an error handling middleware that sends an error response to the client when an error occurs in the req / res cycle of the server
const errorHandler = (err, req, res, next) => {
  //
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.status(statusCode);
  res.json({
    message: err.message,
  });
};

// export the error handler to be used in the server.js file
module.exports = { errorHandler };
