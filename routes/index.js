const express = require('express')
const router = express.Router();

const homeController = require('../controllers/home_controller');


console.log(`router loaded`);

//function in home_controllers.js
router.get('/', homeController.home);

// router.use
router.use('/users', require('./users'));
// It is little bit different from home_controllers
// I think for home_controllers is directly access by this router.
// No, that part is done in users.js



module.exports = router;

 


