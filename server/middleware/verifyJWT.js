// const jwt = require('jsonwebtoken');

// const verifyJWT = (req, res, next) => {
//   //console.log(req)
//   const authHeader = req.headers.authorization || req.headers.Authorization;
//   if(authHeader === "undefined") {console.log("no authorization header")}
//   console.log('authHeader: ' + authHeader);

//   if (!authHeader?.startsWith('Bearer ')) return res.sendStatus(401);
//   console.log(authHeader)

//   const token = authHeader.split(' ')[1];
  
//   jwt.verify(
//     token,
//     process.env.ACCESS_TOKEN_SECRET,
//     (err, decoded) => {
//       if(err) return res.sendStatus(403)//invalid token
//       // req.userEmail = decoded.UserInfo.userEmail;
//       req.userName = decoded.UserInfo.userName;
//       console.log(req.userName)
//       req.roles = decoded.UserInfo.roles
//       console.log(req.roles)

//       console.log(req);
//       next();
//     });
// }

// module.exports = verifyJWT

const jwt = require('jsonwebtoken');

const verifyJWT = (req, res, next) => {

    console.log('verifyJWT ..............................................................................');
    console.log('verifyJWT ..............................................................................');
    console.log('verifyJWT ..............................................................................');



    const authHeader = req.headers.authorization || req.headers.Authorization;
    console.log("authHeader " + authHeader)
    if (!authHeader?.startsWith('Bearer ')) return res.sendStatus(401);
    const token = authHeader.split(' ')[1];
    console.log(token)
    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (err, decoded) => {
            if (err) return res.sendStatus(403); //invalid token
            req.userName = decoded.UserInfo.userName;
            req.roles = decoded.UserInfo.roles;
            next();
        }
    );
}

module.exports = verifyJWT