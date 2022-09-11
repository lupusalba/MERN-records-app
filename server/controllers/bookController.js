const Book = require('../Models/ModelBook')

const getAllBooks = async (req, res) => {
  const allBooks = await Book.find({})
  if (!allBooks) return res.status(204).json({ 'massage': 'No Boos Found' });
  //res.json({ allBooks })

  try {
    res.status(200).json({
      status: "success",
      data: { allBooks }
    })
  } catch (err) {
    res.status(500).json({
      status: "failed",
      message: err
    })
  }
}

const createNewBook = async (req, res) => {
  const newBook = new Book(req.body)
  try {
    await newBook.save()
    res.status(201).json({
      status: 'Success',
      data: {
        newBook
      }
    })
  } catch (err) {
    res.status(500).json({
      status: 'Failed',
      message: err
    })
  }
}

const updateBook = async (req, res) => {
  const updatedBook = await Book.findByIdAndUpdate(req.params._id, req.body, {
    new: true,
    runValidators: true
  })
  try {
    res.status(200).json({
      status: "success",
      data: {
        updatedBook
      }

    })
  } catch (err) {
    console.log(err)
  }
}

const deleteBook = async (req, res) => {
  await Book.findByIdAndDelete(req.params.id)

  try {
    res.status(204).json({
      status: "success",
      data: {}
    })
  } catch (err) {
    res.status(500).json({
      status: "failed",
      message: err
    })
  }
}

const getBook = async (req, res) => {
  const oneBook = await Book.findById(req.params._id)
  try {
    res.status(200).json({
      status: "success",
      data: { oneBook }
    })
  } catch (err) {
    res.status(500).json({
      status: "failed",
      message: err
    })
  }
}

module.exports = {
  getAllBooks,
  createNewBook, 
  updateBook,
  deleteBook,
  getBook
}