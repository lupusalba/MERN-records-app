const express = require('express');
const router = express.Router();
const bookController = require('../../controllers/bookController')
const ROLES_LIST = require('../../config/roles_list')
const verifyRoles = require('../../middleware/verifyRoles')


// router.route('/')
//   .get(bookController.getAllBooks)
//   .post( bookController.createNewBook)
//   .patch( bookController.updateBook)
//   .delete(bookController.deleteBook)

  // router.route('/')
  // .get(bookController.getAllBooks)
  // .post(verifyRoles(ROLES_LIST.Admin), bookController.createNewBook)
  // .patch(verifyRoles(ROLES_LIST.Admin), bookController.updateBook)
  // .delete(verifyRoles(ROLES_LIST.Admin), bookController.deleteBook)


  router.route('/')
  .get(bookController.getAllBooks)
  .post(bookController.createNewBook)
  .patch(bookController.updateBook)
  .delete(bookController.deleteBook)

router.route('/:_id')
  .get(bookController.getBook)

module.exports = router