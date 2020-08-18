// dependencies 
const router = require('express');
const googleController = require('../../controllers/googleController');

router 
    .router('/')
    .get(googleController.findAll);

    module.exports = router; 
