const express = require('express');
const router = express.Router();
const {check,validationResult} = require('express-validator');

const doctorschema = require('../schemas/doctor');
const patientschema = require('../schemas/patient'); 

router.post("/",
async (req,res)=>{
    
    var {doctor,Username} = req.body;
    console.log(doctor,Username);
    try{

        let doc = await doctorschema.findOneAndUpdate(
            { Username: doctor },
            { $push: {Appointments : {username : Username}} },
            { new: true, upsert: true, setDefaultsOnInsert: true }
          );
          console.log(doc);

          let docu = await patientschema.findOneAndUpdate(
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