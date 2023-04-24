const mongoose = require("mongoose");

// create hangout schema
const hangoutSchema = mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
});

// export the model to be used in the controller
module.exports = mongoose.model("Hangout", hangoutSchema);
