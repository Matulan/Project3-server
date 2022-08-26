const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const requestSchema = new Schema(
    {
    startDate: {
        type: String,
        required: true
    },
    endDate: {
        type: String,
        required: true
    },
    carType: {
        type: String,
        required: true
    },
    carModel: {
        type: String,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    },
    contactinformation: {
        type: String,
        required: true
    },
        },
    {
      // this second object adds extra properties: `createdAt` and `updatedAt`
      timestamps: true,
    }
    )


const Request = model("Request", requestSchema);

module.exports = Request;