const mongoose = require('mongoose');
const userprofile = mongoose.Schema({
     user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'patientschema'
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
    BloodGroup: {
        type : String,
    },
    Specialization : {
        type : String,
        

    },
    Report_links :[{}],


    
    

    

});
module.exports = mongoose.model('patientprofile',userprofile);
