const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../model/User');

const protect = asyncHandler( async (req, res, next) => {   // Verify token
        let token;
        if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
            console.log(req.headers.authorization);
            try{
                // Get token from header
                token = req.headers.authorization.split(' ')[1];    // ['Bearer', 'token']

                // Verify token
                const decoded = jwt.verify(token, process.env.JWT_SECRET);

                // get user from token
                req.user = await User.findById(decoded.id).select('-password');

                next();
            }catch(err){
                res.status(401).json({ message: 'Not Authorized!' });
            }
        }

        if(!token){
            res.status(401).json({ message: 'Not Authorized, No token!' });
        }
});

module.exports = {
    protect
}