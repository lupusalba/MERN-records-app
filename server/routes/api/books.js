const express = require('express');
const router = express.Router();
const bookController = require('../../controllers/bookController')
const ROLES_LIST = require('../../config/roles_list')
const verifyRoles = require('../../middleware/verifyRoles')


router.route('/')
  .get(bookController.getAllBooks)
  .post(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor), bookController.createNewBook)
  .patch(verifyRoles(ROLES_LIST.Editor), bookController.updateBook)
  .delete(verifyRoles(ROLES_LIST.Admin), bookController.deleteBook)

router.route('/:_id')
  .get(bookController.getBook)

module.exports = router