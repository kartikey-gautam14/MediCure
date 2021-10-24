import React,{useState} from 'react';
import {TextField,MenuItem,Select,FormControl} from '@material-ui/core';
import axios from 'axios';



function DoctorProfile() {
    const [formdata,setformdata] = useState({
      name : "",
      phone_no : 0,
      age : 0,
      gender : "",
      pincode : 0,
      bloodgroup : "",
      specialization : "",
      start_time : "",
      end_time : "" 
    })
    const {name,phone_no,gender,age,bloodgroup,pincode,specialization,start_time,end_time} = formdata;

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
        },
        specialization : specialization,
        start_time : start_time,
        end_time : end_time
        
      }
      const profile_update = await axios.post("http://localhost:5000/updatedoctorprofile",payload,{

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
        <div>
            <input 
            name = "specialization"
            type = "text"
            value = {specialization}
            onChange = {handlechange}
            placeholder = "enter your specialization"
            
            />
            </div>
            <div>
            <input 
            name = "start_time"
            type = "text"
            value = {start_time}
            onChange = {handlechange}
            placeholder = "enter your start_time"
            
            />
            </div>
            <div>
            <input 
            name = "end_time"
            type = "text"
            value = {end_time}
            onChange = {handlechange}
            placeholder = "enter your end_time"
            
            />
            </div>
        <button type = "submit" >Update</button>
          </div>
        </form>
    )
}

export default DoctorProfile;
