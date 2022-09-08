const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const ModelBook = require('./Models/ModelBook')
const ModelUser = require('./Models/ModelUser')

const app = express();

// const router = express.router();

const AllowedOrigins = {
  origin:[ 'http://localhost/8080/register', 'http://localhost/3000/register']
}

app.use(express.json());
app.use(cors(AllowedOrigins));


const PORT = 8080;

app.listen(PORT, () => {
  console.log('listening on port ' + PORT);
});

//conect to database
const DB = 'mongodb+srv://admin:2khpm57pTE6y2Rg@readersrecords.grfazqk.mongodb.net/bookData?retryWrites=true&w=majority';
mongoose.connect(DB, {
  useNewUrlParser: true
}).then(() => {
  console.log('DB CONECTED...')
});

/////////////////////////////
     // USER API
/////////////////////////////
app.post('/register', async (req, res) => {
  const newUser = await ModelUser(req.body)
  try {
    await newUser.save()
    res.status(201).json({
      status: 'success',
      data: { newUser }
    })
  } catch (err) {
    res.status(500).json({
      status: 'failed',
      message: err
    })
  }
})



/////////////////////////////
     // BOOK API
/////////////////////////////
app.post('/new-book', async(req,res) => {
  const Book = new ModelBook(req.body)
  try{
      await Book.save()
      res.status(201).json({
          status: 'Success',
          data : {
              Book
          }
      })
  }catch(err){
      res.status(500).json({
          status: 'Failed',
          message : err
      })
  }
})

app.get('/books',  async(req, res) => {
  const allBooks = await ModelBook.find({})
  try {
    res.status(200).json({
      status: "success",
      data: {allBooks}
    })
  } catch(err) {
    res.status(500).json({
      status: "failed",
      message: err
    })
  }
})

app.get('/book/:_id',  async(req, res) => {
  const oneBook = await ModelBook.findById(req.params._id)
  try {
    res.status(200).json({
      status: "success",
      data: {oneBook}
    })
  } catch(err) {
    res.status(500).json({
      status: "failed",
      message: err
    })
  }
})


app.patch('/update-book/:_id', async(req, res) => {
  const updatedBook = await ModelBook.findByIdAndUpdate(req.params._id, req.body, {
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
  } catch(err) {
    console.log(err)
  }
})


app.delete('/delete-book/:id', async(req, res) => {
  await ModelBook.findByIdAndDelete(req.params.id)

  try{
    res.status(204).json({
      status: "success",
      data: {}
    })
  } catch(err) {
    res.status(500).json({
      status: "failed",
      message: err
    })
  }
})