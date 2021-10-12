import React,{useContext} from 'react';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';
import Register from './Register';
import Pregister from './Pregister';
import Login from './Login';
import Plogin from './Plogin';
//import PrivateRoute from './PrivateRoute';
import { UserContext } from '../Context/Provider';
import Home from './Home';
import Doctors from './Patientcomp/Doctors';

function AuthRouter() {
    const [state] = useContext(UserContext);
    return (
       
            <Router>
                 <div>
                     { state.isAuthenticated === false && <Link to = {'register'}> Register </Link>}
                     { state.isAuthenticated === false && <Link to = {'pregister'}> Pregister </Link>}
                     { state.isAuthenticated === false && <Link to = {'login'}> Login </Link>}
                     
                     { state.isAuthenticated === false && <Link to = {'plogin'}> PLogin </Link>}
                <Switch>
                    <Route path = "/register" > <Register/></Route>
                    <Route path = "/pregister" > <Pregister/></Route>
                    <Route path = "/login" > <Login/></Route>
                    <Route path = "/plogin"> <Plogin/></Route>
                    <Route path = "/home"> <Home/> </Route>
                    <Route path = "/doctors" component = {Doctors}/>
                </Switch>


                
                    
                
                 
                    
                
                
                    
                
                
                    
                
               
                </div>
            </Router>
            
        
    )
}

export default AuthRouter
