const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Post model
var LocationSc = require('../db/location')


router.get('/', (req, res) => {
    LocationSc.find()
    .then(posts =>res.json(posts))
    .catch(err => res.status(404).json({ nopostsfound: 'No posts found' }));
});

module.exports = router;