const User = require('../Models/ModelUser')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const handleLogin = async (req, res) => {
  const { password, userEmail } = req.body
  if( !password || !userEmail ) return res.status(400).json({'message': 'E-mail and Password are required'});
  
  //check if user exists
  const foundUser = await User.findOne({userEmail: userEmail}).exec();
  if (!foundUser){
    console.log('user not found');
    return res.sendStatus(401)// unauthorized
  }

  // evaluate password
  const match = await bcrypt.compare(password, foundUser.password)
  if (match){
    const roles = Object.values(foundUser.roles).filter(Boolean);
    console.log( `User ${userEmail} ise logged in!`)

    //// create jwt
    const accessToken = jwt.sign(
      {
        "UserInfo": {
          "userEmail": foundUser.userEmail,
          "roles": roles
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '1h' } // 5 or to 15min to be in production 
    );
    const refreshToken = jwt.sign(
      { "userEmail": foundUser.userEmail },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: '1d' }
    );
    // saving refresh token with current user
    foundUser.refreshToken = refreshToken;
    const result = await foundUser.save();
      console.log(result)
      console.log(roles)
      console.log("refreshToken " + refreshToken)

        // Creates Secure Cookie with refresh token
        res.cookie('jwt', refreshToken, { httpOnly: true,  sameSite: 'None', maxAge: 24 * 60 * 60 * 1000 });//secure: true,
        // Send authorization roles and access token to user
        res.json({ roles, accessToken });
  } else {
    res.sendStatus(401)// unauthorized
  }
}

module.exports = { handleLogin }


