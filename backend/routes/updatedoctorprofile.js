const express = require('express');
const router = express.Router();
const jwt_decode = require("jwt-decode");
const doctorschema = require('../schemas/doctor');
const patientschema = require('../schemas/patient');
const patientprofile = require('../schemas/patientprofile');
const doctorprofile = require('../schemas/DoctorProfile');
const {check,validationResult} = require('express-validator')


router.post("/",check('name','Give me your name nigga').exists(),
check('phone_no','Please enter a valid phone no of 10 digits').exists(),
check('gender','Please enter a valid gender').exists(),
check('age','Please enter a valid phone no of 10 digits').exists(),
check('bloodgroup','Please enter a valid phone no of 10 digits').exists(),
check('pincode','Please enter a valid phone no of 10 digits').exists(),
check ('specialization','Please pick your practice sector').exists(),
check ('start_time','Please pick your practice sector').exists(),
check ('end_time','Please pick your end time').exists(),




async(req,res)=>{

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {name,phone_no,gender,age,address,bloodgroup,pincode,specialization,start_time,end_time} = req.body;
    const token =  req.body.token || req.query.token || req.headers['x-access-token'];

    const payload = jwt_decode(token)
    const id = payload.user.id;
    console.log(id);
    try{

    const update_profile = await doctorprofile.findOneAndUpdate({user : id},{$set : {
        Name : name,
        Phone_no : phone_no,
        Gender : gender,
        Age : age,
        Address : {
            City : address.City,
            State : address.State,
        },
        Pincode : pincode,
        BloodGroup : bloodgroup, 
        Specialization : specialization,
        Available_time : {
            start : start_time,
            end : end_time,
        }

    }},{new : true, upsert : true,setDefaultsOnInsert : true});
    console.log(update_profile);

    res.status(200).send(update_profile);
}catch(err){
    res.status(400).send(err);
}



   

    
})
module.exports = router;


