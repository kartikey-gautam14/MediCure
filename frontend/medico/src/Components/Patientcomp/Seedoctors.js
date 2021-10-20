import React,{useState} from 'react';
import {Card,CardContent} from '@material-ui/core';
import axios from 'axios';

function Seedoctors() {


    
    const [doctors,setdoctors] = useState([
        {
            doctor: "kartikeygautam",
            Username : "jksjfk",
        },
        {
            doctor: "kartikeygautamkk",
            Username : "jksjfk",
        },
        {
            doctor: "kartikeygautambhai",
            Username : "jksjfk",
        },
        {
            doctor: "kartikeygautamji",
            Username : "jksjfk",
        }
    ])
    const onClick = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:5000/bookap",{
            
            Username:"meragalahaisurila"
    })
        .then((res)=>{
            console.log(res);

        })

    }
    const upload = e =>{
        let files = {
            username : "kartikeygautam",
            files : e.target.files[0],
    }
    axios.post("http://localhost:5000/uploadtopatient",files).then((res)=>{
        console.log(res);
    })
    }
    return (
        <div>
            {doctors.map((data)=>{
                return <Card key = {data.doctor} >
                    <CardContent>
                    {data.Username}
                    <button type = "submit" onClick = {(e)=>onClick(e)} >button</button>
                    </CardContent>
                </Card>
            })}

<div>
  <label for="formFileLg" class="form-label">Large file input example</label>
  <input className="form-control form-control-lg" id="formFileLg" type="file" onChange = {upload}/>
</div>
            
        </div>
    )
}

export default Seedoctors;
