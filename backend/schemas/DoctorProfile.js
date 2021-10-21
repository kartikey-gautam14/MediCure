const mongoose = require('mongoose');
const Profile = mongoose.Schema({
   
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'doctorschema'
      },

    Name : {
        type : String,
        required : true,

    },
    Phone_number : {
        type : Number,
    },
    Gender : {
        type : String,
    },
    Age : {
        type : Number,
    },
    Address :{
        City : String,
        State : String,
        
        PinCode : Number,
    },
    Available_time : {
        start: Number,
        end : Number,
    },
    BloodGroup: {
        type : String,
    },
    Specialization : {
        type : String,
        

    },
    Offline_clinics : [{
        Name : String,
        Address : String,
    }]
   


    
    
    
   
    

    

});
module.exports = mongoose.model('doctorprofile',Profile);
