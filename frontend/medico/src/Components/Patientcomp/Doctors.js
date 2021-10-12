import React,{useState} from 'react';
import {Card,CardContent} from '@material-ui/core';
import axios from 'axios';

function Doctors() {
    
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
    const onClick = (e,key) =>{
        e.preventDefault();
        axios.post("http://localhost:5000/bookap",{
            doctor:key,
            Username:"meragalahaisurila"
    })
        .then((res)=>{
            console.log(res);

        })

    }
    return (
        <div>
            {doctors.map((data)=>{
                return <Card key = {data.doctor} >
                    <CardContent>
                    {data.Username}
                    <button type = "submit" onClick = {(e)=>onClick(e,data.doctor)} >button</button>
                    </CardContent>
                </Card>
            })}
            
        </div>
    )
}

export default Doctors
