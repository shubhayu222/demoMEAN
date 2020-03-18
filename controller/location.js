const mongoose = require('mongoose');
const LocationSchema = require('../db/location');

exports.getAllLocation = async (req, res) => {
    try {
      const locations = await LocationSchema.find();
      res.status(200).json({
        status: 'success',
        results: locations.length,
        data: { locations }
      });
    } catch (err) {
      res.status(404).json({
        status: 'fail',
        message: err
      });
    }
  };