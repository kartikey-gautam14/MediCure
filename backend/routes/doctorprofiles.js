const express = require('express');
const router = express.Router();
const doctorprofile = require('../schemas/DoctorProfile');

router.post("/",async(req,res) => {
    const id = req.body.id;

    try{
        const findprofile = await doctorprofile.findOne({id : id});
        
        
         let {_id, ...y} = findprofile._doc;
         res.status(200).send(y);

    }catch(err){
        res.status(500).send("Internel Server Error");

    }


})
module.exports = router;