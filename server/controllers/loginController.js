const User = require('../Models/ModelUser')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')


const handleLogin = async (req, res) => {
    const { password, userName } = req.body
    if (!password || !userName) return res.status(400).json({ 'message': 'Username and Password are required' });

    //check if user exists
    const foundUser = await User.findOne({ userName: userName }).exec();

    
    if (!foundUser) {
        console.log('user not found');
        return res.sendStatus(401)// unauthorized
    }

    // evaluate password
    const match = await bcrypt.compare(password, foundUser.password)
    if (match) {
        const roles = Object.values(foundUser.roles).filter(Boolean);

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

