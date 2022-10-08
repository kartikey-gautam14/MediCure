import React from 'react';
import './App.css';
import { UserProvider } from "./Context/Provider";
import AuthRouter from './Components/AuthRouter';
//import {UserContext} from './Context/Provider';





function App() {
  
  
  return (
    <UserProvider>
      
      
      <AuthRouter  />
      
    </UserProvider>
  );
}

export default App;
