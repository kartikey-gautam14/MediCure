const express = require('express');

const router = express.Router();
const patientschema = require('../schemas/patient');

router.post("/",async (req,res) => {
    const files = req.body.files;
    const username = req.body.files;
    try{
        let document =await patientschema.updateOne({Username : username },{$push : {MedicalReports : files}});
        console.log(document);
        res.status(400).json({masg:"ho gaya bro"});
    }
    catch(err){
        console.log(err);
    }


    



})
module.exports = router;