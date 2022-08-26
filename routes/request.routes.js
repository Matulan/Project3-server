const router = require("express").Router();
const Request = require('../models/Request.model');


router.post('/request', (req, res, next) => {
    const { startDate, endDate, carType, carModel, totalPrice, contactinformation } = req.body;
   
    Request.create({ startDate, endDate, carType, carModel, totalPrice, contactinformation })
      .then(response => res.json(response))
      .catch(err => res.json(err));
  });

router.get('/request', (req, res, next) => {
    Request.find()
      .then(cars => res.status(200).json(cars))
      .catch(err => res.json(err));
  });
 
router.get('/request/:requestId', (req, res, next) => {
    const {requestId} = req.params;

    Request.findById(requestId)
    .then(car => res.status(200).json(car))
    .catch(err => res.json(err));
});


router.put('/request/:requestId', (req, res, next) => {
    const {requestId} = req.params;
    const {startDate, endDate, carType, carModel, totalPrice, contactinformation} = req.body;

    Request.findByIdAndUpdate(requestId, {startDate, endDate, carType, carModel, totalPrice, contactinformation}, {new: true} )
    .then((request) => res.status(201).json(request))
    .catch(err => res.json(err));
});
//Delete - Delete
router.delete('/request/:requestId', (req, res, next) => {
    const { requestId } = req.params;

    Request.findByIdAndRemove(requestId)
    .then(() => res.status(200).json({ message: `The request with id ${requestId} successfully deleted.` }))
    .catch(err => res.json(err));
});  



module.exports = router;