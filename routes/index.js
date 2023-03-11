const express = require('express');
const userRoutes  = require('./../modules/users/user.routes');
const restaurentRoutes  = require('./../modules/restaurent/restaurent.route');
const { version } = require('./../package.json');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(`API Endpoint is working. Version - ${version}`);
});

// Main Routes
router.use('/user', userRoutes);
router.use('/restaurent', restaurentRoutes);

module.exports = router;
