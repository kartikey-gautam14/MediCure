
import './App.css';
import { UserProvider } from "./Context/Provider";
import Pregister from './Components/Pregister'
import Register from './Components/Register'

function App() {
  return (
    <UserProvider>
      <Pregister />
      <Register/>
      
    </UserProvider>
  );
}

export default App;
