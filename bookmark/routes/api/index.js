// dependencies 
const path = require('path');
const router = router = require('express').Router();
const bookRoutes = require('./books');
const googleRoutes = require('./google');

// Book routes
routes.use('/books', bookRoutes);

// Google Routes
router.use('/google', googleRoutes);

// derfault html route
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"))
});

module.exports = router; 