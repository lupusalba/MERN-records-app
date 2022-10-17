const User = require('../Models/ModelUser')
const jwt = require('jsonwebtoken');


const handleRefreshToken = async (req, res) => {
   // console.log(req)
    const cookies = req.cookies;
    console.log("this is cookie " + cookies.jwt);
    // if (!cookies?.jwt) return res.sendStatus(401);
    if (!cookies?.jwt) {console.log("no cookies"); console.log(cookies); return res.sendStatus(401);}
    const refreshToken = cookies.jwt;

    const foundUser = await User.findOne({ refreshToken }).exec();
    console.log("found user ---------------------------------------------------------" + foundUser)
   // console.log("rtk foundUser" + foundUser.userName)
    if (!foundUser) return res.sendStatus(403); //Forbidden 
    // evaluate jwt 
    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (err, decoded) => {
            if (err || foundUser.userName !== decoded.UserInfo.userName) {console.log("err " + err + "decoded " + decoded.UserInfo.userName); return res.sendStatus(403);}
            const roles = Object.values(foundUser.roles);
            console.log("user roles from rtc: " + roles)
            const accessToken = jwt.sign(
                {
                    "UserInfo": {
                        "userName": decoded.userName,
                        "roles": roles
                    }
                },
                process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: '1h' }
            );
            res.json({ roles, accessToken })
        }
    );
}

module.exports = { handleRefreshToken }