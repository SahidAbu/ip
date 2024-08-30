const express = require('express');
const UserController = require('../controller/user-controller');

const userController = new UserController();

const router = express.Router();


router.route('/get-user')
    .get(userController.getUserDetails);



router.route('/placeholder')
    .get(userController.jsonPlaceholder);




router.route('/register-user')
    .post(userController.registerUser)



module.exports = router;