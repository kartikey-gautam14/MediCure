import React from 'react';
import PatientNavbar from './PatientNavbar';
import PatientProfile from './PatientProfile';
import DoctorCardComponent from './DoctorCardComponent';

function PatHome() {
    return (
        <div>
            <PatientNavbar/>
            <PatientProfile/>
            <DoctorCardComponent name ="kartikey" special = "cardio" 
            description ="I am a mahaan doctor .this is my profile you are welcome to 
            appoint me as you doctor. i have done my mbbs from AIIMS Delhi" />

        </div>
    )
}

export default PatHome
