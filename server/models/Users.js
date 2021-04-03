const mongoose = require('mongoose');
const usersSchema = new mongoose.Schema
({
    type:
    {
        type:String,
        required:true
    },
    fname: {
        type: String,
        required:true
    },
    lname: {
        type: String,
        required:true

    },
    uname: {
        type: String,
        required:true,
        unique:true
    },
    email: {
        type:String,
        required:true,
        unique:true
    },
   phonno: {
        type: String,
        //required:true
    },
    password: {
        type: String,
        required:true
    }


},
    {collection:'users'}
);
module.exports = mongoose.model('Users',usersSchema);