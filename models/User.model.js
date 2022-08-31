const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
  {
    email: {type: String, required: true, unique: true},
    firstName: String,
    lastName: String,
    adress: String,
    postBox: String,
    password: {type: String, required: true},
    cardDetails: {type: String},
    picture: {type: String},
  
    },
    {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
)

const User = model("User", userSchema);

module.exports = User;

