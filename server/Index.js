const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const ModelBook = require('./Models/ModelBook')
const User = require('./Models/ModelUser')

const app = express();

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions));



app.use(express.json());


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

//////////        USER REGISTRATION - ACCOUNT CREATION
app.post('/register', async (req, res) => {

  const { userName, password, userEmail } = await req.body
  if( !userName || !password || !userEmail )return res.status(400).json({'message': 'Username and Password are required'});
  //const newUser = await ModelUser(req.body)


  //const duplicate = await ModelUser.find(person => person.userName === userName || person.email === email)
  //if( duplicate) return res.sendStatus(409)//conflict
  
  try {
    // enctypt password
    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser =  User({userName, userEmail, 'password': hashedPassword})
    //store new user
    await newUser.save()
    res.status(201).json({
      status: 'success',
      message: `New User ${userName} created`,
      data: { newUser }
    })
    
  } catch (err) {
    res.status(500).json({
      status: 'failed',
      message: err
    })
  }
})


//////////        USER AUTHENTICATION - USER LOGIN
app.post('/login', async (req, res) => {

  const { password, userEmail } = await req.body
  if( !password || !userEmail )return res.status(400).json({'message': 'E-mail and Password are required'});

  //check if user exists
  //const foundUser = DB.users.find(person => person.userEmail === userEmail)
  const foundUser = await User.findOne({userEmail: userEmail}).exec();
  if (!foundUser)return res.status(401)// unauthorized

  // evaluate password
  const match = await bcrypt.compare(password, foundUser.password)
  if (match){
    res.json({'success': `User ${userEmail} ise logged in!`})

    //// create jwt

  } else {
    res.sendStatus(401)// unauthorized
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