const express = require('express');
const router = express.Router();
const bookController = require('../../controllers/bookController')


router.route('/')
  .get(bookController.getAllBooks)
  .post(bookController.createNewBook)
  .patch(bookController.updateBook)
  .delete(bookController.deleteBook)

router.route('/:_id')
  .get(bookController.getBook)

module.exports = router