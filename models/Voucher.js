var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
var VoucherSchema = new Schema({
  // `title` is of type String
  code: {
    type: String,
    required: true
  },

  discount: {
    type: Number,
    required: true
  },

  expiry: {
    type: Date,
    required: true
  },

  displayed: {
    type: Boolean
  },

  gamer: [
    {
      type: Schema.Types.ObjectId,
      ref: "Gamer"
    }
  ]
  // `body` is of type String
});

// This creates our model from the above schema, using mongoose's model method
var Voucher = mongoose.model("Voucher", VoucherSchema);

// Export the Note model
module.exports = Voucher;
