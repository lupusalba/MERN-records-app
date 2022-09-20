const User = require('../Models/ModelUser')
const bcrypt = require('bcrypt')

const handleNewUser =  async (req, res) => {

  const { userName, password, userEmail } = await req.body
  if( !userName || !password || !userEmail )return res.status(400).json({'message': 'Username and Password are required'});
  //const newUser = await ModelUser(req.body)


  //const duplicate = await ModelUser.find(person => person.userName === userName || person.email === email)
  //if( duplicate) return res.sendStatus(409)//conflict
  
  try {
    // enctypt password
    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser =  User({
      userName,
      "roles": { "User" : 2001 },
      userEmail,
      'password': hashedPassword
    })
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
}

module.exports = { handleNewUser }