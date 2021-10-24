import React,{useState} from 'react';
import {Card,CardContent} from '@material-ui/core';
import axios from 'axios';
import DoctorcardComponent from './DoctorCardComponent';

function Seedoctors() {

    const [ formData, setformData ] = useState({
        City: "",
        specialization : ""
    });
    const { City, specialization } = formData;
    const [doctors,setdoctors] = useState([]);
    const handleSubmit = (e)=>{
        e.preventDefault();

        axios.post("http://localhost:5000/finddoctors", formData).then( res =>{
            setdoctors(res.data);
            console.log(res);

        })

    }

    const onChange =(e) =>{
        setformData({ ...formData, [e.target.name]: e.target.value });
    }

    return (
        <div>
            <form className="search-form" onSubmit={handleSubmit}>
         
         <div className="form-group">
           <input
             
             placeholder="search by specialization"
             name="specialization"
             value={specialization}
             onChange={onChange}
           />
         </div>
         <div className="form-group">
           <input
             type="text"
             placeholder="search by City"
             name="City"
             value={City}
             onChange={onChange}
           />
         </div>
         
         <input type="submit" className="btn btn-primary" value="Search" />
       </form>
        {doctors.map( (doctor) => {
            return <DoctorcardComponent  key ={doctor.Name} name = {doctor.Name} 
            specialization ={doctor.Specialization} description = {doctor.Description} ID = {doctor.id}/>
        })}
            
        </div>
    )
}

export default Seedoctors;
