const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name...']
    },
    email: {
        type: String,
        required: [true, 'Please add an email...']
    },
    password: {
        type: String,
        required: [true, 'Please add a password...']
    },
},{
    timestamps: true
});

module.exports = User =  mongoose.model('user', UserSchema);