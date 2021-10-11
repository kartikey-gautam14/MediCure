import React,{useContext} from 'react';
import { Route, Redirect } from 'react-router-dom';

import {UserContext} from '../Context/Provider'

const PrivateRoute = ({component: Component},...rest) => {
    const [state,dispatch] = useContext(UserContext);
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest}  render={props => (
            state.isAuthenticated ?
                <Component {...props} />
            : <Redirect to="/login" />
        )} />
    );
};

export default PrivateRoute;