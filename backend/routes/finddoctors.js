const express = require('express');
const { check,validationResult } = require('express-validator');
const { on } = require('../schemas/DoctorProfile');
const router = express.Router();


const doctorprofile = require('../schemas/DoctorProfile');


router.post('/',check('City','Please enter a valid City').exists(),
check('specialization','Please enter a valid specialization').exists(),async (req,res)=> {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { City, specialization } = req.body;

    try{
        let obj = await doctorprofile.find({"Address.City" : City, "Specialization" : specialization })
        obj = obj.map( (ob) =>{
            return {
                Name : ob.Name,
                Age : ob.Age,
                Description : "I am a doctor. Its good meeting you.",
                City : ob.Address.City,
                State : ob.Address.State,
                Specialization : ob.Specialization,
                ID : ob.user
            }
        })
        res.status(200).send(obj);

    }
    catch(err){
        res.send(500).json({msg : "Internal Server Error"});
    }


    
    
})
module.exports = router;