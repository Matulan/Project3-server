const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const carSchema = new Schema(
    {
    carType: {
      type: String,
      required: true},
    carModel: {
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


const Car = model("Car", carSchema);

module.exports = Car;