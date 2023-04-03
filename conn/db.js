const mongoose = require('mongoose');

const connectDB = async (url) => {
    try{
        await mongoose.connect(url);
        console.log('MongoDB Connected!');
    }catch(err){
        console.log(err);
        process.exit(1);
    }url
}

module.exports = connectDB;