const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../conn/db');
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


    res.json({ message: 'Register User!' });
});

//@desc       Authenticate a user
//@route      POST api/users/login
//@access     Public  
const loginUser = asyncHandler( async (req,res) => {
    res.json({ message: 'Login User!' });
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