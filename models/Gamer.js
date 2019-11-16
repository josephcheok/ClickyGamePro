var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var GamerSchema = new Schema(
  {
    // `title` is required and of type String
    name: {
      type: String,
      required: true
    },

    state: {
      type: String,
      enum: ["ACT", "NSW", "NT", "QLD", "TAS", "VIC", "WA"],
      required: true
    },
    // `link` is required and of type String
    email: {
      type: String,
      validate: {
        validator: function(mail) {
          return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(mail);
        },
        message: props => `${props.value} is not a valid email!`
      },
      required: [true, "Email required"]
    },
    score: {
      type: Number,
      required: true
    },
    time: {
      type: Number,
      required: true
    },
    // `voucher` is an object that stores a Voucher id
    // The ref property links the VoucherId to the Gamer model
    // This allows us to populate the Gamer with an associated Voucher
    voucher: [
      {
        type: Schema.Types.ObjectId,
        ref: "Voucher"
      }
    ]
  },
  { timestamps: { createdAt: "created_at" } }
);

// This creates our model from the above schema, using mongoose's model method
var Gamer = mongoose.model("Gamer", GamerSchema);

// Export the Article model
module.exports = Gamer;
