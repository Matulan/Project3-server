const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const rentaluserSchema = new Schema(
    {
        email: {
          type: String,
          required: true,
          unique: true},
        firstName: String,
        lastName: String,
        adress: String,
        postBox: String,
        password: {
          type: String,
          required: true},
        accountDetails: String,
        picture: {
          type: String,
          },
    picture: {
      type: String,
    },
    cars: [
      {
        type: Schema.Types.ObjectId,
        ref: "Car",
      },
    ],
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const RentalUser = model("RentalUser", rentaluserSchema);

module.exports = RentalUser;
