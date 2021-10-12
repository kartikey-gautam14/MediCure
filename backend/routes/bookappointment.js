const express = require('express');
const router = express.Router();
const {check,validationResult} = require('express-validator');

const doctorschema = require('../schemas/doctor');
const patientschema = require('../schemas/patient'); 

router.post("/",check('doctor','This shit has no doctor id bitch').exists(),
check('Username', 'Aint you gonna provide me your username nigga').exists(),
async (req,res)=>{
    var errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    var {doctor,Username} = req.body;
    console.log(doctor,Username);
    try{

        let doc = await doctorschema.findOneAndUpdate(
            { Username: doctor },
            { $push: {Appointments : {username : Username}} },
            { new: true, upsert: true, setDefaultsOnInsert: true }
          );
          console.log(doc);

          let docu = await doctorschema.findOneAndUpdate(
            { Username: Username },
            { $push: {Appointments : {doctor : doctor}} },
            { new: true, upsert: true, setDefaultsOnInsert: true }
          );
          console.log(docu);

    return res.status(200).json({msg:"appointment booked"})
    }catch(err){
        res.send(500).json({msg:"Internal server error"});

    }





})
module.exports = router;