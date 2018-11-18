const Model = require('../model');

const {Product, Manufacturer} = Model;

const manufacturerController = {
  all(req, res) {
    Manufacturer.find({})
      .exec((err, manufacturers) => res.json(manufacturers));
  },
};

module.exports = manufacturerController;
