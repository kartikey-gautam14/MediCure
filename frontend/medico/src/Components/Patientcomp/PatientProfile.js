import React,{useState} from 'react';
import {TextField,MenuItem,Select,FormControl} from '@material-ui/core';
import axios from 'axios';



function PatientProfile() {
    const [formdata,setformdata] = useState({
      name : "",
      phone_no : 0,
      age : 0,
      gender : "",
      pincode : 0,
      bloodgroup : "",
     


    })
    const {name,phone_no,gender,age,bloodgroup,pincode} = formdata;

    const handlechange = (e) => {
      setformdata({...formdata,[e.target.name] : e.target.value});
    }
    const onSubmit = async (e) => {

      e.preventDefault();
      let addressobj = await axios.get(`https://api.postalpincode.in/pincode/${pincode}`);
      console.log(addressobj);
     
     
      
      console.log(formdata);
      const payload = {
        name : name,
        phone_no : phone_no,
        age : age,
        gender : gender,
        pincode : pincode,
        bloodgroup : bloodgroup,
        
        address : {
          state :addressobj.data[0].State,
          district : addressobj.data[0].District,
        }
        
      }
      const profile_update = await axios.post("http://localhost:5000/updateuserprofile",payload,{

        headers: {
  
          'Content-Type': 'application/json',
  
          'x-access-token': localStorage.getItem('token'),
  
        },
  
      });

      console.log(profile_update);
    






      
    }
  


    return (
        
        <form onSubmit = {onSubmit}>
          <div className = "update-profile">
            <div>
            <input 
            name = "name"
            type = "text"
            value = {name}
            onChange = {handlechange}
            placeholder = "enter your name"
            
            />
            </div>
            <div>
             <input 
            name = "phone_no"
            type = "number"
            value = {phone_no}
            onChange = {handlechange}
            placeholder = "enter your phone_no"
            />
            </div>
            <div>
            
            <input 
            name = "age"
            type = "number"
            
            value = {age}
            onChange = {handlechange}
            placeholder = "enter your age"
            
            />
            </div>
            <input 
            name = "pincode"
            type = "number"
            value = {pincode}
            onChange = {handlechange}
            placeholder = "enter your pincode"
            
            />
              
          
        <select name = "bloodgroup" placeholder = "enter your blood group" value = {bloodgroup} onChange = {handlechange} >

        <option  value="A+">
          A+
        </option>
        <option  value="A-">
          A-
        </option>
        <option  value="AB+">
          AB+
        </option>
        <option  value="AB-">
          AB-
        </option>
        <option  value="O-">
          O-
        </option>
        <option  value="O+">
          O+
        </option>
        <option  value="B+">
          B+
        </option>
        <option  value="B-">
          B-
        </option>
        </select>
        <select name = "gender" placeholder = "enter your gender" value = {gender} onChange = {handlechange} >

        <option  value="male">
         male
        </option>
        <option  value="female">
          female
        </option>
        <option  value="others">
         others
        </option>
        
        </select>
        <button type = "submit" >Update</button>
          </div>
        </form>
    )
}

export default PatientProfile
