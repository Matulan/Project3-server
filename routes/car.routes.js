const router = require("express").Router();
const Car = require('../models/Car.model');
const express = require("express");
const User = require("../models/User.model");
const fileUploader = require("../config/cloudinary.config");


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
   
    Car.create({ carType, carModel, price, capacity, image, fuelType, gear, country, state, rentPerHour, owner: _id })
    .then((response) => res.json(response))
      .catch(err => res.json(err));
  });

router.get('/addcar', (req, res, next) => {
    Car.find()
      .then(cars => res.status(200).json(cars))
      .catch(err => res.json(err));
  });

  router.post("/upload", fileUploader.single("image"), (req, res, next) => {
    // console.log("file is: ", req.file)
   
    if (!req.file) {
      next(new Error("No file uploaded!"));
      return;
    }
    
    // Get the URL of the uploaded file and send it as a response.
    // 'fileUrl' can be any name, just make sure you remember to use the same when accessing it on the frontend
    
    res.json({ fileUrl: req.file.path });
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