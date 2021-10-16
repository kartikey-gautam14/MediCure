import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Dashboard from '../Doctorcomp/Dashboard';
import Register from '../Doctorcomp/Register'

function DoctorRoutes(props) {
    return (
        <section>
            <Switch>
           
            <Route  path = "/doctorauth/home"><Dashboard/></Route>
           
           
            <Route  path = "/doctorauth/home"><Dashboard/></Route>
            </Switch>
            
            
        </section>
    )
}

export default DoctorRoutes
