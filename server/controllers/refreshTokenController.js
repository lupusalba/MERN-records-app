const User = require('../Models/ModelUser')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const handleRefreshToken = (req, res) => {
  const { cookies } =  req.cookies
  if(!cookies?.jwt) return res.status(401)
  console.log(cookies.jwt);
  const refreshToken = cookies.jwt;
  //check if user exists
  const foundUser = User.findOne({refreshToken: refreshToken}).exec();
  if (!foundUser)return res.status(403)// forbidden
  
  // evaluate jwt
  jwt.verify(
    refreshToken,
    process.env.ACCESS_TOKEN_SECRET,
    (err, decoded) => {
      if(err || foundUser.userEmail !== decoded.userEmail) return res.sendStatus(403)
      const accessToken = jwt.sign(
        { "userEmail": decoded.userEmail},
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: '1h'} // to be 5min in production
      );
      res.json({ accessToken})
    }
  );


}

module.exports = { handleRefreshToken }


