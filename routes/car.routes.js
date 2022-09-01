const router = require("express").Router();
const Car = require('../models/Car.model');
const User = require("../models/User.model");



router.get("/getallcars", async (req, res) => {
  try {
    const cars = await Car.find();
    res.send(cars);
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.post('/addcar', (req, res, next) => {
    const { carType, carModel, price, capacity, image, fuelType, gear, country, state, rentPerHour } = req.body;
    const {_id} = req.payload
    console.log("heeeeere__________________", _id)
   
    Car.create({ carType, carModel, price, capacity, image, fuelType, gear, country, state, rentPerHour, owner: _id })
    .then((response) =>{
        console.log(response)
        res.json(response)})
      .catch(err => res.json(err));
  });

router.get('/addcar', (req, res, next) => {
    Car.find()
      .then(cars => res.status(200).json(cars))
      .catch(err => res.json(err));
  });

 
router.get('/cars/:carId', (req, res, next) => {
    const {carId} = req.params;

    Car.findById(carId)
    .then(car => res.status(200).json(car))
    .catch(err => res.json(err));
});


router.put('/cars/:carId', (req, res, next) => {
    const {carId} = req.params
    const {carType, carModel, price, capacity, image, fuelType, gear, country, state, rentPerHour} = req.body;

    Car.findByIdAndUpdate(carId, {carType, carModel, price, capacity, image, fuelType, gear, country, state, rentPerHour}, {new: true} )
    .then((car) => res.status(201).json(car))
    .catch(err => res.json(err));
});
//Delete - Delete
router.delete('/cars/:carId', (req, res, next) => {
    const { carId } = req.params;

    Car.findByIdAndRemove(carId)
    .then(() => res.status(200).json({ message: `The car with id ${carId} successfully deleted.` }))
    .catch(err => res.json(err));
});



module.exports = router;