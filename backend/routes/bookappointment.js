const express = require('express');
const router = express.Router();
const {check,validationResult} = require('express-validator');
const jwt = require('jsonwebtoken');
const jwt_decode = require("jwt-decode");

const doctorschema = require('../schemas/doctor');
const patientschema = require('../schemas/patient'); 
const appointments = require('../schemas/Appointments');

router.post("/",
async (req,res)=>{
  const token = req.body.token;
  console.log(token);
  
  var decoded = jwt_decode(token);
  var id = decoded.user.id;


    
    var {doctor,time,date} = req.body;
    console.log(doctor,time,date);
    try{

      let datedoc = await doctorschema.findOne({Username : doctor})
      
      if(!datedoc)
      return res.status(400).json({msg : "document not found"})

      let docid = datedoc._id;
      let appobj = await appointments.findOneAndUpdate({doctor : docid,date : date},{$push : {Booked_Slots : time,details : {
        id : id,
        slot:time,
      }}},{new:true,upsert :true,setDefaultsOnInsert : true});
      console.log(appobj);

     





      
      

      
      
      

      
      

        

    return res.status(200).send(appobj);
    }catch(err){
        res.send(500).json({msg:"Internal server error"});

    }





})
module.exports = router;
function extractToken (req) {
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
      return req.headers.authorization.split(' ')[1];
      
  }
  return null;
}