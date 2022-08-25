const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true},
    firstName: {
      type: String,
      required: true},
    lastName: {
      type: String,
      required: true},
    adress: {
      type: String,
      required: true},
    postBox: {
      type: String,
      required: true},
    password: {
      type: String,
      required: true},
    accountDetails: {
      type: String,
      required: true},
    picture: {
      type: String,
        },
    cars: [
        {
        type: Schema.Types.ObjectId,
        ref: "Car"
            }]
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
  )
  


const User = model("User", userSchema);

module.exports = User;

