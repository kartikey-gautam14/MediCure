const mongoose = require('mongoose');
const Profile = mongoose.Schema({
    Name : {
        type : String,
        required : true,

    },
    Available_time : {
        start: Number,
        end : Number,
    },
    Description : {
        type : String,
        required : true,
    },
    Offline_clinics : [{
        Name : String,
        Address : String,
    }]

    

});
module.exports = mongoose.model('doctorprofile',Profile);
