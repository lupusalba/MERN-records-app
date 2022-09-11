const express = require('express');
const router = express.Router();
const usersController = require('../../controllers/userController')


router.route('/')
  .get(usersController.getAllUsers)
  .delete(usersController.deleteUser);

router.route('/:_id')
  .get(usersController.getUser);

module.exports = router;