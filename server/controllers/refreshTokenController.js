const User = require('../Models/ModelUser')
const jwt = require('jsonwebtoken');

const handleRefreshToken = (req, res) => {
  const { cookies } =  req.cookies
  if(!cookies?.jwt) return res.sendStatus(401)
  console.log(cookies.jwt);

  console.log("have coockie");

  const refreshToken = cookies.jwt;
  //check if user exists
  const foundUser = User.findOne({refreshToken: refreshToken}).exec();

  console.log(foundUser);

  if (!foundUser) {
    console.log("user not found");
    return res.sendStatus(403)// forbidden
  }
  
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


