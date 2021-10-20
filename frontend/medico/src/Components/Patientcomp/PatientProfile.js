import React,{useState} from 'react';
import {TextField,MenuItem,Select,FormControl} from '@material-ui/core';
import axios from 'axios';



function PatientProfile() {
    const [formdata,setformdata] = useState({
      name : "a",
      phone_no :0,
      gender : "male",
      age : 0,
     
      bloodgroup : "B+",
      pincode : 0,


    })
    const {name,phone_no,gender,age,address,bloodgroup,pincode} = formdata;

    const handlechange = (e) => {
      setformdata({[e.target.id] : e.target.value});
    }
    const onSubmit = async (e) => {

      e.preventDefault();
      let addressobj = await axios.get(`https://api.postalpincode.in/pincode/${pincode}`);
      if(addressobj[0].status === "Error"){
        console.log(addressobj);
      }
      
      console.log(formdata);
      const profile_update = await axios.post("http://localhost:5000/userprofile",formdata,{

        headers: {
  
          'Content-Type': 'application/json',
  
          'x-access-token': localStorage.getItem('token'),
  
        },
  
      });

      console.log(profile_update);






      
    }
  


    return (
        <form className="myform" onSubmit = {onSubmit} >
          
        <div className = "update-profile">
       
             
            <TextField  id="name" value = {name}  onChange = {handlechange} variant="standard" />
            <TextField
          id="phone_no"
          
          type="number"
          value = {phone_no}
          onChange = {handlechange}
          InputLabelProps={{
            shrink: true,
            maxLength : 12
          }}
        />
        <Select labelId="demo-simple-select-helper-label"id="demo-simple-select-helper"value={age}label="Age" onChange={handlechange}><MenuItem value=""><em>None</em></MenuItem><MenuItem value={10}>Ten</MenuItem><MenuItem value={20}>Twenty</MenuItem><MenuItem value={30}>Thirty</MenuItem></Select>
        
        
            <Select
            
          id="gender"
          
          
          value={gender}
          onChange={ handlechange}
        //   onChange={handleChange}
          
        >
          <MenuItem key = "1" value="">None</MenuItem>
          
            <MenuItem key="male" value={"male"}>
              male
            </MenuItem>
            <MenuItem key="female" value={"female"}>
              female
            </MenuItem>
            <MenuItem key="others" value={"others"}>
              others
            </MenuItem>
          
        </Select>
        
        <TextField
          id="age"
          
          type="number"
          value = {age}
          onChange = {handlechange}
          
        />
        
        
         <Select
          id="bloodgroup"
          type = "text"
          
          
          value={bloodgroup}
          onChange={ handlechange}
          
        >
          
            <MenuItem key="A+" value={"A+"}>
              A+
            </MenuItem>
            <MenuItem key="A-" value={"A-"}>
              A-
            </MenuItem>
            <MenuItem key="AB+" value={"AB+"}>
              AB+
            </MenuItem>
            <MenuItem key="AB-" value={"AB-"}>
              AB-
            </MenuItem>
            <MenuItem key="O-" value={"O-"}>
              O-
            </MenuItem>
            <MenuItem key="O+" value={"O+"}>
              O+
            </MenuItem>
            <MenuItem key="B+" value={"B+"}>
              B+
            </MenuItem>
            <MenuItem key="B-" value={"B-"}>
              B-
            </MenuItem>
          
        </Select>
        
        <TextField
          id="pincode"
          
          type="number"
          value = {pincode}
          onChange = {handlechange}
         
        />
        
        <input type = "submit" value = "update"/>
         

        
        
        </div>
        </form>
    )
}

export default PatientProfile
