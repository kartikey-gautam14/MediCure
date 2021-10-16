import axios from 'axios';
import React, { Fragment, useState ,useContext} from 'react';
// import register from '../Actions/auth';
//import authreducer from '../Context/reducer';
import { DoctorContext } from '../../Context/Provider.js';
import {  Redirect } from 'react-router-dom';
import { LOGIN_SUCCESS } from '../../Context/actiontypes.js';
import {Link} from 'react-router-dom';
//import { register } from '../../actions/auth';

const Login = () => {
     const [state,dispatch] = useContext(DoctorContext);
     
     
     

     
    const [formData, setFormData] = useState({
    
      email: '',
      password: '',
      
    });
  
    const { email, password } = formData;
    
  
    const onChange = (e) =>
      setFormData({ ...formData, [e.target.name]: e.target.value });
  
    const onSubmit = async (e) => {
      e.preventDefault();
      
          
          axios.post("http://localhost:5000/login",{
            
            Username : email,
            Password:password,
        }).then((res)=>{      localStorage.setItem('token',res.data.token)
                              console.log(res.data.token)})
         .then(dispatch({ type: LOGIN_SUCCESS }));
        
      
    };
  
     if (state.isAuthenticated) {
       return <Redirect to="/docauth/home" />;
     }
  
    return (
      <Fragment>
        <h1 className="large text-primary"> Doctor Sign In</h1>
        <p className="lead">
          <i className="fas fa-user" /> Create Your Account
        </p>
        <form className="form" onSubmit={onSubmit}>
         
          <div className="form-group">
            <input
              type = "text"
              placeholder="Username"
              name="email"
              value={email}
              onChange={onChange}
            />
            
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={onChange}
            />
          </div>
          
          <input type="submit" className="btn btn-primary" value="Login" />
        </form>
        
        <p className="my-1">
          Already have an account? <Link to="/doctorauth/register">Sign Up</Link>
        </p>
      </Fragment>
    );
  };
export default Login;
