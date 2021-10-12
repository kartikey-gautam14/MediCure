import React from 'react';
import {BrowserRouter as Router,Route,Link } from 'react-router-dom';
import Doctors from './Doctors';
import {Card} from '@material-ui/core'


function Navbar() {
    return (
        
        <div>
            
                <Link to = "/doctors">DoctorsList</Link>
                <Link to = "/abc">DoctorsList</Link>
                <Link to = "/abc">DoctorsList</Link>
                <Link to = "/abc">DoctorsList</Link>
            
        </div>
        
        
    )
}

export default Navbar
