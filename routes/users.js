const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users_controller');
router.get('/profile', usersController.profile);

// added by Ra
const usersPosts = require('../controllers/posts_controller');
router.get('/post/', usersPosts.post);



module.exports = router;

