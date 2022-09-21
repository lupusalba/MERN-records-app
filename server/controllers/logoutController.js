const User = require('../Models/ModelUser')

const handleLogout = async(req, res) => {
  // on client also delete accessToken

  const { cookies } =  req.cookies
  if(!cookies?.jwt) return res.sendStatus(204)// no content
  const refreshToken = cookies.jwt;

  //check if refresh token is in DB
  const foundUser = await User.findOne({refreshToken : refreshToken}).exec();
  
  if (!foundUser){
    res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
    return res.sendStatus(403)
  }
  
  // delete refreshToken In DB
  foundUser.refreshToken = '';
  const result = await foundUser.save();
  console.log(result);

  res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
  res.sendStatus(204);


}

module.exports = { handleLogout }


