import axios from 'axios';
import React,{useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import DoctorcardComponent from '../Patientcomp/DoctorCardComponent';
import AvailableSlots from './AvailableSlots';


function Profile() {
    var {id}  = useParams();
    const [doctor,setdoctor] = useState();
    // useEffect(() => {
    //     axios.post("http://localhost:5000/getprofile",{id : id}).
    //     then((res) => setdoctor(res.data));

    // },[id]);
    console.log(id);
    return (
        <div>
            <h1> Hello </h1>
        </div>




    )
}

export default Profile
