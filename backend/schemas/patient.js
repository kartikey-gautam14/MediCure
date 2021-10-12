const mongoose = require('mongoose');
//import { createRequire } from "module";
//const require = createRequire(import.meta.url);
//import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
    // user: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'user'
    //   },
    Name: {
        type: String,
        required: true,

    },
    Username: {
        type : String,
        required : true,
    }, 
    Password: {
        type : String,
        required : true,
    }, 
    Appointments:[{doctor:String}] 
    
});
module.exports = mongoose.model('patientschema',UserSchema);