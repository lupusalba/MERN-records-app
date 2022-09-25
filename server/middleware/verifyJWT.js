const jwt = require('jsonwebtoken');

const verifyJWT = (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;
  if (!authHeader?.startsWith('Bearer ')) return res.sendStatus(401);
  console.log(JSON.stringify(req.user))

  const token = authHeader.split(' ')[1];
  
  jwt.verify(
    token,
    process.env.ACCESS_TOKEN_SECRET,
    (err, decoded) => {
      if(err) return res.sendStatus(403)//invalid token
      // req.userEmail = decoded.UserInfo.userEmail;
      req.user = decoded.UserInfo.userName;
      req.roles = decoded.UserInfo.roles
      next();
    });
}

module.exports = verifyJWT