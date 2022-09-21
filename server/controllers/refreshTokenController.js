const User = require('../Models/ModelUser')
const jwt = require('jsonwebtoken');

const handleRefreshToken = async (req, res) => {
  const { cookies } =  req.cookies
  if(!cookies?.jwt) {
    console.log('no jwt cookie found')
    return res.sendStatus(401)
  }

  const refreshToken = cookies.jwt;
  
  //check if user exists
  const foundUser = await User.findOne({ refreshToken }).exec();

  if (!foundUser) {
    console.log("user not found");
    return res.sendStatus(403)// forbidden
  }
  
  // evaluate jwt
  jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET,
    (err, decoded) => {
      if(err || foundUser.userEmail !== decoded.userEmail) return res.sendStatus(403);
      const roles = Object.values(foundUser.roles)
      const accessToken = jwt.sign(
        { 
          "UserInfo": {
            "userEmail": decoded.userEmail,
            "roles": roles
          }
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: '1h'} // to be 5min in production
      );
      res.json({ roles, accessToken})
    }
  );


}

module.exports = { handleRefreshToken }


