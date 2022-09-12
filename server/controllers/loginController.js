const User = require('../Models/ModelUser')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const handleLogin = async (req, res) => {
  console.log(req.body)
  const { password, userEmail } = await req.body
  if( !password || !userEmail )return res.status(400).json({'message': 'E-mail and Password are required'});
  
  //check if user exists
  const foundUser = await User.findOne({userEmail: userEmail}).exec();
  if (!foundUser)return res.status(401)// unauthorized
  console.log("bingo")
  // evaluate password
  const match = await bcrypt.compare(password, foundUser.password)
  if (match){
    //res.json({'success': `User ${userEmail} ise logged in!`})

    //// create jwt
    const accessToken = jwt.sign(
      { "userEmail": foundUser.userEmail },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '1h' } // 5 or to 15min to be in production 
    );
    const refreshToken = jwt.sign(
      { "userEmail": foundUser.userEmail },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: '1d' }
    );
    console.log(refreshToken)
    // saving refresh token with current user
    foundUser.refreshToken = refreshToken;
    const result = await foundUser.save();
    console.log(result)

    // Creates Secure Cookie with refresh token
    res.cookie('jwt', refreshToken, { httpOnly: true, secure: true, sameSite: 'None', maxAge: 24 * 60 * 60 * 1000 });

    res.json({ accessToken });
  } else {
    res.sendStatus(401)// unauthorized
  }
}

module.exports = { handleLogin }


