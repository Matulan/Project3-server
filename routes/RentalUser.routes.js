const router = require("express").Router();
const RentalUser = require('../models/RentalUser.model');


router.post('/rentalUsers', (req, res, next) => {
  const { email, password} = req.body;
 
  RentalUser.create({ email, password, firstName, lastName, adress, postBox, accountDetails, picture, cars })
    .then(response => res.json(response))
    .catch(err => res.json(err));
});

router.get('/rentalUsers', (req, res, next) => {
    RentalUser.find()
      .then(rentalUsers => res.status(200).json(rentalUsers))
      .catch(err => res.json(err));
  });
 
router.get('/rentalUsers/:rentalUserId', (req, res, next) => {
    const {rentalUserId} = req.params;

    RentalUser.findById(rentalUserId)
    .then(rentalUsers => res.status(200).json(rentalUsers))
    .catch(err => res.json(err));
});


router.put('/rentalUsers/:rentalUserId', (req, res, next) => {
    const {rentalUserId} = req.params
    const {email, password, firstName, lastName , adress, postBox, accountDetails, picture, cars } = req.body;

    RentalUser.findByIdAndUpdate(rentalUserId, {email, password, firstName, lastName, adress, postBox, accountDetails, picture, cars }, {new: true} )
    .then((rentalUser) => res.status(201).json(rentalUser))
    .catch(err => res.json(err));
});

router.delete('/rentalUsers/:rentalUserId', (req, res, next) => {
    const { rentalUserId } = req.params;

    RentalUser.findByIdAndRemove(rentalUserId)
    .then(() => res.status(200).json({ message: `The rentalUsers with id ${rentalUserId} successfully deleted.` }))
    .catch(err => res.json(err));
});  



module.exports = router;