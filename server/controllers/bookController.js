const Book = require('../Models/ModelBook')

const getAllBooks = async (req, res) => {
  console.log("get all books: " + req.query.id);
  const allBooks = await Book.find({user: req.query.id})
  //const allBooks = await Book.find({})
  // const allBooks = await Book.find({})
  if (!allBooks) return res.status(204).json({ 'massage': 'No Books Found' });
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
  if(!req?.body){
    return res.status(400).json({'message':'Required fields not provided, try again'});
  }
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
  if(!req?.query?._id){
    return res.status(400).json({'message':'ID parameter is required.'});
  }
  console.log("update book: " + req.query._id);
  const updatedBook = await Book.findByIdAndUpdate(req.query._id, req.body, {
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
  if(!req?.query?._id){
    return res.status(400).json({'message':'ID parameter is required.'});
  }
  console.log("delete book: " + req.query._id);
  await Book.findByIdAndDelete(req.query._id)

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
  if(!req?.params?._id){
    return res.status(400).json({'message':'ID parameter is required.'});
  }
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