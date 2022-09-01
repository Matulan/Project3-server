const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const carSchema = new Schema(
    {
    carType: {type: String, required: true},
    carModel: {type: String, required: true},
    cardInfo: {type: Number},
    capacity: {type: Number, required: true},
    image: {type: String},
    fuelType: {type: String, required: true},
    country: {type: String, required: true},
    state: {type: String, required: true},
    gear: {type: String, required: true},
    owner: {type: Schema.Types.ObjectId, ref: "User"},
    bookedTimeSlots: [
      {
        from: { type: String },
        to: { type: String},
      },
    ],
    rentPerHour: {type: Number},
  },
    {
      // this second object adds extra properties: `createdAt` and `updatedAt`
      timestamps: true,
    }
    )


const Car = model("Car", carSchema);

module.exports = Car;