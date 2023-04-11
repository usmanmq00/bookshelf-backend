const mongoose = require ('mongoose');

const bookSchema =new mongoose.Schema({
        title:{
            type:String,
            required:[true , "Please enter the book title"],
        },
        author:{
            type: String,
            required:[true,"Please Enter The Author Name"],
        },
        category:{
            type:String,
            required:[true , "Please enter the book Category"],
        },
        ISBN:{
            type:String,
            required:[true , "Please enter the iSBN Number"],
        },
        rating:{
            type:String,
        },
        access:{
            type:String,
            required:[true , "Please enter the access type"],
        },
        description:{
            type:String,
            required:[true , "Please enter the book description"],
        },
        user:{
            type:mongoose.Schema.Types.ObjectId,
            //require :true,
            ref: 'User'
        }
    }
);

module.exports=mongoose.model("Book", bookSchema)

