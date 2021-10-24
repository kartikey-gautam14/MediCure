import axios from 'axios';
import React,{useState} from 'react';
import {useParams} from 'react-router-dom';
import DoctorcardComponent from '../Patientcomp/DoctorCardComponent';

function Profile() {
    var {id}  = useParams();
    const [doctor,setdoctor] = useState();
    useEffect(() => {
        axios.post("http://localhost:5000/getprofile",{id : id}).
        then((res) => setdoctor(res.data));

    },[]);
    return (
        <div>
            <h1> Hello {doctor.Name}</h1>
        <div className = "profile-card">
            <DoctorcardComponent/>
            <AvailableSlots/>
        </div>









            
        </div>
    )
}

export default Profile
