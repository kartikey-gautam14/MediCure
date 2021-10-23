const express = require('express');
const { check,validationResult } = require('express-validator');
const router = express.Router();


const doctorprofile = require('../schemas/DoctorProfile');

router.post('/',check('State','Please enter a valid state').exists(),
check('City','Please enter a valid city').exists(),async (req,res)=> {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {City,State} = req.body;

    try{
        const obj = await doctorprofile.find({"Address.City" : City})
        res.status(200).send(obj);

    }
    catch(err){
        res.send(500).json({msg : "Internal Server Error"});
    }

    
    
})
module.exports = router;