const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
    {
    cartype: {
      type: String,
      required: true},
    carmodel: {
      type: String,
      required: true},
    price: {
      type: Number,
      required: true},
    passengers: {
      type: Number,
      required: true},
    picture: {
        type: String,
        required: true,
         },
    engine: {
      type: String,
      required: true},
    gear: {
      type: String,
      required: true}
    },
    {
      // this second object adds extra properties: `createdAt` and `updatedAt`
      timestamps: true,
    }
    )


const User = model("User", userSchema);

module.exports = User;