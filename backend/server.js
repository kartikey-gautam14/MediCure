// import { createRequire } from "module";
// const require = createRequire(import.meta.url);
const express = require('express');
const path = require('path');

const PORT = 3000;
const login = require('./routes/login')
const register = require('./routes/register')


const app = express();
app.use(express.json());
// import express from 'express';
//  import login from '/routes/login.js';
//  import register from '/routes/register.js';

// import mongoose from 'mongoose';
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mediCure')
    .then(() => console.log('Now connected to MongoDB!'))
    .catch(err => console.error('Something went wrong', err));


app.listen(3000,()=>{
    console.log(`server is running on port ${PORT}`);

})
app.use("/login",login);
app.use("/register",register);

// //app.post("/login",(req,res)=>{
// get data from req    
// run queries in database
// send response
    
// }
