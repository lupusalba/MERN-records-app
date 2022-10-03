const User = require('../Models/ModelUser')
const jwt = require('jsonwebtoken');


const handleRefreshToken = async (req, res) => {
    const cookies = req.cookies;
    console.log('cookie ' + cookies)
    if (!cookies?.jwt) return res.sendStatus(401);
    const refreshToken = cookies.jwt;

    const foundUser = await User.findOne({ refreshToken }).exec();
    if (!foundUser) return res.sendStatus(403); //Forbidden 
    // evaluate jwt 
    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (err, decoded) => {
            if (err || foundUser.userName !== decoded.userName) return res.sendStatus(403);
            const roles = Object.values(foundUser.roles);
            const accessToken = jwt.sign(
                {
                    "UserInfo": {
                        "username": decoded.userName,
                        "roles": roles
                    }
                },
                process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: '10s' }
            );
            res.json({ roles, accessToken })
        }
    );
}

module.exports = { handleRefreshToken }

// OLD
// const handleRefreshToken = async (req, res) => {
//     const cookies = req.cookies;
//     if (!cookies?.jwt) { console.log('no cookies RefreshTokenController'); return res.sendStatus(401); }
//     const refreshToken = cookies.jwt;

//     const foundUser = await User.findOne({ refreshToken }).exec();
//     if (!foundUser) return res.sendStatus(403); //Forbidden 
//     console.log('Found user: ' + foundUser);
//     // evaluate jwt 
//     jwt.verify(
//         refreshToken,
//         process.env.REFRESH_TOKEN_SECRET,
//         (err, decoded) => {
//             control.log("FOUNDuSER: " + foundUser.userName)
//             control.log("DECODED USERNAME: " + decoded.userName)
//             if (err || foundUser.userName !== decoded.userName) return res.sendStatus(403);
//             const roles = Object.values(foundUser.roles);
//             const accessToken = jwt.sign(
//                 {
//                     "UserInfo": {
//                         "userName": foundUser.userName,
//                         "roles": roles
//                     },
//                 },
//                 process.env.ACCESS_TOKEN_SECRET,
//                 { expiresIn: '10s' }
//             );
//             res.json({ roles, accessToken })
//         }
//     );
// }


// module.exports = { handleRefreshToken }


