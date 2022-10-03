const User = require('../Models/ModelUser')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')



// const handleLogin = async (req, res) => {
//     // const { user, pwd } = req.body;
//     const { userName, password } = req.body;
//     if (!userName || !password) return res.status(400).json({ 'message': 'Username and password are required.' });

//     const foundUser = await User.findOne({ userName: userName }).exec();
//     if (!foundUser) return res.sendStatus(401); //Unauthorized 
//     // evaluate password 
//     const match = await bcrypt.compare(password, foundUser.password);
//     if (match) {
//         const roles = Object.values(foundUser.roles).filter(Boolean);
//         // create JWTs
//         const accessToken = jwt.sign(
//             {
//                 "UserInfo": {
//                     "userName": foundUser.userName,
//                     "roles": roles
//                 }
//             },
//             process.env.ACCESS_TOKEN_SECRET,
//             { expiresIn: '10s' }
//         );
//         const refreshToken = jwt.sign(
//             { "userName": foundUser.userName },
//             process.env.REFRESH_TOKEN_SECRET,
//             { expiresIn: '1d' }
//         );
//         // Saving refreshToken with current user
//         foundUser.refreshToken = refreshToken;
//         const result = await foundUser.save();
//         console.log(result);
//         console.log(roles);

//         // Creates Secure Cookie with refresh token
//         res.cookie('jwt', refreshToken, { httpOnly: true, secure: true, sameSite: 'None', maxAge: 24 * 60 * 60 * 1000 });

//         // Send authorization roles and access token to user
//         res.json({ roles, accessToken });

//     } else {
//         res.sendStatus(401);
//     }
// }

// module.exports = { handleLogin };

//OLD
const handleLogin = async (req, res) => {
    const { password, userName } = req.body
    if (!password || !userName) return res.status(400).json({ 'message': 'Username and Password are required' });

    //check if user exists
    const foundUser = await User.findOne({ userName: userName }).exec();

    console.log(foundUser)
    
    if (!foundUser) {
        console.log('user not found');
        return res.sendStatus(401)// unauthorized
    }

    // evaluate password
    const match = await bcrypt.compare(password, foundUser.password)
    if (match) {
        const roles = Object.values(foundUser.roles).filter(Boolean);
        console.log(`User ${userName} ise logged in!`)

        //// create jwt
        const accessToken = jwt.sign(
            {
                "UserInfo": {
                    "userName": foundUser.userName,
                    "roles": roles
                },
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '1h' } // 5 or to 15min to be in production 
        );
        const refreshToken = jwt.sign(
            // { "userName": foundUser.userName },
            {
                "UserInfo": {
                    "userName": foundUser.userName,
                    "roles": roles
                },
            },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: '1d' }
        );
        // saving refresh token with current user
        foundUser.refreshToken = refreshToken;
        const result = await foundUser.save();
        console.log(result)
        console.log(roles)
        console.log("refreshToken " + refreshToken)
        console.log("acces token: " + accessToken);

        let userPublicData = {
            _id: foundUser._id,
            userName: foundUser.userName,
            userEmail: foundUser.userEmail
        }

        // Creates Secure Cookie with refresh token
        res.cookie('jwt', refreshToken, { httpOnly: true, secure: true, sameSite: 'None', maxAge: 24 * 60 * 60 * 1000 });

        // Send authorization roles and access token to user
        res.json({ roles, accessToken, userPublicData });
    } else {
        res.sendStatus(401)// unauthorized
    }
}

module.exports = { handleLogin }

