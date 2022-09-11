const express = require('express');
const router = express.Router();
const bookController = require('../../controllers/bookController')


router.route('/books').get(bookController.getAllBooks)
router.route('/new-book').post(bookController.createNewBook)
router.route('/update-book/:_id').patch(bookController.updateBook)
router.route('/delete-book/:_id').delete(bookController.deleteBook)



module.exports = router