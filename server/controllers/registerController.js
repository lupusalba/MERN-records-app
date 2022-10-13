const User = require('../Models/ModelUser')
const bcrypt = require('bcrypt')

const handleNewUser =  async (req, res) => {

  const { userName, password, userEmail } = await req.body
  if( !userName || !password || !userEmail )return res.status(400).json({'message': 'Username and Password are required'});
  //const newUser = await ModelUser(req.body)


  const duplicate = await User.findOne({userEmail : userEmail}).exec();
  if( duplicate) return res.sendStatus(409)//conflict
  
  try {
    // encrypt password
    const hashedPassword = await bcrypt.hash(password, 10)

    //create new user
    const result = await User.create({
      "userName": userName,
      "userEmail": userEmail,
      "password": hashedPassword
    })

    res.status(201).json({'success': `New User ${userEmail} created`});

    
  } catch (err) {
    res.status(500).json({
      status: 'failed',
      message: err
    })
  }
}

module.exports = { handleNewUser }