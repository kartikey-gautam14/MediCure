//import { createRequire } from "module";
//const require = createRequire(import.meta.url);
const mongoose = require('mongoose');
//import mongoose from 'mongoose';
const doctorschema = require('./doctor');
const Appointments = mongoose.Schema({
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'doctorschema'
      },
    
    
    date : {
        type : String,
        required : true,
    },
    Booked_Slots:[Number],
    Detials :[{
        id :  mongoose.Schema.Types.ObjectId,
        slot : Number,


    }]
        
    
    
    
});
module.exports = mongoose.model('appointments',Appointments);