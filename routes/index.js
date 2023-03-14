const express = require('express')
const router = express.Router();

const homeController = require('../controllers/home_controller');
console.log(`router loaded`);

//function in home_controllers.js
router.get('/', homeController.home);

module.exports = router;

 


