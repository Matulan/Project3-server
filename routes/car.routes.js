const router = require("express").Router();
const Car = require('../models/Car.model');


router.post('/cars', (req, res, next) => {
    const { carType, carModel, price, passengers, picture, engine, gear } = req.body;
   
    Car.create({ carType, carModel, price, passengers, picture, engine, gear })
      .then(response => res.json(response))
      .catch(err => res.json(err));
  });

router.get('/cars', (req, res, next) => {
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
    const {carType, carModel, price, passengers, picture, engine, gear} = req.body;

    Car.findByIdAndUpdate(carId, {carType, carModel, price, passengers, picture, engine, gear}, {new: true} )
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