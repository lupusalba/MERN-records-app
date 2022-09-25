const express = require('express');
const router = express.Router();
const userController = require('../../controllers/userController');
const ROLES_LIST = require('../../config/roles_list');
const verifyRoles = require('../../middleware/verifyRoles');


// router.route('/')
//   .get(verifyRoles(ROLES_LIST.Admin), userController.getAllUsers)
//   .delete(verifyRoles(ROLES_LIST.Admin), userController.deleteUser);

// router.route('/')
//   .get(verifyRoles(ROLES_LIST.Admin), userController.getUser);


router.route('/')
  .get(userController.getAllUsers)
  .delete(userController.deleteUser);

router.route('/')
  .get(userController.getUser);


module.exports = router;