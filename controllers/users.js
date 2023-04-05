const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../model/User');
const asyncHandler = require('express-async-handler');

//@desc       Register a user
//@route      POST api/users/register
//@access     Public
const registerUser = asyncHandler( async (req,res) => {
    const { name, email, password } = req.body;

    if( !name || !email || !password){
        res.status(400).json({ message: 'Please add all fields!' })
    }

    // check if user exist
    const userExists = await User.findOne({ email }); 
    if(userExists){
        res.status(400).json({ message: 'User already exists!' });
    }

    // Hash Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create User
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    });
    if(user){
        res.status(200).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            password: user.password
        });
    }else{
        res.status(400).json({ message: 'Invalid user data!' });
    }
});

//@desc       Authenticate a user
//@route      POST api/users/login
//@access     Public  
const loginUser = asyncHandler( async (req,res) => {
    const { email, password } = req.body;

    // check user email
    const user = await User.findOne({ email });
    if(user && (await bcrypt.compare(password, user.password))){
        res.status(200).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            password: user.password
        });
    }else{
        res.status(400).json({ message: 'Invalid Credentials!' });
    }
});

//@desc       Get user data
//@route      POST api/users
//@access     Public
const getMe = asyncHandler( async (req,res) => {
    res.json({ message: 'User Data!' });
});

module.exports = {
    registerUser, loginUser, getMe
} 