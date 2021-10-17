import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';

    const Navbar = () => {
        const authLinks = (
          <ul>
            <li>
              <Link to="/doctorauth/">Calender</Link>
            </li>
            <li>
              <Link to="/doctorauth/posts">Posts</Link>
            </li>
            <li>
              <Link to="/doctorauth/patients">
                <i className="fas fa-user" />{' '}
                <span className="hide-sm">See Your patients</span>
              </Link>
            </li>
            
         
        
       
            
              <li>
                <Link to="/doctorauth/appointments">Check your Appointments</Link>
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

export default Navbar
