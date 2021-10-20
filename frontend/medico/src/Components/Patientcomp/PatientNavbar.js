import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';

    const PatientNavbar = () => {
        const authLinks = (
          <ul>
            <li>
              <Link to="/patientauth/seedoctors">Find doctors near you</Link>
            </li>
            <li>
              <Link to="/patientauth/medicaluploads">MedicalUploads</Link>
            </li>
            <li>
              <Link to="/patientauth/appointments">
                <i className="fas fa-user" />{' '}
                <span className="hide-sm">Your Appointments</span>
              </Link>
            </li>
            
         
        
       
            
             
              <li>
              <a  href="#!">
                <i className="fas fa-sign-out-alt" />{' '}
                <span className="hide-sm">Logout</span>
              </a>
            </li>
              
             
            </ul>
          );
        
          return (
            <nav className="navbar bg-dark">
              <h1>
                <Link to="/">
                  <i className="fas fa-code" /> Medical Assistances
                </Link>
              </h1>
              <Fragment>{ authLinks }</Fragment>
            </nav>
          );
}

export default PatientNavbar;
