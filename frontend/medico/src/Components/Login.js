import axios from 'axios';
import React, { Fragment, useState ,useContext} from 'react';
// import register from '../Actions/auth';
//import authreducer from '../Context/reducer';
import { UserContext } from '../Context/Provider';
import {  Redirect } from 'react-router-dom';
//import { register } from '../../actions/auth';

const Login = () => {
     const [state,dispatch] = useContext(UserContext);
     
     

     
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
        }).then((res)=>console.log(res));
          dispatch({ type: "LOGIN_SUCCESS" })
        
      
    };
  
     if (state.isAuthenticated) {
       return <Redirect to="/home" />;
     }
  
    return (
      <Fragment>
        <h1 className="large text-primary"> Doctor Sign Up</h1>
        <p className="lead">
          <i className="fas fa-user" /> Create Your Account
        </p>
        <form className="form" onSubmit={onSubmit}>
         
          <div className="form-group">
            <input
              type="email"
              placeholder="Username"
              name="email"
              value={email}
              onChange={onChange}
            />
            <small className="form-text">
              This site uses Gravatar so if you want a profile image, use a
              Gravatar email
            </small>
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
          
          <input type="submit" className="btn btn-primary" value="Register" />
        </form>
        <p className="my-1">
          {/* Already have an account? <Link to="/login">Sign In</Link> */}
        </p>
      </Fragment>
    );
  };
export default Login