const express = require('express');
const router = express.Router();
const jwt_decode = require("jwt-decode");
const doctorschema = require('../schemas/doctor');
const patientschema = require('../schemas/patient');
const patientprofile = require('../schemas/patientprofile');
const {check,validationResult} = require('express-validator')


router.post("/",[check('name','Give me your name nigga').exists(),
check('phone_no','Please enter a valid phone no of 10 digits').exists(),
check('gender','Please enter a valid gender').exists(),
check('age','Please enter a valid phone no of 10 digits').exists(),
check('bloodgroup','Please enter a valid phone no of 10 digits').exists(),
check('pincode','Please enter a valid phone no of 10 digits').exists(),



],async(req,res)=>{

    const errors = validationResult(req);
    if(errors) {
        return res.status(400).json(errors.array());
    }
    const {name,phone_no,gender,age,address,bloodgroup,pincode} = req.body;
    const token =  req.body.token || req.query.token || req.headers['x-access-token'];

    const payload = jwt_decode(token)
    const id = payload.user.id;
    console.log(id);
    try{

    const update_profile = await patientprofile.findOneAndUpdate({user : id},{$set : {
        Name : name,
        Phone_no : phone_no,
        Gender : gender,
        Age : age,
        Address : {
            City : address.district,
            State : address.state,
        },
        Pincode : pincode,
        BloodGroup : bloodgroup, 
        
    }},{new : true, upsert : true,setDefaultsOnInsert : true});
    console.log(update_profile);

    res.status(200).send(update_profile);
}catch(err){
    res.status(400).send(err);
}



   

    
})
module.exports = router;


