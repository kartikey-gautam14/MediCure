import React from 'react';
import './App.css';
import { UserProvider,DoctorProvider } from "./Context/Provider";
import AuthRouter from './Components/AuthRouter';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import DocHome from './Components/Doctorcomp/DocHome';
import PatHome from './Components/Patientcomp/PatHome';
import StartingComp from './Components/StartingComp';
import Routes from './Components/Routing/Routes';
import DoctorRoutes from './Components/Routing/DoctorRoutes'
import Register from './Components/Doctorcomp/Register'
import PRegister from './Components/Patientcomp/Register';
import PLogin from './Components/Patientcomp/Login';
import Dashboard from './Components/Doctorcomp/Dashboard';
import Seedoctors from './Components/Patientcomp/Seedoctors';
import Profile from './Components/Doctorcomp/Profile'
import DoctorProfile from './Components/Doctorcomp/DoctorProfile';





function App() {
  
  
  return (
    <Router>
    

    
    

    
      
      
      
     
    <UserProvider>
    <DoctorProvider>
    <Switch>
    <Route exact path = "/"><StartingComp/></Route>
      <Route exact path = "/patientauth"><PLogin/></Route>
      <Route exact path = "/doctorauth"><DocHome/></Route>
      <Route exact path = "/doctorauth/register" component = {Register}/>
      <Route exact path = "/patientauth/register" component = {PRegister}/>
      <Route exact path = "/doctorauth/home" component = {Dashboard}/>
      <Route exact path = "/patientauth/home" component = {PatHome}/>
      <Route exact path = "/patientauth/seedoctors" component = {Seedoctors}/>
      <Route path = "/doctorprofile/:id" component = {Profile}/>
      {/* <Route exact path = "/doctorauth/home" component = {PatHome}/> */}
      <Route exact path = "/doctorauth/doctorprofile" component = {DoctorProfile}/>
      {/* <Doute Pxact path = "/doctorauth/home" component = {PatHome}/> */}
      <Route component = {DoctorRoutes}/>
      <Route component = {Routes}/>
      
    </Switch>
      </DoctorProvider>
      </UserProvider>
      {/* <DoctorProvider>
      <Switch>
      <Route exact path = "/doctorauth"><DocHome/></Route>
      <Route exact path = "/patientauth"><PatHome/></Route>
      <Route component = {DoctorRoutes}/>
      </Switch>
      </DoctorProvider> */}
      
      
      
    
  
  </Router>
  );
}

export default App;
